import { DayCalendarEvent } from '@shared/ui/calendar/types'
import { CalendarWrapper } from '@shared/ui/calendar/ui/calendar-wrapper'
import Events from '@shared/ui/calendar/ui/event/events'
import Times from '@shared/ui/calendar/ui/times'
import React, { forwardRef } from 'react'

type Props = {
    scale: number
    weekday: number
    events: DayCalendarEvent[] | undefined
    interval: [number, number]
    currentDay: number
    shift: number
    onEventClick: (event: DayCalendarEvent) => void
}

export const TimesEvents = forwardRef(function TimesEvents(
    { interval, events, scale, weekday, shift, onEventClick, currentDay }: Props,
    eventsRef: React.ForwardedRef<HTMLDivElement>,
) {
    return (
        <CalendarWrapper className="calendar-wrapper" ref={new Date().getDay() === weekday ? eventsRef : undefined}>
            <Times interval={interval} scale={scale} />
            <Events
                currentDay={currentDay}
                weekDay={weekday}
                events={events ?? []}
                shift={shift}
                currentEvent={null}
                scale={scale}
                onClick={onEventClick}
                interval={interval}
            />
        </CalendarWrapper>
    )
})
