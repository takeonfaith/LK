import { Payments } from '@api/model'
import { createEffect, createStore } from 'effector'
import { useStore } from 'effector-react'

const mock: Payments = {
    bachelor: {
        contract: {
            customer: 'Иванов И.И.',
            student: 'Родионов Е. Л.',
            number: '0031451',
            startDate: 'August 22, 2019',
            sum: 29433,
            endDate: 'August 31, 2023',
            monthly: 650,
        },
        payments: [
            {
                date: '6 October, 2020',
                value: 3900,
            },
            {
                date: '6 October, 2020',
                value: 3900,
            },
            {
                date: '5 March, 2020',
                value: 1300,
            },
            {
                date: 'August 22, 2019',
                value: 3900,
            },
        ],
    },
    magistracy: {
        contract: {
            customer: 'Иванов И.И.',
            student: 'Родионов Е. Л.',
            number: '0031451',
            startDate: 'August 22, 2019',
            sum: 29433,
            endDate: 'August 31, 2023',
            monthly: 650,
        },
        payments: [
            {
                date: '6 October, 2020',
                value: 3900,
            },
            {
                date: '5 March, 2020',
                value: 1300,
            },
            {
                date: 'August 22, 2019',
                value: 3900,
            },
        ],
    },
    dormitory: {
        contract: {
            customer: 'Иванов И.И.',
            student: 'Родионов Е. Л.',
            number: '0031451',
            startDate: 'August 22, 2019',
            sum: 29433,
            endDate: 'August 31, 2023',
            monthly: 650,
        },
        payments: [
            {
                date: 'October 5, 2021',
                value: 5950,
            },
            {
                date: 'October 4, 2021',
                value: 1950,
            },
            {
                date: 'April 2, 2021',
                value: 945.55,
            },
            {
                date: 'March 15, 2021',
                value: 1483,
            },
            {
                date: '6 October, 2020',
                value: 3900,
            },
            {
                date: '5 March, 2020',
                value: 1300,
            },
            {
                date: 'August 22, 2019',
                value: 3900,
            },
        ],
    },
}

const usePayments = () => {
    return {
        data: useStore($paymentsStore),
        dormitory: useStore($paymentsStore).payments?.dormitory,
        bachelor: useStore($paymentsStore).payments?.bachelor,
        magistracy: useStore($paymentsStore).payments?.magistracy,
        loading: useStore(getPaymentsFx.pending),
    }
}

interface PaymentsStore {
    payments: Payments | null
}

const getPaymentsFx = createEffect(() => {
    return mock
})

const $paymentsStore = createStore<PaymentsStore>({ payments: mock }).on(getPaymentsFx.doneData, () => {})

export const selectors = {
    usePayments,
}

export const effects = {
    getPaymentsFx,
}
