import { $api } from '@api/config'
import token from '@utils/token'

export const get = (group: string) => {
    return $api.get(`?getSchedule&group=${group}&token=${token()}`)
}

export const getTeachers = (fullName: string) => {
    return $api.get(`?getScheduleTeacher&fio=${fullName}&token=${token()}`)
}

export const getSession = () => {
    return $api.get(`?getSchedule&session=1&token=${token()}`)
}

export const getTeachersSession = (fullName: string) => {
    return $api.get(`?getScheduleTeacher&fio=${fullName}&session=1&token=${token()}`)
}
