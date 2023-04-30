export interface BufferWorkTransfer {
    isError: false
    error: string
    employeeHistories: BufferWorkTransferHistories[]
}
export interface BufferWorkTransferHistories {
    employeeGuid: string
    spentChangeInShareOfRate: BufferWorkTransferForm[]
    notTakenChangeInShareOfRate: BufferWorkTransferForm[]
}

export interface BufferWorkTransferShareOfRate {
    documentGuid: string
    desiredRate: number
    desiredJob: string
    transferDate: string
    documentStatus: {
        creationDate: string
        signedDate: string
        applicationId: string
        orderId: string
        applicationRouteId: string
        orderRouteId: string
        hasApplication: true
        hasOrder: true
        orderNumber: string
        displayApplication: true
        displayOrder: true
        orderStatus: string
        applicationApporvalStatus: string
        orderApprovalStatus: string
        downloadApplication: true
        downloadOrder: true
    }
}
export interface BufferWorkTransferForm {
    employeeGuid: string
    transferDate: string
    divisionGuid: string
    desiredJob: string
    desiredRate: number
}
