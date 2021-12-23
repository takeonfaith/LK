import React, { useMemo } from 'react'
import { scheduleModel } from '@entities/schedule'
import { IWeekSchedule } from '@api/model'
import { DaySchedule } from '../../../schedule/ui'
import { Section } from '../atoms/section'

const ScheduleAndNotification = () => {
    const {
        data: { schedule, currentDay },
    } = scheduleModel.selectors.useSchedule()
    const currentStringDay = useMemo(
        () => (!!schedule && Object.keys(schedule['0']).find((_, index) => index + 1 === currentDay)) || 'sunday',
        [currentDay, schedule],
    )

    const lessons = useMemo(
        () =>
            !!schedule &&
            !!schedule['0'][currentStringDay as keyof IWeekSchedule] &&
            schedule['0'][currentStringDay as keyof IWeekSchedule].lessons,
        [schedule],
    )

    return (
        <Section>
            <DaySchedule lessons={lessons || null} width={400} height={156} isCurrent index={0} fixedHeight />
        </Section>
    )
}

export default ScheduleAndNotification
