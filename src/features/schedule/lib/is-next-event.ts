import calcTimeLeft from '@shared/lib/dates/calc-time-left'
import calcNextSubjectTime from './calc-next-subject-time'
import { DayCalendarEvent } from '@shared/ui/calendar'

export const isNextEvent = (
    allEvents: DayCalendarEvent[] | null | undefined,
    event: DayCalendarEvent,
    isCurrentDay: boolean,
) => {
    return calcNextSubjectTime(allEvents) === calcTimeLeft(event.startTime) && isCurrentDay
}
