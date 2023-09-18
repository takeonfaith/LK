import { areDatesEqual } from '@shared/lib/dates/are-dates-equal'
import { getWeekDayFromDate } from '@shared/lib/dates/get-weekday-from-date'
import { WeekEvents } from '@shared/ui/calendar/types'

export const getDayEvents = (events: WeekEvents, date: Date) => {
    const weekday = getWeekDayFromDate(date)

    if (weekday === 'sunday') return []

    return events?.[weekday].filter((event) => {
        if (!event.endDate) return areDatesEqual(event.startDate, date)

        return date >= event.startDate && date <= event.endDate
    })
}
