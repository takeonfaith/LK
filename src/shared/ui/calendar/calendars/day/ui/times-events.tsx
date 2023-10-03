import { useScrollTo } from '@shared/lib/hooks/use-scroll-to'
import { DayCalendarEvent } from '@shared/ui/calendar/types'
import { CalendarWrapper } from '@shared/ui/calendar/ui/calendar-wrapper'
import Events from '@shared/ui/calendar/ui/event/events'
import { getEventTopPosition } from '@shared/ui/calendar/ui/event/lib/get-event-top-position'
import Times from '@shared/ui/calendar/ui/times'
import React from 'react'

type Props = {
    scale: number
    weekday: number
    events: DayCalendarEvent[] | undefined
    interval: [number, number]
    currentDay: number
    shift: number
    onEventClick: (event: DayCalendarEvent) => void
}

export const TimesEvents = ({ interval, events, scale, weekday, shift, onEventClick, currentDay }: Props) => {
    const eventsRef = useScrollTo({
        deps: [events?.length],
        getScrollTopValue: () => getEventTopPosition(events?.[0]?.startTime, shift, scale),
    })

    return (
        <CalendarWrapper className="calendar-wrapper" ref={eventsRef}>
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
}
