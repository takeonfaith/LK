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
                vacationRest: '1 декабря 2021 - 30 ноября 2022 (6.95 дней)',
            },
            {
                actualVacationPeriods: '31 января - 6 февраля 2022 (7 дней)',
                plannedVacationPeriods: '31 января - 6 февраля 2022 (7 дней)',
            },
            {
                actualVacationPeriods: '31 января - 6 февраля 2022 (7 дней)',
                vacationRest: '1 декабря 2021 - 30 ноября 2022 (6.95 дней)',
            },
            {
                actualVacationPeriods: '31 января - 6 февраля 2022 (7 дней)',
                plannedVacationPeriods: '31 января - 6 февраля 2022 (7 дней)',
            },
            {
                vacationRest: '1 декабря 2021 - 30 ноября 2022 (6.95 дней)',
            },
            {
                vacationRest: '1 декабря 2021 - 30 ноября 2022 (6.95 дней)',
            },
        ],
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
