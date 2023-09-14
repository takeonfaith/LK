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
import { getMonday } from '@shared/ui/calendar/ui/week-days/lib/get-monday'
import { EMPTY_WEEK, SCHEDULE_NO_RESULT } from '../consts'
import { getCalendarSchedule } from './get-calendar-schedule'
import getCurrentDaySubjects from './get-current-day-schedule'

export const normalizeSchedule = (
    rawSchedule: FullRawScheduleResponse | FullRawTeacherScheduleResponse,
): { schedule: IFullSchedule; startDate: Date; endDate: Date } => {
    let startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1)
    let endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)

    if (typeof rawSchedule === 'object' && 'status' in rawSchedule) {
        return {
            schedule: SCHEDULE_NO_RESULT.schedule,
            startDate,
            endDate,
        }
    }

    const weekday = getMonday(new Date())

    const week: IWeekEventSchedule = { ...EMPTY_WEEK }
    const semestr: IWeekEventSchedule = { ...EMPTY_WEEK }

    for (const key in rawSchedule) {
        if (key !== 'Sunday') {
            // Monday -> monday
            const transformedKey = key.toLocaleLowerCase() as IWeekDayNames
            const k = key as CapitalLettersWeekNames

            // Преобразование пришедшего типа под календарь
            const el = (rawSchedule as any)[k]
            if ('lessons' in el) {
                week[transformedKey] = getCalendarSchedule(
                    getCurrentDaySubjects((el as RawScheduleResponse[CapitalLettersWeekNames]).lessons, weekday),
                    WEEK_DAYS[transformedKey].short,
                )
                semestr[transformedKey] = getCalendarSchedule(
                    (el as RawScheduleResponse[CapitalLettersWeekNames]).lessons,
                    WEEK_DAYS[transformedKey].short,
                )
            } else {
                week[transformedKey] = getCalendarSchedule(
                    getCurrentDaySubjects(el as RawTeacherScheduleResponse[CapitalLettersWeekNames], weekday),
                    WEEK_DAYS[transformedKey].short,
                )
                semestr[transformedKey] = getCalendarSchedule(
                    el as RawTeacherScheduleResponse[CapitalLettersWeekNames],
                    WEEK_DAYS[transformedKey].short,
                )
            }

            startDate = new Date(
                Math.min(...semestr[transformedKey].map((el) => el.startDate.getTime()), startDate.getTime()),
            )
            endDate = new Date(
                Math.max(
                    ...semestr[transformedKey].map((el) => {
                        return (el.endDate ?? el.startDate).getTime()
                    }),
                    endDate.getTime(),
                ),
            )

            weekday.setDate(weekday.getDate() + 1)
        }
    }
    const currentDay = new Date()
        .toLocaleDateString('en-EN', {
            weekday: 'long',
        })
        .toLocaleLowerCase() as IWeekDayNames

    const today = week[currentDay]

    return {
        schedule: { today, week, semestr, session: {} },
        startDate,
        endDate,
    }
}
