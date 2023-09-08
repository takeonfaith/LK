import { settingsModel } from '@entities/settings'
import List from '@ui/list'
import React from 'react'
import PaymentsWidget from '../molecules/payments-widget'
import { ScheduleWidget } from './schedule-widget'

const ScheduleAndNotification = () => {
    const { widgetSchedule, widgetPayment } =
        settingsModel.selectors.useSettings().settings['settings-home-page'].property

    // const lessons = schedule?.today

    return (
        <List direction="horizontal" title="Виджеты" showPages gap={10} visible={!!widgetSchedule || !!widgetPayment}>
            {widgetSchedule && <ScheduleWidget />}
            {widgetPayment && <PaymentsWidget />}
        </List>
    )
}

export default ScheduleAndNotification
