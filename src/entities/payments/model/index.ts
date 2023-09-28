import { paymentApi } from '@api'
import { Payments } from '@api/model'
import { combine, createEvent, sample } from 'effector'
import { createEffect, createStore } from 'effector'
import changeCanSign from '../lib/change-can-sign'
import { agreementSubmit } from '@shared/api/payment-api'
import { MessageType } from '@shared/ui/types'
import { popUpMessageModel } from '@entities/pop-up-message'

const signAgreement = createEvent<string>()
const changeDone = createEvent<boolean>()
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

    if (!response.data.contracts.education && !response.data.contracts.dormitory) throw new Error()
})

sample({
    clock: signAgreementFx.doneData,
    fn: () => ({ message: 'Успешно подписано', type: 'success' as MessageType }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: signAgreementFx.doneData,
    fn: () => true,
    target: changeDone,
})

sample({
    clock: signAgreementFx.failData,
    fn: () => ({ message: 'У вас нет данных по оплате', type: 'failure' as MessageType }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({ clock: signAgreement, target: signAgreementFx })

const clearStore = createEvent()

const $loading = combine(signAgreementFx.pending, getPaymentsFx.pending, Boolean)
const $completed = createStore<boolean>(false).on(setCompleted, (_, completed) => completed)
const $done = createStore<boolean>(false).on(changeDone, (_, done) => done)
const $error = createStore<string | null>(null)
    .on(getPaymentsFx, () => null)
    .on(getPaymentsFx.failData, (_, newData) => newData.message)
    .on(signContractFx.failData, (_, newData) => newData.message)
const $paymentsStore = createStore<Payments | null>(null)
    .on(getPaymentsFx.doneData, (_, newData) => newData)
    .on(signContractFx.doneData, (oldData, contractId) => changeCanSign(oldData, contractId, false))
    .on(clearStore, () => null)

export const stores = {
    $loading,
    $completed,
    $done,
    $error,
    $paymentsStore,
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
