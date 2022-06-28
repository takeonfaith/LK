import { allTeachersApi } from '@api'
import { User } from '@api/model'
import { createEffect, sample } from 'effector'
import { createGate } from 'effector-react'
import { createPaginationList } from 'shared/effector/create-pagination-list'

const getFetchTeachers = createEffect((request: ServerListRequest<EmptyObject>): Promise<ServerListResponse<User>> => {
    return allTeachersApi.get(request)
})

const paginationList = createPaginationList({
    getFx: getFetchTeachers,
    limit: 50,
})

export const PageGate = createGate()

sample({
    clock: PageGate.open,
    fn: () => ({}),
    target: paginationList.load,
})

export default paginationList
