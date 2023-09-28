import { DayCalendarEvent } from '@shared/ui/calendar/types'

export const prepareEvents = (events: DayCalendarEvent[] | null | undefined): Record<string, DayCalendarEvent[]> => {
    const result: Record<string, DayCalendarEvent[]> = {}

    if (!events) return result

    for (let index = 0; index < events.length; index++) {
        const event = events[index]

        if (!result[event.startTime]) {
            result[event.startTime] = []
        }

        if (event.startTime === '18:20') {
            if (!result['17:50']) {
                result['17:50'] = []
            }
            result['17:50'].push(event)
        } else if (event.startTime === '19:50' && result['19:30']) {
            if (!result['19:30']) {
                result['19:30'] = []
            }
            result['19:30'].push(event)
        } else {
            result[event.startTime].push(event)
        }
    }

    return result
}
