import { $api } from './config'
import token from '@utils/token'
import { TStudent } from './model'

type StudentResponse = {
    current_page: string
    items: TStudent[]
    pages: string
    per_page: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const get = (group: string, page: number | undefined, limit: number | undefined) => {
    return $api.get<StudentResponse>(`?getStudents&group=&page=${1 + (page ?? 0)}&perpage=${limit}&token=${token()}`)
}
