export interface PEStudent {
    fullName: string
    groupNumber: string
    healthGroup: string
    studentGuid: string
    visits: number
    additionalPoints: number
    pointsForStandards: number
    group: {
        visitValue: number
    }
    course: number
    department: string
}
