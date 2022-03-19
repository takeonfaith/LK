import { scheduleModel } from '@entities/schedule'
import React from 'react'
import TemplateSchedule from 'widgets/template-schedule'

const SchedulePage = () => {
    const props = scheduleModel.selectors.useSchedule()

    return <TemplateSchedule {...props} />
}

export default SchedulePage
