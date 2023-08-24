/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubjectModal } from '@features/schedule/ui'
import { TimeIntervals } from '@shared/api/model'
import { SCREEN_IPAD_AIR } from '@shared/consts'
import React, { useState } from 'react'
import { FiInbox } from 'react-icons/fi'
import styled from 'styled-components'
import { Error } from '../../error'
import Flex from '../../flex'
import { CalendarWrapper } from '../ui/calendar-wrapper'
import Events from '../ui/event/events'
import Times from '../ui/times'
import { Wrapper } from '../ui/wrapper'
import { getEndTime } from './lib/get-end-time'
import { DayCalendarEvent } from '../types'
import { Title } from '@shared/ui/title'
import Subtext from '@shared/ui/subtext'
import capitalizeFirstLetter from '@shared/lib/capitalize-first-letter'

const DayCalendarWrapper = styled(Wrapper)`
    height: calc(100vh - var(--header-height) - 195px);
`

const EventInfo = styled.div`
    min-width: 380px;
    max-width: 380px;
    height: 100%;
    z-index: 10;
    background: var(--form);
    border-radius: 10px;
    top: 0;
    overflow: hidden;
    box-shadow: var(--schedule-shadow);

    @media (max-width: ${SCREEN_IPAD_AIR}) {
        display: none;
    }
`

type Props = {
    interval?: [number, number]
    events: DayCalendarEvent[] | null
    listView?: boolean
}

const getCurrentEvent = (events: DayCalendarEvent[] | null): DayCalendarEvent | null => {
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

export const DayCalendar = ({ interval = [0, 23], events, listView = false }: Props) => {
    const [chosenEvent, setChosenEvent] = useState<DayCalendarEvent | null>(null)
    const currentDate = new Date().toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' })
    const weekday = capitalizeFirstLetter(new Date().toLocaleDateString('ru-RU', { weekday: 'long' }))
    const shift = interval[0] * 60
    const scale = 1
    const currentEvent = getCurrentEvent(events)
    const timeInterval = chosenEvent
        ? (`${chosenEvent.startTime} - ${getEndTime(chosenEvent.startTime, chosenEvent.duration)}` as TimeIntervals)
        : ('9:00' as TimeIntervals)

    const onClick = (event: DayCalendarEvent) => {
        setChosenEvent(event)
    }

    return (
        <DayCalendarWrapper d="column" gap="16px">
            <Flex gap="8px">
                <Title width="fit-content" size={3} align="left">
                    {currentDate}
                    <Subtext fontSize="1rem">{weekday}</Subtext>
                </Title>
            </Flex>
            <Flex h="100%" gap="18px">
                <CalendarWrapper listView={listView}>
                    {!listView && <Times interval={interval} scale={scale} />}
                    <Events
                        weekDay={new Date().getDay()}
                        events={events}
                        shift={shift}
                        currentEvent={currentEvent}
                        scale={scale}
                        onClick={onClick}
                        listView={listView}
                    />
                </CalendarWrapper>
                <EventInfo>
                    {!chosenEvent ? (
                        <Error text="Ничего не выбрано" image={<FiInbox />} />
                    ) : (
                        <SubjectModal
                            timeInterval={timeInterval}
                            color={chosenEvent.color}
                            name={chosenEvent.title}
                            place={chosenEvent.place}
                            link={chosenEvent.link}
                            teachers={chosenEvent.people}
                            dateInterval={chosenEvent.dateInterval}
                            rooms={chosenEvent.rooms ?? []}
                            isCurrent={false}
                        />
                    )}
                </EventInfo>
            </Flex>
        </DayCalendarWrapper>
    )
}
