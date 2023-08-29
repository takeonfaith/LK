import Flex from '@shared/ui/flex'
import React from 'react'
import styled from 'styled-components'
import { DayCalendarEvent } from '../../types'
import { CurrentTimeLine } from '../day/ui/current-time-line'
import EventItem from './event-item'

const EventsStyled = styled(Flex)``

const EventsWrapper = styled(Flex)`
    height: 100%;
    z-index: 1;
    position: relative;
    margin-top: 19px;
    margin-left: 0px;
    margin-right: 0px;
`

type Props = {
    events: DayCalendarEvent[] | null | undefined
    shift: number
    currentEvent: DayCalendarEvent | null
    scale: number
    onClick: (event: DayCalendarEvent) => void
    shortInfo?: boolean
    weekDay: number
    interval: [number, number]
}

const prepareEvents = (events: DayCalendarEvent[] | null | undefined): Record<string, DayCalendarEvent[]> => {
    const result: Record<string, DayCalendarEvent[]> = {}

    if (!events) return result

    for (let index = 0; index < events.length; index++) {
        const event = events[index]

        if (!result[event.startTime]) {
            result[event.startTime] = []
        }

        result[event.startTime].push(event)
    }

    return result
}

const Events = ({ events, currentEvent, shift, scale, onClick, shortInfo, weekDay, interval }: Props) => {
    const eventsPrepared = prepareEvents(events)

    const isCurrentDay = new Date().getDay() === weekDay

    return (
        <EventsStyled d="row" gap="2px" h="100%" className="events">
            <EventsWrapper h="100%" d="column">
                {isCurrentDay && <CurrentTimeLine scale={scale} shift={shift} interval={interval} />}
                {Object.keys(eventsPrepared).map((key, i) => {
                    return eventsPrepared[key].map((event, index) => {
                        const isCurrent =
                            currentEvent?.title === event.title && currentEvent.startTime === event.startTime

                        return (
                            <EventItem
                                leftShift={index}
                                width={eventsPrepared[key].length}
                                isCurrent={isCurrent}
                                otherIsCurrent={!isCurrent && currentEvent !== null}
                                scale={scale}
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
        </EventsStyled>
    )
}

export default Events
