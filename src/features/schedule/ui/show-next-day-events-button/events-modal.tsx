import { useScheduleSubjectModal } from '@features/use-schedule-subject-modal'
import { Sleep } from '@shared/images'
import { DayCalendarEvent } from '@shared/ui/calendar'
import { TimesEvents } from '@shared/ui/calendar/calendars/day/ui/times-events'
import { useCalendarScale } from '@shared/ui/calendar/hooks/use-calendar-scale'
import { Error } from '@shared/ui/error'
import React from 'react'
import { NextDayScheduleStyled } from './styles'

type Props = {
    dayEvents: DayCalendarEvent[] | undefined
    day: string
}

export const EventsModal = ({ dayEvents, day }: Props) => {
    const scale = useCalendarScale()
    const openModal = useScheduleSubjectModal()
    const interval = [9, 22] as [number, number]

    if (!dayEvents?.length) return <Error text={'В этот день пар нет'} image={Sleep} />

    return (
        <NextDayScheduleStyled key={day}>
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
