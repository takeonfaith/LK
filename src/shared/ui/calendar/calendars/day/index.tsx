import { SubjectModal } from '@features/schedule/ui'
import React from 'react'
import { FiInbox } from 'react-icons/fi'
import { Error } from '../../../error'
import Flex from '../../../flex'
import { WeekDays } from '../../ui/week-days'
import { useCalendarDay } from './hooks/use-calendar-day'
import { DayCalendarWrapper, EventInfo, EventsCarousel } from './styles'
import { DayCalendarProps } from './types'
import { TimesEvents } from './ui/times-events'

export const DayCalendar = (props: DayCalendarProps) => {
    const {
        currentDay,
        events,
        carouselRef,
        eventsRef,
        interval,
        scale,
        shift,
        chosenEvent,
        showDates,
        timeInterval,
        handleDayClick,
        handleCarouselScroll,
        onEventClick,
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
                        const dayEvents = events?.[day as keyof typeof events]
                        return (
                            <TimesEvents
                                key={day}
                                events={dayEvents}
                                interval={interval}
                                scale={scale}
                                weekday={i + 1}
                                currentDay={currentDay}
                                shift={shift}
                                onEventClick={onEventClick}
                                ref={eventsRef}
                            />
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
                            groups={chosenEvent.groups}
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
