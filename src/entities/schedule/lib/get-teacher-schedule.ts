import { scheduleApi } from '@shared/api'

const normalizeSchedule = () => {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getTeacherSchedule = async (fullName: string) => {
    const scheduleResponse = await scheduleApi.getTeachers(fullName)
    const sessionResponse = await scheduleApi.getTeachersSession(fullName)

    //  const normalizedSchedule = normalizeSchedule(scheduleResponse.data)
}
