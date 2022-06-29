export type VacationSchedule = {
    subdivision: string
    post: string
    wage: number
    jobType: string
    vacations?: Vacation[]
    allPlannedVacationPeriods?: number
    allActualVacationPeriods?: number
    allVacationRest?: number
}

export type Vacation = {
    plannedVacationPeriods?: string
    actualVacationPeriods?: string
    vacationRest?: string
}
