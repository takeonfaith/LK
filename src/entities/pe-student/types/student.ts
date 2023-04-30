export interface PEStudent {
    studentGuid: string
    fullName: string
    groupNumber: string
    healthGroup: string
    visits: number
    additionalPoints: number
    pointsForStandards: number
    group: {
        visitValue: number
    }
    course: number
    department: string
}

export type PEStudentProfile = PEStudent & {
    visitsHistory: {
        id: number
        date: string
        // TODO: use other types
        sport: 'ARM_WRESTLING'
        teacher: {
            fullName: string
        }
    }[]
}
