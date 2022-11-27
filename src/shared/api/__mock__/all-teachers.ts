import { User } from '@api/model'

export function createTeachersResponse(limit: number | undefined): ServerListResponse<Partial<User>> {
    return {
        results: new Array(limit)
            .fill({})
            .map((_, index) => ({ id: index, name: 'Зубенко Михаил Петрович' } as Partial<User>)),
    }
}
