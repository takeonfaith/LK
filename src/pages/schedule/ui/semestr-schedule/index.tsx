import { scheduleModel } from '@entities/schedule'
import { Template } from '../template'
import React from 'react'
import { SCHEDULE_NO_RESULT } from '@entities/schedule/consts'

const SemestrSchedule = () => {
    const {
        data: { schedule, externalSchedule, view, startDate, endDate, externalStartDate, externalEndDate },
        loading,
    } = scheduleModel.selectors.useSchedule()

    const resultSchedule = loading
        ? SCHEDULE_NO_RESULT.schedule
        : externalSchedule ?? schedule ?? SCHEDULE_NO_RESULT.schedule

    const resultStartDate = externalStartDate ?? startDate
    const resultEndDate = externalEndDate ?? endDate

    return (
        <Template
            showDates={false}
            events={resultSchedule.semestr}
            view={view}
            startDate={resultStartDate}
            endDate={resultEndDate}
        />
    )
}

export default SemestrSchedule
