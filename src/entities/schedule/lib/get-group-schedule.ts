import { scheduleApi } from '@shared/api'
import { normalizeSchedule } from './normalize-schedule'

export const getGroupSchedule = async (group: string) => {
    const scheduleResponse = await scheduleApi.get(group)
    const sessionScheduleResponse = await scheduleApi.getSession()

    const normalizedSchedule = normalizeSchedule(scheduleResponse.data, sessionScheduleResponse.data)

    return normalizedSchedule
}
