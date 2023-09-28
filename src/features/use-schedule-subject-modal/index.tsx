import { SubjectModal } from '@features/schedule/ui'
import { DayCalendarEvent } from '@shared/ui/calendar'
import { getTimeInterval } from '@shared/ui/calendar/lib/get-time-interval'
import React from 'react'
import { useModal } from 'widgets'

export const useScheduleSubjectModal = () => {
    const { open } = useModal()

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

    return handleOpenModal
}
