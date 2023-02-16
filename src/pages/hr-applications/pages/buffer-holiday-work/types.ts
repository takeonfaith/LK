export interface BufferHolidayWork {
    isError: false
    error: string
    orders: [
        {
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
            weekends: [
                {
                    employeeGuid: string
                    type: number
                    dates: [
                        {
                            date: string
                            hours: number
                        },
                    ]
                },
            ]
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
