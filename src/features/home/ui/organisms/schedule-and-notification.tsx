import React, { useMemo } from 'react'
import { scheduleModel } from '@entities/schedule'
import { IWeekSchedule } from '@api/model'
import { DaySchedule } from '../../../schedule/ui'
import { Section } from '../atoms/section'

const ScheduleAndNotification = () => {
    const {
        data: { currentModule, schedule, currentDay },
    } = scheduleModel.selectors.useSchedule()
    const currentStringDay = useMemo(
        () =>
            (!!schedule && Object.keys(schedule[currentModule]).find((_, index) => index + 1 === currentDay)) ??
            'monday',
        [currentDay],
    )

    return (
        <Section>
            {!!schedule && (
                <DaySchedule
                    subjects={schedule[currentModule][currentStringDay as keyof IWeekSchedule].subjects}
                    width={400}
                    height={156}
                    isCurrent
                    index={0}
                />
            )}
        </Section>
    )
}

export default ScheduleAndNotification
