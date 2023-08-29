import { DayCalendarEvent } from '@shared/ui/calendar'

export const getCurrentEvent = (events: DayCalendarEvent[] | null): DayCalendarEvent | null => {
    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()
    const fullMinutes = hours * 60 + minutes

    if (!events) return null

    for (let i = 0; i < events.length; i++) {
        const event = events[i]
        const [eventHours, eventMinutes] = event.startTime.split(':')
        const startFullMinutes = +eventHours * 60 + +eventMinutes
        if (fullMinutes >= startFullMinutes && fullMinutes <= startFullMinutes + event.duration) {
            return event
        }
    }

    return null
}
