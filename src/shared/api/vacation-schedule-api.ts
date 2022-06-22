import { VacationSchedule } from './model/vacation-schedule'
import { VACATION_SCHEDULE_RESPONSE } from './__mock__/vacation-schedule'

export const get = (): Promise<VacationSchedule[]> => {
    // eslint-disable-next-line no-console

    return new Promise((resolve) => {
        setTimeout(() => resolve(VACATION_SCHEDULE_RESPONSE), 1000)
    })
}
