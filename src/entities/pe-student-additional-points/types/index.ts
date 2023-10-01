export interface AddStudentAdditionalPoints {
    studentGuid: string
    workType: WorkType
    date: string
    pointsAmount: number
    comment: string
}

export enum WorkType {
    Activist = 'ACTIVIST',
    Competition = 'COMPETITION',
    ExternalFitness = 'EXTERNAL_FITNESS',
    GTO = 'GTO',
    InternalTeam = 'INTERNAL_TEAM',
    OnlineWork = 'ONLINE_WORK',
    Science = 'SCIENCE',
}
