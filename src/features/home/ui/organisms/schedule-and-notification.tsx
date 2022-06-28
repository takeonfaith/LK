import { scheduleModel } from '@entities/schedule'
import getLessons from '@features/home/lib/get-lessons'
import List from '@ui/list'
import React, { useMemo } from 'react'
import { DaySchedule } from '../../../schedule/ui'
import PaymentsWidget from '../molecules/payments-widget'

const ScheduleAndNotification = () => {
    const {
        data: { schedule, currentDayString, error },
    } = scheduleModel.selectors.useSchedule()

    const lessons = useMemo(() => getLessons(schedule, currentDayString), [schedule, currentDayString])

    return (
        <List direction="horizontal" title="Виджеты" showPages gap={10}>
            <DaySchedule
                lessons={!schedule && currentDayString === 'sunday' ? [] : lessons}
                width={400}
                height={156}
                isCurrent
                topInfo=""
                error={error}
            />
            <PaymentsWidget />
        </List>
    )
}

export default ScheduleAndNotification
