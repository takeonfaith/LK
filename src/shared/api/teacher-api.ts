import token from '@utils/token'
import { $api } from './config'
import { TTeacher } from './model'

type TeacherResponse = {
    current_page: string
    items: TTeacher[]
    pages: string
    per_page: string
}

export const get = (division: string, page: number | undefined, limit: number | undefined) => {
    return $api.get<TeacherResponse>(`?getStaff&division=${division}&page=${page}&perpage=${limit}&token=${token()}`)
}
