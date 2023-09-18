import { RawSessionScheduleResponse } from '@shared/api/model'
import { WEEK_DAYS } from '@shared/constants'
import { getWeekDayFromDate } from '@shared/lib/dates/get-weekday-from-date'
import { isValidDate } from '@shared/lib/dates/is-valid-date'
import { EMPTY_WEEK } from '../consts'
import { getCalendarSchedule } from './get-calendar-schedule'

export const normalizeSessionSchedule = (schedule: RawSessionScheduleResponse) => {
    const result = { ...EMPTY_WEEK }
    const startDate = new Date(Object.keys(schedule)[0])
    const endDate = new Date(Object.keys(schedule)[Object.keys(schedule).length - 1])

    if (!isValidDate(startDate) || !isValidDate(endDate))
        return {
            schedule: result,
            startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
        }

    for (const day in schedule) {
        if (Object.prototype.hasOwnProperty.call(schedule, day)) {
            const date = new Date(day)

            const weekday = getWeekDayFromDate(date)

            if (weekday === 'sunday') continue

            result[weekday] = getCalendarSchedule(schedule[day].lessons, WEEK_DAYS[weekday].short)
        }
    }

    return { schedule: result, startDate, endDate }
}
