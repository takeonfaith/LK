import { IWeekDayNames } from '@shared/consts'
import { WeekEvents } from '@shared/ui/calendar/types'

export const getDayEvents = (events: WeekEvents, date: Date) => {
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' }).toLocaleLowerCase() as
        | IWeekDayNames
        | 'sunday'

    if (weekday === 'sunday') return []

    return events?.[weekday].filter((event) => {
        return date >= event.startDate && date <= (event.endDate ?? event.startDate)
    })
}
