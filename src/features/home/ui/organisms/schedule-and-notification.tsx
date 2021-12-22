import React, { useMemo } from 'react'
import { scheduleModel } from '@entities/schedule'
import { IWeekSchedule } from '@api/model'
import { DaySchedule } from '../../../schedule/ui'
import { Section } from '../atoms/section'

const ScheduleAndNotification = () => {
    const {
        data: { currentModule, schedule, currentDay },
        loading,
    } = scheduleModel.selectors.useSchedule()
    const currentStringDay = useMemo(
        () =>
            (!!schedule && Object.keys(schedule[currentModule]).find((_, index) => index + 1 === currentDay)) ||
            'sunday',
        [currentDay, schedule],
    )

    const lessons = useMemo(
        () =>
            !!schedule &&
            !!schedule[currentModule][currentStringDay as keyof IWeekSchedule] &&
            schedule[currentModule][currentStringDay as keyof IWeekSchedule].lessons,
        [schedule],
    )

    return (
        <Section>
            <DaySchedule lessons={lessons || null} width={400} height={156} isCurrent index={0} fixedHeight />
        </Section>
    )
}

export default ScheduleAndNotification
