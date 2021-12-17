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

    // console.log(!!schedule, schedule)

    // console.log(!!schedule && schedule[currentModule][currentStringDay as keyof IWeekSchedule].subjects)

    // console.log(!!schedule ? schedule[currentModule][currentStringDay as keyof IWeekSchedule].subjects : 'sasi')

    return (
        <Section>
            <DaySchedule
                subjects={
                    !!schedule ? schedule[currentModule][currentStringDay as keyof IWeekSchedule]?.subjects : undefined
                }
                width={400}
                height={156}
                isCurrent
                index={0}
                loading={!schedule}
            />
        </Section>
    )
}

export default ScheduleAndNotification
