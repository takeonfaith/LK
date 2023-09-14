import { Error } from '@shared/ui/error'
import React from 'react'

export const SessionSchedule = () => {
    // const {
    //     data: { schedule, externalSchedule, view },
    //     loading,
    // } = scheduleModel.selectors.useSchedule()

    // const resultSchedule = loading
    //     ? SCHEDULE_NO_RESULT.schedule
    //     : externalSchedule ?? schedule ?? SCHEDULE_NO_RESULT.schedule

    return <Error text="Расписание сессии находится в разработке" />
}

export default SessionSchedule
