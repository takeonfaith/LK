export interface Application {
    regDate: string
    regNumber: string
    requestTitle: string
    requestBody: string
    status: 'Готово' | 'Принято в работу' | 'Отклонено'
    statusDate: string
    structuralSubdivision: string
    notes: string
}
