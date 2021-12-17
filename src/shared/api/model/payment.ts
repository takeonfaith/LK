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
}

export interface Payments {
    contracts: PaymentsContract[]
}
