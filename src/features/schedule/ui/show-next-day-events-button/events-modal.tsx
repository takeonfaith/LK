import { useScheduleSubjectModal } from '@features/use-schedule-subject-modal'
import { Sleep } from '@shared/images'
import { getMinutesFromStringTime } from '@shared/lib/dates/get-minutes-from-string-time'
import { DayCalendarEvent } from '@shared/ui/calendar'
import { TimesEvents } from '@shared/ui/calendar/calendars/day/ui/times-events'
import { useCalendarScale } from '@shared/ui/calendar/hooks/use-calendar-scale'
import { Error } from '@shared/ui/error'
import React from 'react'
import { NextDayScheduleStyled } from './styles'

type Props = {
    dayEvents: DayCalendarEvent[] | undefined
}

export const EventsModal = ({ dayEvents }: Props) => {
    const firstEvent = dayEvents?.[0]
    const lastEvent = dayEvents?.[dayEvents.length - 1]
    const scale = useCalendarScale()
    const intervalStart = firstEvent ? Math.floor(getMinutesFromStringTime(firstEvent.startTime) / 60) : 9
    const intervalEnd = lastEvent
        ? Math.floor((getMinutesFromStringTime(lastEvent.startTime) + lastEvent.duration) / 60 + 1)
        : 22
    const interval: [number, number] = [intervalStart, intervalEnd]
    const openModal = useScheduleSubjectModal()

    if (!dayEvents?.length) return <Error text={'В этот день пар нет'} image={Sleep} />

    return (
        <NextDayScheduleStyled>
            <TimesEvents
                events={dayEvents}
                interval={interval}
                scale={scale}
                weekday={0}
                currentDay={0}
                shift={interval[0] * 60}
                onEventClick={openModal}
            />
        </NextDayScheduleStyled>
    )
}
