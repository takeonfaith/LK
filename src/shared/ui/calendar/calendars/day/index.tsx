import { SubjectModal } from '@features/schedule/ui'
import React from 'react'
import { FiInbox } from 'react-icons/fi'
import { Error } from '../../../error'
import Flex from '../../../flex'
import { CalendarWrapper } from '../../ui/calendar-wrapper'
import Events from '../../ui/event/events'
import Times from '../../ui/times'
import { WeekDays } from '../../ui/week-days'
import { useCalendarDay } from './hooks/use-calendar-day'
import { DayCalendarWrapper, EventInfo, EventsCarousel } from './styles'
import { DayCalendarProps } from './types'

export const DayCalendar = (props: DayCalendarProps) => {
    const {
        currentDay,
        events,
        carouselRef,
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
                        return (
                            <CalendarWrapper className="calendar-wrapper" key={i}>
                                <Times interval={interval} scale={scale} />
                                <Events
                                    currentDay={currentDay}
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
