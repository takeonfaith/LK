import { SubjectModal } from '@features/schedule/ui'
import { useCalendarScale } from '@shared/ui/calendar/hooks/use-calendar-scale'
import { DayCalendarEvent } from '@shared/ui/calendar/types'
import React from 'react'
import { useModal } from 'widgets'
import { getTimeInterval } from '../lib/get-time-interval'
import { CalendarWeekProps } from '../ui/week/types'

type Props = CalendarWeekProps

export const useCalendarGeneral = ({ interval, showDates, events }: Props) => {
    const shift = interval[0] * 60
    const { open } = useModal()
    const scale = useCalendarScale()

    const handleOpenModal = (event: DayCalendarEvent) => {
        const timeInterval = getTimeInterval(event.startTime, event.duration)

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

    return { handleOpenModal, shift, showDates, interval, events, scale }
}
