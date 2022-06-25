import { VacationSchedule } from '@api/model/vacation-schedule'

export const VACATION_SCHEDULE_RESPONSE: VacationSchedule[] = [
    {
        jobType: 'Основное место работы',
        wage: 1,
        post: 'Преподаватель',
        subdivision: 'Кафедра “Инфроматика и информационные технологии”',
        vacations: [
            {
                actualVacationPeriods: '31 января - 6 февраля 2022 (7 дней)',
                plannedVacationPeriods: '31 января - 6 февраля 2022 (7 дней)',
                vacationRest: 49,
            },
            {
                actualVacationPeriods: '31 января - 6 февраля 2022 (7 дней)',
                plannedVacationPeriods: '31 января - 6 февраля 2022 (7 дней)',
            },
            {
                actualVacationPeriods: '31 января - 6 февраля 2022 (7 дней)',
                vacationRest: 12,
            },
            {
                actualVacationPeriods: '31 января - 6 февраля 2022 (7 дней)',
                plannedVacationPeriods: '31 января - 6 февраля 2022 (7 дней)',
            },
        ],
        oldVacations: [
            {
                vacationBalance: 3,
                year: '2018',
                workingPeriod: '01.12.17 - 30.11.18',
            },
            {
                vacationBalance: 7,
                year: '2019',
                workingPeriod: '01.12.18 - 30.11.19',
            },
        ],
        oldAllVacationRest: 17,
        allPlannedVacationPeriods: 56,
        allActualVacationPeriods: 7,
        allVacationRest: 6.95,
    },
    {
        jobType: 'Основное место работы',
        wage: 1,
        post: 'Преподаватель',
        subdivision: 'Кафедра “Инфроматика и информационные технологии”',
        vacations: [
            {
                plannedVacationPeriods: '31 января - 6 февраля 2022 (7 дней)',
            },
        ],
        allPlannedVacationPeriods: 56,
        allActualVacationPeriods: 7,
        allVacationRest: 6.95,
    },
]
