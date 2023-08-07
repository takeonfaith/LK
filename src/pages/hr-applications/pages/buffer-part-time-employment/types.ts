export interface BufferPartTimeEmployment {
    isError: false
    error: string
    orders: BufferPartTimeEmploymentOrder[]
}
export interface BufferPartTimeEmploymentOrder {
    documentGuid: string
    creationDate: string
    registrationDate: string
    hasApplication: boolean
    displayApplication: boolean
    displayOrder: boolean
    canBeDownloaded: boolean
    status: string
    orderRegistrationStatus: string
    orderNumber: string
    weekends: BufferPartTimeEmploymentWeekend[]
}

export interface BufferPartTimeEmploymentWeekend {
    employeeGuid: string
    type: number
    dates: [
        {
            date: string
            hours: number
        },
    ]
}
export interface BufferPartTimeEmploymentForm {
    employeeGuid: string
    dates: [
        {
            date: string
            dayOff: string
            hours: number
        },
    ]
}
