/* eslint-disable @typescript-eslint/no-unused-vars */
import { scheduleModel } from '@entities/schedule'
import { settingsModel } from '@entities/settings'
import List from '@ui/list'
import React from 'react'
import { DaySchedule } from '../../../schedule/ui'
import PaymentsWidget from '../molecules/payments-widget'

const ScheduleAndNotification = () => {
    const {
        data: { schedule, currentDayString, error },
    } = scheduleModel.selectors.useSchedule()

    const { widgetSchedule, widgetPayment } =
        settingsModel.selectors.useSettings().settings['settings-home-page'].property

    const lessons = schedule?.today

    return (
        <List direction="horizontal" title="Виджеты" showPages gap={10} visible={!!widgetSchedule || !!widgetPayment}>
            {/* {widgetSchedule && (
                <DaySchedule
                    lessons={!schedule && currentDayString === 'sunday' ? [] : lessons}
                    width={350}
                    height={156}
                    isCurrent
                    topInfo=""
                    error={error}
                />
            )} */}
            {widgetPayment && <PaymentsWidget />}
        </List>
    )
}

export default ScheduleAndNotification
