import { User } from './model'
import { createTeachersResponse } from './__mock__/all-teachers'

export const get = (request: ServerListRequest<EmptyObject>): Promise<ServerListResponse<User>> => {
    // eslint-disable-next-line no-console

    return new Promise((resolve) => {
        setTimeout(() => resolve(createTeachersResponse(request.limit) as ServerListResponse<User>), 1000)
    })
}
