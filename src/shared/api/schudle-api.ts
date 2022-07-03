import { $api } from '@api/config'
import getToken from '@utils/token'

export const get = () => {
    return $api.get(`?getSchedule&token=${getToken()}`)
}

export const getTeachers = (fullName: string) => {
    return $api.get(`?getScheduleTeacher&fio=${fullName}&token=${getToken()}`)
}

export const getSession = () => {
    return $api.get(`?getSchedule&session=1&token=${getToken()}`)
}

export const getTeachersSession = (fullName: string) => {
    return $api.get(`?getScheduleTeacher&fio=${fullName}&session=1&token=${getToken()}`)
}
