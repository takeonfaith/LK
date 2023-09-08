import { scheduleModel } from '@entities/schedule'
import { Template } from '../template'
import React from 'react'
import { SCHEDULE_NO_RESULT } from '@entities/schedule/consts'

const SemestrSchedule = () => {
    const {
        data: { schedule, externalSchedule, view },
        loading,
    } = scheduleModel.selectors.useSchedule()

    const resultSchedule = loading
        ? SCHEDULE_NO_RESULT.schedule
        : externalSchedule ?? schedule ?? SCHEDULE_NO_RESULT.schedule

    return <Template showDates={false} events={resultSchedule.semestr} view={view} />
}

export default SemestrSchedule
