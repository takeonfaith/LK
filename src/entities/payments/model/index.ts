import { paymentApi } from '@api'
import { Payments } from '@api/model'
import { useStore } from 'effector-react/compat'
import { createEffect, createStore } from 'effector/compat'

const usePayments = () => {
    return {
        data: useStore($paymentsStore).payments,
        loading: useStore(getPaymentsFx.pending),
        error: useStore($paymentsStore).error,
    }
}

interface PaymentsStore {
    payments: Payments | null
    error: string | null
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

const $paymentsStore = createStore<PaymentsStore>({ payments: null, error: null })
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

export const selectors = {
    usePayments,
}

export const effects = {
    getPaymentsFx,
}
