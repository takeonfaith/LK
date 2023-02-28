import { $api } from './config'
import token from '@utils/token'
import { TStudent } from './model'
import emulateRequest from '@shared/lib/emulate-request'

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

export const getGroups = (value: string) => {
    const TEMP_GROUPS = [
        '191-721',
        '191-722',
        '191-723',
        '191-724',
        '191-725',
        '191-726',
        '201-721',
        '201-722',
        '201-723',
        '201-724',
        '201-725',
        '221-112',
        '224-631',
        '211-728',
        '301-725',
    ]
    return emulateRequest(
        TEMP_GROUPS.filter((group) => group.includes(value)),
        300,
    )
}
