export interface IPaymentItem {
    date: string
    value: string
}

export type Paygraph = {
    date_end: string
    date_plan: string
    date_start: string
    semestr: string
    sum: string
    sum_pay: string
    sum_price: string
    year: string
}

export interface PaymentsContract {
    balance: string
    balance_currdate: string
    contragent: string
    endDateFact: string
    endDatePlan: string
    lastPaymentDate: string
    name: string
    number: string
    payments: IPaymentItem[]
    startDate: string
    bill?: string
    student: string
    sum: string
    type: string
    qr_current: string
    qr_total: string
    agreements: any[]
    file?: string
    paygraph?: Paygraph[]
}

export interface Agreement {
    can_sign: boolean
    date: string
    file: string
    id: string
    name: string
    signed_user: boolean
    signed_user_date: string
    signed_user_time: string
    type: string
}

export interface LoadPayments {
    contracts: {
        dormitory: PaymentsContract[]
        education: PaymentsContract[]
    }
}

export interface Payments {
    dormitory: PaymentsContract[]
    education: PaymentsContract[]
}
