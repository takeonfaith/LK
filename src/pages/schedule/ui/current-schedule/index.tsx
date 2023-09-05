import { scheduleModel } from '@entities/schedule'
import { SCHEDULE_NO_RESULT } from '@entities/schedule/consts'
import { Template } from '../template'
import React from 'react'

const CurrentSchedule = () => {
    const {
        data: { schedule, externalSchedule, view },
    } = scheduleModel.selectors.useSchedule()

    const resultSchedule = externalSchedule ?? schedule ?? SCHEDULE_NO_RESULT.schedule

    return <Template showDates events={resultSchedule.week} view={view} />
}

export default CurrentSchedule
