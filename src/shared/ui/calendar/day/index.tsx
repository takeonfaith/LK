/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubjectModal } from '@features/schedule/ui'
import { TimeIntervals } from '@shared/api/model'
import capitalizeFirstLetter from '@shared/lib/capitalize-first-letter'
import React, { useEffect, useRef, useState } from 'react'
import { FiInbox } from 'react-icons/fi'
import { Error } from '../../error'
import Flex from '../../flex'
import { DayCalendarEvent, WeekEvents } from '../types'
import { CalendarWrapper } from '../ui/calendar-wrapper'
import Events from '../ui/event/events'
import Times from '../ui/times'
import { WeekDays } from '../ui/week-days'
import { getEndTime } from './lib/get-end-time'
import { DayCalendarWrapper, EventInfo, EventsCarousel } from './styles'
import { getCurrentDay } from './lib/get-current-day'

type Props = {
    interval?: [number, number]
    events: WeekEvents
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
    const currentDate = new Date().toLocaleDateString('ru-RU', { day: '2-digit', month: 'long' })
    const weekday = capitalizeFirstLetter(new Date().toLocaleDateString('ru-RU', { weekday: 'long' }))
    const shift = interval[0] * 60
    const [currentDay, setCurrentDay] = useState(getCurrentDay())
    const carouselRef = useRef<HTMLDivElement>(null)
    const scale = 1.1
    // const currentEvent = getCurrentEvent(events)
    const timeInterval = chosenEvent
        ? (`${chosenEvent.startTime} - ${getEndTime(chosenEvent.startTime, chosenEvent.duration)}` as TimeIntervals)
        : ('9:00' as TimeIntervals)

    const onClick = (event: DayCalendarEvent) => {
        setChosenEvent(event)
    }

    const handleCarouselScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
        const pageIndex = Math.floor(e.currentTarget.scrollLeft / e.currentTarget.clientWidth)
        setCurrentDay(pageIndex)
    }

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = carouselRef.current.clientWidth * getCurrentDay()
        }
    }, [carouselRef])

    const handleDayClick = (day: number) => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = carouselRef.current.clientWidth * day
        }
    }

    return (
        <DayCalendarWrapper d="column" gap="12px">
            <WeekDays
                onDayClick={handleDayClick}
                currentChosenDay={currentDay}
                showDates
                showColumns={false}
                events={events}
            />
            <Flex h="100%" gap="18px">
                <EventsCarousel onScroll={handleCarouselScroll} ref={carouselRef}>
                    {Object.keys(events ?? {}).map((day, i) => {
                        return (
                            <CalendarWrapper className="calendar-wrapper" listView={listView} key={i}>
                                {!listView && <Times interval={interval} scale={scale} />}
                                <Events
                                    weekDay={i + 1}
                                    events={events?.[day as keyof typeof events] ?? []}
                                    shift={shift}
                                    currentEvent={null}
                                    scale={scale}
                                    onClick={onClick}
                                    listView={listView}
                                />
                            </CalendarWrapper>
                        )
                    })}
                </EventsCarousel>
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
                            weekday={chosenEvent.weekday}
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
