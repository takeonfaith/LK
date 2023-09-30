import { scheduleApi } from '@shared/api'
import { normalizeSchedule } from './normalize-schedule'

export const getTeacherSchedule = async (fullName: string) => {
    const scheduleResponse = await scheduleApi.getTeachers(fullName)
    const sessionResponse = await scheduleApi.getTeachersSession(fullName)

    const normalizedSchedule = normalizeSchedule(scheduleResponse.data, sessionResponse.data)

    return normalizedSchedule
}
