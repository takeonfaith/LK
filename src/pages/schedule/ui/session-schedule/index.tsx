import { scheduleModel } from '@entities/schedule'
import { SCHEDULE_NO_RESULT } from '@entities/schedule/consts'
import React from 'react'
import { Template } from '../template'

export const SessionSchedule = () => {
    const {
        data: { schedule, externalSchedule, view },
        loading,
    } = scheduleModel.selectors.useSchedule()

    const resultSchedule = loading
        ? SCHEDULE_NO_RESULT.schedule
        : externalSchedule ?? schedule ?? SCHEDULE_NO_RESULT.schedule

    return (
        <Template
            events={resultSchedule.session.data}
            startDate={resultSchedule.session.startDate}
            endDate={resultSchedule.session.endDate}
            view={view}
            showDates
        />
    )
}

export default SessionSchedule
