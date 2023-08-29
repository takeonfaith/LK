import { WeekEvents } from '../../types'

export type CalendarWeekProps = {
    events: WeekEvents
    showDates?: boolean
    interval: [number, number]
    listView?: boolean
}
