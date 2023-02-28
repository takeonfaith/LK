import { DIVISIONS } from '@pages/all-teachers/const'
import emulateRequest from '@shared/lib/emulate-request'
import normalizeString from '@shared/lib/normalize-string'
import token from '@utils/token'
import { $api } from './config'
import { TTeacher } from './model'

type TeacherResponse = {
    current_page: string
    items: TTeacher[]
    pages: string
    per_page: string
}

export const get = (search: string, division: string, page: number | undefined, limit: number | undefined) => {
    return $api.get<TeacherResponse>(
        `?getStaff&search=${search}&division=${division}&page=${page}&perpage=${limit}&token=${token()}`,
    )
}

export const getDivisions = (search: string) => {
    return emulateRequest(
        DIVISIONS.filter((division) => normalizeString(division).includes(normalizeString(search))),
        300,
    )
}
