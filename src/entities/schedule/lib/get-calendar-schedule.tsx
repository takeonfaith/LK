import { getSubjectIcon } from '@features/acad-performance/lib/get-subject-icon'
import { ISubject, ITimeIntervalColor, TimeIntervalColor } from '@shared/api/model'
import { IWeekDays } from '@shared/consts'
import { TimeType, getMinutesFromStringTime } from '@shared/lib/get-minutes-from-string-time'
import { type DayCalendarEvent } from '@shared/ui/calendar'
import React from 'react'
import { HiBookOpen } from 'react-icons/hi'

export const getCalendarSchedule = (
    lessons: ISubject[] | undefined | null,
    weekday: IWeekDays[keyof IWeekDays]['short'],
): DayCalendarEvent[] => {
    if (!lessons) return []
    const result: DayCalendarEvent[] = lessons?.map(
        ({ place, name, teachers, timeInterval, link, dateInterval, rooms, groups }) => {
            const [startTime, endTime] = timeInterval.split(' - ')
            const duration =
                getMinutesFromStringTime(endTime as TimeType) - getMinutesFromStringTime(startTime as TimeType)
            return {
                title: name,
                people: teachers,
                startTime,
                duration,
                placeIcon: <HiBookOpen />,
                dateInterval,
                color: TimeIntervalColor[timeInterval as keyof ITimeIntervalColor],
                place,
                link,
                groups,
                weekday,
                rooms,
                icon: getSubjectIcon(name),
            }
        },
    )
    return result
}
