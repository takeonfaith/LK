import { paymentApi } from '@api'
import { Payments } from '@api/model'
import { createEvent, sample } from 'effector'
import { useStore } from 'effector-react/compat'
import { createEffect, createStore } from 'effector'
import changeCanSign from '../lib/change-can-sign'
import { agreementSubmit } from '@shared/api/payment-api'

interface PaymentsStore {
    payments: Payments | null
    error: string | null
    completed: boolean
    done: boolean
}

const DEFAULT_STORE: PaymentsStore = { payments: null, completed: false, done: false, error: null }

const signAgreement = createEvent<string>()
const setDone = createEvent<boolean>()
const setCompleted = createEvent<boolean>()

const getPaymentsFx = createEffect(async (): Promise<Payments> => {
    const response = await paymentApi.get()
    if (!response.data.contracts.education && !response.data.contracts.dormitory)
        throw new Error('У вас нет данных по оплате')
    try {
        return response.data.contracts
    } catch (_) {
        throw new Error('Не удалось загрузить оплату')
    }
})

const signContractFx = createEffect(async (contractId: string) => {
    try {
        await paymentApi.signContract(contractId)
        return contractId
    } catch (error) {
        throw new Error('Не удалось подписать конкракт. Причина: ' + error)
    }
})

const signAgreementFx = createEffect(async (id: string) => {
    const response = await agreementSubmit(id)
    if (!response.data.contracts.education && !response.data.contracts.dormitory)
        throw new Error('У вас нет данных по оплате')
    try {
        setDone(true)
        return response.data.contracts
    } catch (_) {
        throw new Error('Не удалось загрузить оплату')
    }
})

sample({ clock: signAgreement, target: signAgreementFx })

const useData = () => {
    const { completed, done, payments, error } = useStore($paymentsStore)
    return {
        data: { completed, done, payments },
        loading: useStore(getPaymentsFx.pending),
        workerLoading: useStore(signAgreementFx.pending),
        error: error,
    }
}

const clearStore = createEvent()

const $paymentsStore = createStore<PaymentsStore>(DEFAULT_STORE)
    .on(getPaymentsFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getPaymentsFx.doneData, (oldData, newData) => ({
        ...oldData,
        payments: newData,
    }))
    .on(getPaymentsFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(signContractFx.doneData, (oldData, contractId) => ({
        ...oldData,
        payments: changeCanSign(oldData.payments, contractId, false),
    }))
    .on(signContractFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))
    .on(setCompleted, (oldData, completed) => ({
        ...oldData,
        completed,
    }))
    .on(setDone, (oldData, done) => ({
        ...oldData,
        done,
    }))

export const selectors = {
    useData,
}

export const effects = {
    getPaymentsFx,
    signContractFx,
}

export const events = {
    signAgreement,
    setCompleted,
    clearStore,
}
