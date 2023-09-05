import { scheduleModel } from '@entities/schedule'
import { Template } from '../template'
import React from 'react'
import { SCHEDULE_NO_RESULT } from '@entities/schedule/lib/get-schedule'

const SemestrSchedule = () => {
    const {
        data: { schedule, externalSchedule, view },
    } = scheduleModel.selectors.useSchedule()

    const resultSchedule = externalSchedule ?? schedule ?? SCHEDULE_NO_RESULT.schedule

    return <Template showDates={false} events={resultSchedule.semestr} view={view} />
}

export default SemestrSchedule
