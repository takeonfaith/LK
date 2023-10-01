import { isNextEvent } from '@features/schedule/lib/is-next-event'
import React from 'react'
import { CurrentTimeLine } from '../../calendars/day/ui/current-time-line'
import { DayCalendarEvent } from '../../types'
import EventItem from './event-item'
import { checkIfEventIsCurrent } from './lib/check-if-event-is-current'
import { prepareEvents } from './lib/prepare-events'
import { EventsWrapper } from './styles'

type Props = {
    currentDay?: number
    events: DayCalendarEvent[] | null | undefined
    shift: number
    currentEvent: DayCalendarEvent | null
    scale: number
    onClick: (event: DayCalendarEvent) => void
    shortInfo?: boolean
    weekDay: number
    interval: [number, number]
    showTime?: boolean
}

const Events = ({ events, shift, scale, shortInfo, weekDay, interval, showTime, onClick, currentDay }: Props) => {
    const eventsPrepared = prepareEvents(events)

    const isCurrentDay = new Date().getDay() === weekDay
    const isTimelineVisible = currentDay !== undefined ? currentDay + 1 === weekDay : undefined

    return (
        <EventsWrapper h="100%" d="column">
            {isCurrentDay && (
                <CurrentTimeLine
                    isVisible={isTimelineVisible}
                    showTime={showTime}
                    scale={scale}
                    shift={shift}
                    interval={interval}
                />
            )}
            {Object.keys(eventsPrepared).map((key, i) => {
                return eventsPrepared[key].map((event, index) => {
                    return (
                        <EventItem
                            leftShift={index}
                            quantity={eventsPrepared[key].length}
                            scale={scale}
                            isCurrentEvent={checkIfEventIsCurrent(event, isCurrentDay)}
                            isNextEvent={isNextEvent(events, event, isCurrentDay)}
                            {...event}
                            onClick={onClick}
                            shift={shift}
                            key={event.startTime + event.title + i + index}
                            shortInfo={shortInfo}
                        />
                    )
                })
            })}
        </EventsWrapper>
    )
}

export default Events
