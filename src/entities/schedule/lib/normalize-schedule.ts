import {
    CapitalLettersWeekNames,
    FullRawScheduleResponse,
    FullRawTeacherScheduleResponse,
    IFullSchedule,
    IWeekEventSchedule,
    RawScheduleResponse,
    RawTeacherScheduleResponse,
} from '@shared/api/model'
import { IWeekDayNames, WEEK_DAYS } from '@shared/consts'
import { EMPTY_WEEK, SCHEDULE_NO_RESULT } from '../consts'
import { getCalendarSchedule } from './get-calendar-schedule'
import getCurrentDaySubjects from './get-current-day-schedule'

export const normalizeSchedule = (
    rawSchedule: FullRawScheduleResponse | FullRawTeacherScheduleResponse,
): IFullSchedule => {
    if (typeof rawSchedule === 'object' && 'status' in rawSchedule) {
        return SCHEDULE_NO_RESULT.schedule
    }

    const week: IWeekEventSchedule = { ...EMPTY_WEEK }
    const semestr: IWeekEventSchedule = { ...EMPTY_WEEK }

    for (const key in rawSchedule) {
        if (key !== 'Sunday') {
            // Monday -> monday
            const transformedKey = (key.charAt(0).toLowerCase() + key.slice(1)) as IWeekDayNames
            const k = key as CapitalLettersWeekNames

            // Преобразование пришедшего типа под календарь
            const el = (rawSchedule as any)[k]
            if ('lessons' in el) {
                week[transformedKey] = getCalendarSchedule(
                    getCurrentDaySubjects((el as RawScheduleResponse[CapitalLettersWeekNames]).lessons),
                    WEEK_DAYS[transformedKey].short,
                )
                semestr[transformedKey] = getCalendarSchedule(
                    (el as RawScheduleResponse[CapitalLettersWeekNames]).lessons,
                    WEEK_DAYS[transformedKey].short,
                )
            } else {
                week[transformedKey] = getCalendarSchedule(
                    getCurrentDaySubjects(el as RawTeacherScheduleResponse[CapitalLettersWeekNames]),
                    WEEK_DAYS[transformedKey].short,
                )
                semestr[transformedKey] = getCalendarSchedule(
                    el as RawTeacherScheduleResponse[CapitalLettersWeekNames],
                    WEEK_DAYS[transformedKey].short,
                )
            }
        }
    }
    const currentDay = new Date()
        .toLocaleDateString('en-EN', {
            weekday: 'long',
        })
        .toLocaleLowerCase() as IWeekDayNames

    const today = week[currentDay]

    return {
        today,
        week,
        semestr,
        session: {},
    }
}
