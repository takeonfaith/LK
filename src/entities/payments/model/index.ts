import { paymentApi } from '@api'
import { Payments } from '@api/model'
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

const getPaymentsFx = createEffect(async (): Promise<Payments> => {
    try {
        // eslint-disable-next-line no-console
        console.log('ewqeqw')

        const response = await paymentApi.get()
        // eslint-disable-next-line no-console
        console.log(response)

        return response.data
    } catch (error) {
        throw new Error(error as string)
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
