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
export const get = (search: string, group: string, page: number | undefined, limit: number | undefined) => {
    return $api.get<StudentResponse>(
        `?getStudents&search=${search}&group=${group}&page=${page}&perpage=${limit}&token=${token()}`,
    )
}

export const getGroups = async (value: string) => {
    return await $api.get<{ items: string[] }>(`?getGroups=${value}&perpage=${30}&page=${1}&token=${token()}`)
}
