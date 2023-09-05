import { scheduleApi } from '@shared/api'
import { normalizeSchedule } from './normalize-schedule'

export const getTeacherSchedule = async (fullName: string) => {
    const scheduleResponse = await scheduleApi.getTeachers(fullName)

    const normalizedSchedule = normalizeSchedule(scheduleResponse.data)

    return normalizedSchedule
}
