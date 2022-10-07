import Token from '@utils/token'
import { $api } from './config'

import { VacationSchedule } from './model/vacation-schedule'

export const get = async (): Promise<VacationSchedule[]> => {
    return (await $api.get<VacationSchedule[]>(`?getVacations&token=${Token()}`)).data
}
