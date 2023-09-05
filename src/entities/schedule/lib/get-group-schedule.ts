import { scheduleApi } from '@shared/api'
import { normalizeSchedule } from './normalize-schedule'

export const getGroupSchedule = async (group: string | undefined) => {
    if (!group) return null

    const scheduleResponse = await scheduleApi.get(group)

    const normalizedSchedule = normalizeSchedule(scheduleResponse.data)

    return normalizedSchedule
}
