import { paymentApi } from '@api'
import { LoadPayments, Payments, PaymentsContract } from '@api/model'
import { createEffect, createStore } from 'effector/compat'
import { useStore } from 'effector-react/compat'

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

const preparePayments = (data: LoadPayments) => {
    const final: Payments = {
        dormitory: [],
        education: [],
    }
    data.contracts.forEach((contract: PaymentsContract) => {
        switch (contract.type) {
            case 'Общежитие':
                final.dormitory.push(contract)
                break
            case 'Обучение':
                final.dormitory.push(contract)
                break
        }
    })

    return final
}

const getPaymentsFx = createEffect(async (): Promise<Payments> => {
    const response = await paymentApi.get()
    if (!response.data.contracts.length) throw new Error('У вас нет данных по оплате')
    try {
        return preparePayments(response.data)
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
