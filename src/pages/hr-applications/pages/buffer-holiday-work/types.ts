export interface BufferHolidayWork {
    isError: false
    error: string
    orders: BufferHolidayWorkOrder[]
}
export interface BufferHolidayWorkOrder {
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
    weekends: BufferHolidayWorkWeekend[]
}

export interface BufferHolidayWorkWeekend {
    employeeGuid: string
    type: number
    dates: [
        {
            date: string
            hours: number
        },
    ]
}
export interface BufferHolidayWorkForm {
    employeeGuid: string
    dates: [
        {
            date: string
            dayOff: string
            hours: number
        },
    ]
}
