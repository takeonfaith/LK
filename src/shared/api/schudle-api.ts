import { $api } from '@api/config'
import createFullName from '@features/home/lib/create-full-name'
import token from '@utils/token'

export const get = () => {
    return $api.get(`?getSchedule&token=${token()}`)
}

export const getTeachers = (name: string, surname: string, patronymic: string) => {
    return $api.get(`?getScheduleTeacher&fio=${createFullName({ name, surname, patronymic })}&token=${token()}`)
}

export const getSession = () => {
    return $api.get(`?getSchedule&session=1&token=${token()}`)
}

export const getTeachersSession = (name: string, surname: string, patronymic: string) => {
    return $api.get(
        `?getScheduleTeacher&fio=${createFullName({ name, surname, patronymic })}&session=1&token=${token()}`,
    )
}
