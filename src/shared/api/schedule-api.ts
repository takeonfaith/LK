import { $api } from '@api/config'
import token from '@utils/token'
import { RawScheduleResponse, RawSessionScheduleResponse, RawTeacherScheduleResponse } from './model'

export const get = (group: string) => {
    return $api.get<RawScheduleResponse>(`?getSchedule&group=${group}&token=${token()}`)
}

export const getTeachers = (fullName: string) => {
    return $api.get<RawTeacherScheduleResponse>(`?getScheduleTeacher&fio=${fullName}&token=${token()}`)
}

export const getSession = () => {
    return $api.get<RawSessionScheduleResponse>(`?getSchedule&session=1&token=${token()}`)
}

export const getTeachersSession = (fullName: string) => {
    return $api.get<RawSessionScheduleResponse>(`?getScheduleTeacher&fio=${fullName}&session=1&token=${token()}`)
}
