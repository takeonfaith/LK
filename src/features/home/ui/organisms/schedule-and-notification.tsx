import { scheduleModel } from '@entities/schedule'
import getLessons from '@features/home/lib/get-lessons'
import React, { useMemo } from 'react'
import { DaySchedule } from '../../../schedule/ui'
import { Section } from '../atoms/section'

const ScheduleAndNotification = () => {
    const {
        data: { schedule, currentDayString },
    } = scheduleModel.selectors.useSchedule()

    const lessons = useMemo(() => getLessons(schedule, currentDayString), [schedule])

    return (
        <Section>
            <DaySchedule
                lessons={currentDayString === 'sunday' ? [] : lessons || null}
                width={400}
                height={156}
                isCurrent
                topInfo=""
            />
        </Section>
    )
}

export default ScheduleAndNotification
