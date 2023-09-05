/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubjectModal } from '@features/schedule/ui'
import { TimeIntervals } from '@shared/api/model'
import capitalizeFirstLetter from '@shared/lib/capitalize-first-letter'
import React, { useEffect, useRef, useState } from 'react'
import { FiInbox } from 'react-icons/fi'
import { Error } from '../../../error'
import Flex from '../../../flex'
import { DayCalendarEvent, WeekEvents } from '../../types'
import { CalendarWrapper } from '../calendar-wrapper'
import Events from '../event/events'
import Times from '../times'
import { WeekDays } from '../week-days'
import { getEndTime } from './lib/get-end-time'
import { DayCalendarWrapper, EventInfo, EventsCarousel } from './styles'
import { getCurrentDay } from './lib/get-current-day'
import { DayCalendarProps } from './types'
import { useCalendarDay } from './hooks/use-calendar-day'

export const DayCalendar = (props: DayCalendarProps) => {
    const {
        handleDayClick,
        currentDay,
        events,
        handleCarouselScroll,
        carouselRef,
        interval,
        scale,
        shift,
        onEventClick,
        chosenEvent,
        showDates,
        timeInterval,
    } = useCalendarDay(props)

    return (
        <DayCalendarWrapper d="column" gap="12px">
            <WeekDays
                onDayClick={handleDayClick}
                currentChosenDay={currentDay}
                showDates={showDates}
                showColumns={false}
                events={events}
            />
            <Flex h="100%" gap="18px">
                <EventsCarousel onScroll={handleCarouselScroll} ref={carouselRef}>
                    {Object.keys(events ?? {}).map((day, i) => {
                        return (
                            <CalendarWrapper className="calendar-wrapper" key={i}>
                                <Times interval={interval} scale={scale} />
                                <Events
                                    weekDay={i + 1}
                                    events={events?.[day as keyof typeof events] ?? []}
                                    shift={shift}
                                    currentEvent={null}
                                    scale={scale}
                                    onClick={onEventClick}
                                    interval={interval}
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
