import { WeekEvents } from '../../types'

export type DayCalendarProps = {
    interval?: [number, number]
    events: WeekEvents
    showDates?: boolean
    currentChosenDay?: number
}
