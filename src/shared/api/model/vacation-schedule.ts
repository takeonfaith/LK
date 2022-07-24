export type VacationSchedule = {
    subdivision: string
    post: string
    wage: number
    jobType: string
    vacations?: Vacation[]
    oldVacations?: OldVacation[]
    allPlannedVacationPeriods?: number
    allActualVacationPeriods?: number
    oldAllVacationRest?: number
}

export type OldVacation = {
    workingPeriod: string
    year: string
    vacationBalance: number
}

export type Vacation = {
    plannedVacationPeriods?: string
    actualVacationPeriods?: string
}
