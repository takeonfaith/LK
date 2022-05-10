import { scheduleModel } from '@entities/schedule'
import getLessons from '@features/home/lib/get-lessons'
import React, { useMemo } from 'react'
import { DaySchedule } from '../../../schedule/ui'
import { Section } from '../atoms/section'
import PaymentsWidget from '../molecules/payments-widget'

const ScheduleAndNotification = () => {
    const {
        data: { schedule, currentDayString },
    } = scheduleModel.selectors.useSchedule()

    const lessons = useMemo(() => getLessons(schedule, currentDayString), [schedule, currentDayString])

    return (
        <Section>
            <DaySchedule
                lessons={!schedule && currentDayString === 'sunday' ? [] : lessons}
                width={400}
                height={156}
                isCurrent
                topInfo=""
            />
            <PaymentsWidget />
        </Section>
    )
}

export default ScheduleAndNotification
