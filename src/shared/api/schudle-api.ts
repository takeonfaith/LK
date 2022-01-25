import { $api } from '@api/config'
import createFullName from '@features/home/lib/create-full-name'

export const get = () => {
    // Can't use $api, because other origin
    const token = JSON.parse(localStorage.getItem('token') ?? 'null')?.token
    return $api.get(`?getSchedule&token=${token}`)
}

export const getTeachers = (name: string, surname: string, patronymic: string) => {
    // Can't use $api, because other origin
    const token = JSON.parse(localStorage.getItem('token') ?? 'null')?.token
    return $api.get(`?getScheduleTeacher&fio=${createFullName({ name, surname, patronymic })}&token=${token}`)
}

export const getSession = () => {
    const token = JSON.parse(localStorage.getItem('token') ?? 'null')?.token
    return $api.get(`?getSchedule&session=1&token=${token}`)
}

export const getTeachersSession = (name: string, surname: string, patronymic: string) => {
    const token = JSON.parse(localStorage.getItem('token') ?? 'null')?.token
    return $api.get(`?getScheduleTeacher&fio=${createFullName({ name, surname, patronymic })}&session=1&token=${token}`)
}
