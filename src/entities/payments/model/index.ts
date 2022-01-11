import { paymentApi } from '@api'
import { Payments } from '@api/model'
import { createEffect, createStore } from 'effector'
import { useStore } from 'effector-react'

// const mock: Payments = {
//     bachelor: {
//         contract: {
//             customer: 'Иванов И.И.',
//             student: 'Родионов Е. Л.',
//             number: '0031451',
//             startDate: 'August 22, 2019',
//             sum: 29433,
//             endDate: 'August 31, 2023',
//             monthly: 650,
//         },
//         payments: [
//             {
//                 date: '6 October, 2020',
//                 value: 3900,
//             },
//             {
//                 date: '6 October, 2020',
//                 value: 3900,
//             },
//             {
//                 date: '5 March, 2020',
//                 value: 1300,
//             },
//             {
//                 date: 'August 22, 2019',
//                 value: 3900,
//             },
//         ],
//     },
//     magistracy: {
//         contract: {
//             customer: 'Иванов И.И.',
//             student: 'Родионов Е. Л.',
//             number: '0031451',
//             startDate: 'August 22, 2019',
//             sum: 29433,
//             endDate: 'August 31, 2023',
//             monthly: 650,
//         },
//         payments: [
//             {
//                 date: '6 October, 2020',
//                 value: 3900,
//             },
//             {
//                 date: '5 March, 2020',
//                 value: 1300,
//             },
//             {
//                 date: 'August 22, 2019',
//                 value: 3900,
//             },
//         ],
//     },
//     dormitory: {
//         contract: {
//             customer: 'Иванов И.И.',
//             student: 'Родионов Е. Л.',
//             number: '0031451',
//             startDate: 'August 22, 2019',
//             sum: 29433,
//             endDate: 'August 31, 2023',
//             monthly: 650,
//         },
//         payments: [
//             {
//                 date: 'October 5, 2021',
//                 value: 5950,
//             },
//             {
//                 date: 'October 4, 2021',
//                 value: 1950,
//             },
//             {
//                 date: 'April 2, 2021',
//                 value: 945.55,
//             },
//             {
//                 date: 'March 15, 2021',
//                 value: 1483,
//             },
//             {
//                 date: '6 October, 2020',
//                 value: 3900,
//             },
//             {
//                 date: '5 March, 2020',
//                 value: 1300,
//             },
//             {
//                 date: 'August 22, 2019',
//                 value: 3900,
//             },
//         ],
//     },
// }

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
        const response = await paymentApi.get()

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
