export interface IPaymentItem {
    date: string
    value: string
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
    student: string
    sum: string
    type: string
    qr_current: string
    qr_total: string
    agreements: any[]
}

export interface Agreement {
    date: string
    file: string
    id: string
    name: string
    signed_user: boolean
    signed_user_date: string
    signed_user_time: string
    type: string
}
export interface Payments {
    contracts: PaymentsContract[]
}
