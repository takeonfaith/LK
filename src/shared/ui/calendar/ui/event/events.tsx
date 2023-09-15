import Flex from '@shared/ui/flex'
import React from 'react'
import { DayCalendarEvent } from '../../types'
import { CurrentTimeLine } from '../../calendars/day/ui/current-time-line'
import EventItem from './event-item'
import { prepareEvents } from './lib/prepare-events'
import { EventsWrapper } from './styles'
import { isNextEvent } from '@features/schedule/lib/is-next-event'

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

const Events = ({
    events,
    currentEvent,
    shift,
    scale,
    shortInfo,
    weekDay,
    interval,
    showTime,
    onClick,
    currentDay,
}: Props) => {
    const eventsPrepared = prepareEvents(events)

    const isCurrentDay = new Date().getDay() === weekDay
    const isTimelineVisible = currentDay !== undefined ? currentDay + 1 === weekDay : undefined

    return (
        <Flex d="row" gap="2px" h="100%" className="events">
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
                        const isCurrent =
                            currentEvent?.title === event.title && currentEvent.startTime === event.startTime

                        return (
                            <EventItem
                                leftShift={index}
                                quantity={eventsPrepared[key].length}
                                isCurrent={isCurrent}
                                otherIsCurrent={!isCurrent && currentEvent !== null}
                                scale={scale}
                                isNextEvent={isNextEvent(events, event)}
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
        </Flex>
    )
}

export default Events
