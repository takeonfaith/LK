import { SubjectModal } from '@features/schedule/ui'
import { TimeIntervals } from '@shared/api/model'
import React from 'react'
import { useModal } from 'widgets'
import { getEndTime } from '../day/lib/get-end-time'
import { DayCalendarEvent, WeekEvents } from '../types'
import { CalendarWrapper } from '../ui/calendar-wrapper'
import Events from '../ui/event/events'
import Times from '../ui/times'
import { WeekDays } from '../ui/week-days'
import { WeekCalendarWrapper } from './styles'

type Props = {
    events: WeekEvents
    showDates?: boolean
    interval: [number, number]
    listView?: boolean
}

const WeekCalendar = ({ interval, events, showDates, listView = false }: Props) => {
    const shift = interval[0] * 60
    const scale = 1.1
    const { open } = useModal()

    const handleOpenModal = (event: DayCalendarEvent) => {
        const timeInterval = event
            ? (`${event.startTime} - ${getEndTime(event.startTime, event.duration)}` as TimeIntervals)
            : ('9:00' as TimeIntervals)

        open(
            <SubjectModal
                link={event.link}
                timeInterval={timeInterval}
                name={event.title}
                teachers={event.people}
                rooms={event.rooms ?? []}
                groups={event.groups}
                isCurrent={false}
                noPadding
                {...event}
            />,
        )
    }

    return (
        <WeekCalendarWrapper d="column">
            <WeekDays showDates={showDates} showColumns={true} events={events} />
            <CalendarWrapper listView={listView}>
                <Times interval={interval} scale={scale} />
                <Events
                    listView={listView}
                    weekDay={1}
                    shortInfo
                    events={events?.monday}
                    scale={scale}
                    shift={shift}
                    currentEvent={null}
                    onClick={handleOpenModal}
                />
                <Events
                    listView={listView}
                    weekDay={2}
                    shortInfo
                    events={events?.tuesday}
                    scale={scale}
                    shift={shift}
                    currentEvent={null}
                    onClick={handleOpenModal}
                />
                <Events
                    listView={listView}
                    weekDay={3}
                    shortInfo
                    events={events?.wednesday}
                    scale={scale}
                    shift={shift}
                    currentEvent={null}
                    onClick={handleOpenModal}
                />
                <Events
                    listView={listView}
                    weekDay={4}
                    shortInfo
                    events={events?.thursday}
                    scale={scale}
                    shift={shift}
                    currentEvent={null}
                    onClick={handleOpenModal}
                />
                <Events
                    listView={listView}
                    weekDay={5}
                    shortInfo
                    events={events?.friday}
                    scale={scale}
                    shift={shift}
                    currentEvent={null}
                    onClick={handleOpenModal}
                />
                <Events
                    listView={listView}
                    weekDay={6}
                    shortInfo
                    events={events?.saturday}
                    scale={scale}
                    shift={shift}
                    currentEvent={null}
                    onClick={handleOpenModal}
                />
            </CalendarWrapper>
        </WeekCalendarWrapper>
    )
}

export default WeekCalendar
