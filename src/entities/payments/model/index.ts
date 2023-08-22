import { paymentApi } from '@api'
import { Payments } from '@api/model'
import { createEvent } from 'effector'
import { useStore } from 'effector-react/compat'
import { createEffect, createStore } from 'effector'
import changeCanSign from '../lib/change-can-sign'
import { agreementSubmit } from '@shared/api/payment-api'

interface PaymentsStore {
    payments: Payments | null
    error: string | null
}

const DEFAULT_STORE: PaymentsStore = { payments: null, error: null }

const usePayments = () => {
    return {
        data: useStore($paymentsStore).payments,
        loading: useStore(getPaymentsFx.pending),
        error: useStore($paymentsStore).error,
    }
}

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
        return response.data.contracts
    } catch (_) {
        throw new Error('Не удалось загрузить оплату')
    }
})

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

export const selectors = {
    usePayments,
}

export const effects = {
    getPaymentsFx,
    signContractFx,
    signAgreementFx,
}

export const events = {
    clearStore,
}
