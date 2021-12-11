export interface IPaymentItem {
    date: string
    value: number
}

export interface PaymentsContract {
    customer: string
    student: string
    number: string
    startDate: string
    sum: number
    endDate: string
    monthly: number
}

export interface PaymentStructure {
    contract: PaymentsContract
    payments: IPaymentItem[]
}

export interface Payments {
    bachelor: PaymentStructure
    magistracy: PaymentStructure
    dormitory: PaymentStructure
}
