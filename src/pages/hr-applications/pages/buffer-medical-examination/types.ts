export interface BufferMedicalExamination {
    isError: false
    error: string
    age: number
    employeeMedicalExaminations: BufferMedicalExaminationOrder[]
}
export interface BufferMedicalExaminationOrder {
    tutor: boolean
    employeeGuid: string
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
    weekends: BufferMedicalExaminationWeekend[]
}

export interface BufferMedicalExaminationWeekend {
    employeeGuid: string
    type: number
    dates: [
        {
            date: string
            hours: number
        },
    ]
}
export interface BufferMedicalExaminationForm {
    employeeGuid: string
    start: string
    end: string
}
