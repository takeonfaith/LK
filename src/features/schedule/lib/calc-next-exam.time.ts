import { ISessionSchedule } from '@api/model'
import calcTimeLeft from '@shared/lib/dates/calc-time-left'

const calcNextExamTime = (schedule: ISessionSchedule | null) => {
    //Finds first exam with least positive amount of days left 'till them
    if (!!schedule && !!Object.keys(schedule).length) {
        const nextExamIndex = Object.keys(schedule).findIndex((day) => {
            const daysLeft = calcTimeLeft(day, 'days')
            return daysLeft >= 0 && daysLeft < 30
        })

        return nextExamIndex + 1
    } else return 0
}

export default calcNextExamTime
