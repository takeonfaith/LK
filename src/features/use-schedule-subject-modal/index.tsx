import { SubjectModal } from '@features/schedule/ui'
import { DayCalendarEvent } from '@shared/ui/calendar'
import { getTimeInterval } from '@shared/ui/calendar/lib/get-time-interval'
import { checkIfEventIsCurrent } from '@shared/ui/calendar/ui/event/lib/check-if-event-is-current'
import React from 'react'
import { useModal } from 'widgets'

export const useScheduleSubjectModal = () => {
    const { open } = useModal()

    const handleOpenModal = (event: DayCalendarEvent) => {
        const timeInterval = getTimeInterval(event.startTime, event.duration)

        open(
            <SubjectModal
                link={event.link}
                isNextEvent={false}
                timeInterval={timeInterval}
                name={event.title}
                teachers={event.people}
                rooms={event.rooms ?? []}
                groups={event.groups}
                isCurrentEvent={checkIfEventIsCurrent(event, true)}
                noPadding
                {...event}
            />,
        )
    }

    return handleOpenModal
}
