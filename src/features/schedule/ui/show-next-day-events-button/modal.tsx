import { scheduleModel } from '@entities/schedule'
import { getDateInSomeDays } from '@shared/lib/dates/get-date-in-some-days'
import { getMinutesFromStringTime } from '@shared/lib/dates/get-minutes-from-string-time'
import { getWeekDayFromDate } from '@shared/lib/dates/get-weekday-from-date'
import { useCalendarScale } from '@shared/ui/calendar/hooks/use-calendar-scale'
import React from 'react'
import { NextDayScheduleStyled } from './styles'
import { TimesEvents } from '@shared/ui/calendar/calendars/day/ui/times-events'
import { useScheduleSubjectModal } from '@features/use-schedule-subject-modal'
import { Error } from '@shared/ui/error'
import { Sleep } from '@shared/images'

export const Modal = () => {
    const {
        data: { schedule },
    } = scheduleModel.selectors.useSchedule()
    const nextDay = getDateInSomeDays(new Date(), 1)
    const weekday = getWeekDayFromDate(nextDay)
    const dayEvents = weekday === 'sunday' ? [] : schedule?.week[weekday]
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
