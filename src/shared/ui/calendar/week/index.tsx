import { SubjectModal } from '@features/schedule/ui'
import { TimeIntervals } from '@shared/api/model'
import React from 'react'
import { useModal } from 'widgets'
import { getEndTime } from '../day/lib/get-end-time'
import { CalendarWrapper } from '../ui/calendar-wrapper'
import Events from '../ui/event/events'
import Times from '../ui/times'
import { DateWrapper, DayWrapper, WeekCalendarWrapper, WeekDay, WeekDaysWrapper } from './styles'
import { DayCalendarEvent, WeekEvents } from '../types'

// const EventsWrapper = styled(Flex)`
//     overflow-x: auto;
//     overflow-y: hidden;
//     height: 100%;

//     scroll-snap-type: x mandatory;
// `

type Props = {
    events: WeekEvents
    showDates?: boolean
    interval: [number, number]
    listView?: boolean
}

function getMonday(d: Date) {
    d = new Date(d)
    const day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1) // adjust when day is sunday
    return new Date(d.setDate(diff))
}

const getWeekNames = () => {
    const day = getMonday(new Date())
    const result = { Пн: '', Вт: '', Ср: '', Чт: '', Пт: '', Сб: '' }
    for (let i = 0; i < 6; i++) {
        const dayName = day.toLocaleDateString('ru-RU', { day: '2-digit' })
        day.setDate(day.getDate() + 1)
        result[Object.keys(result)[i] as keyof typeof result] = dayName
    }

    return result
}

const WeekCalendar = ({ interval, events, showDates, listView = false }: Props) => {
    const shift = interval[0] * 60
    const scale = 1
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

    const weekNames = getWeekNames()

    return (
        <WeekCalendarWrapper d="column">
            <WeekDaysWrapper jc="space-between">
                {Object.keys(weekNames).map((day) => {
                    const date = weekNames[day as keyof typeof weekNames]
                    return (
                        <WeekDay key={day}>
                            <DayWrapper>{day}</DayWrapper>
                            {showDates && <DateWrapper isCurrent={+date === new Date().getDate()}>{date}</DateWrapper>}
                        </WeekDay>
                    )
                })}
            </WeekDaysWrapper>
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
