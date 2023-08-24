import { getSubjectIcon } from '@features/acad-performance/lib/get-subject-icon'
import { ISubject, ITimeIntervalColor, TimeIntervalColor } from '@shared/api/model'
import { type DayCalendarEvent } from '@shared/ui/calendar'
import React from 'react'
import { HiBookOpen } from 'react-icons/hi'

export const getCalendarSchedule = (lessons: ISubject[] | undefined | null): DayCalendarEvent[] => {
    if (!lessons) return []
    const result: DayCalendarEvent[] = lessons?.map(
        ({ place, name, teachers, timeInterval, link, dateInterval, rooms, groups }) => {
            return {
                title: name,
                people: teachers,
                startTime: timeInterval.split(' - ')[0],
                duration: 90,
                placeIcon: <HiBookOpen />,
                dateInterval,
                color: TimeIntervalColor[timeInterval as keyof ITimeIntervalColor],
                place,
                link,
                groups,
                rooms,
                icon: getSubjectIcon(name),
            }
        },
    )
    return result
}
