import { IWeekDayNames, WEEK_DAYS } from '@shared/consts'
import React from 'react'
import { CalendarWrapper } from '../calendar-wrapper'
import Events from '../event/events'
import Times from '../times'
import { WeekDays } from '../week-days'
import { useCalendarGeneral } from '../../hooks/use-calendar-general'
import { WeekCalendarWrapper } from './styles'
import { CalendarWeekProps } from './types'

const WeekCalendar = (props: CalendarWeekProps) => {
    const { handleOpenModal, shift, scale, showDates, interval, events } = useCalendarGeneral(props)

    return (
        <WeekCalendarWrapper d="column">
            <WeekDays showDates={showDates} showColumns={true} events={events} />
            <CalendarWrapper>
                <Times interval={interval} scale={scale} />
                {Object.keys(WEEK_DAYS).map((day, i) => {
                    return (
                        <Events
                            showTime={false}
                            key={day}
                            weekDay={i + 1}
                            shortInfo
                            events={events?.[day as IWeekDayNames]}
                            scale={scale}
                            shift={shift}
                            currentEvent={null}
                            interval={interval}
                            onClick={handleOpenModal}
                        />
                    )
                })}
            </CalendarWrapper>
        </WeekCalendarWrapper>
    )
}

export default WeekCalendar
