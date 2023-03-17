export interface BufferHolidayTransfer {
    isError: boolean
    error: string
    employeeVacations: {
        employeeGuid: string
        schedule: [
            {
                documentGuid: string
                status: {
                    creationDate: string
                    signedDate: string
                    hasApplication: boolean
                    hasOrder: boolean
                    orderNumber: string
                    displayApplication: boolean
                    displayOrder: boolean
                    orderStatus: string
                    applicationApporvalStatus: string
                    orderApprovalStatus: string
                    downloadApplication: boolean
                    downloadOrder: boolean
                }
                isCarriedOver: boolean
                vacation: {
                    period: {
                        startDate: string
                        endDate: string
                        totalDays: 0
                    }
                    status: {
                        creationDate: string
                        signedDate: string
                        hasApplication: boolean
                        hasOrder: boolean
                        orderNumber: string
                        displayApplication: boolean
                        displayOrder: boolean
                        orderStatus: string
                        applicationApporvalStatus: string
                        orderApprovalStatus: string
                        downloadApplication: boolean
                        downloadOrder: boolean
                    }
                }
                carriedOver: {
                    period: {
                        startDate: string
                        endDate: string
                        totalDays: 0
                    }
                    status: {
                        creationDate: string
                        signedDate: string
                        hasApplication: boolean
                        hasOrder: boolean
                        orderNumber: string
                        displayApplication: boolean
                        displayOrder: boolean
                        orderStatus: string
                        applicationApporvalStatus: string
                        orderApprovalStatus: string
                        downloadApplication: boolean
                        downloadOrder: boolean
                    }
                }
            },
        ]
        spent: {
            vacation: {
                period: {
                    startDate: string
                    endDate: string
                    totalDays: 0
                }
                status: {
                    creationDate: string
                    signedDate: string
                    hasApplication: boolean
                    hasOrder: boolean
                    orderNumber: string
                    displayApplication: boolean
                    displayOrder: boolean
                    orderStatus: string
                    applicationApporvalStatus: string
                    orderApprovalStatus: string
                    downloadApplication: boolean
                    downloadOrder: boolean
                }
            }
            documentGuid: string
        }[]
        notTaken: {
            vacation: {
                period: {
                    startDate: string
                    endDate: string
                    totalDays: 0
                }
                status: {
                    creationDate: string
                    signedDate: string
                    hasApplication: boolean
                    hasOrder: boolean
                    orderNumber: string
                    displayApplication: boolean
                    displayOrder: boolean
                    orderStatus: string
                    applicationApporvalStatus: string
                    orderApprovalStatus: string
                    downloadApplication: boolean
                    downloadOrder: boolean
                }
            }
            documentGuid: string
        }[]
    }
}

export interface BufferHolidayTransferForm {
    employeeGuid: string
    type: number
    start: string
    end: string
}
