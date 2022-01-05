import React, { useMemo } from 'react'
import { scheduleModel } from '@entities/schedule'
import { IWeekSchedule } from '@api/model'
import { DaySchedule } from '../../../schedule/ui'
import { Section } from '../atoms/section'

const ScheduleAndNotification = () => {
    const {
        data: { schedule, currentDayString },
    } = scheduleModel.selectors.useSchedule()

    const lessons = useMemo(
        () =>
            !!schedule &&
            !!schedule['0'][currentDayString as keyof IWeekSchedule] &&
            schedule['0'][currentDayString as keyof IWeekSchedule].lessons,
        [schedule],
    )

    return (
        <Section>
            <DaySchedule
                lessons={currentDayString === 'sunday' ? [] : lessons || null}
                width={400}
                height={156}
                isCurrent
                index={0}
            />
        </Section>
    )
}

export default ScheduleAndNotification
