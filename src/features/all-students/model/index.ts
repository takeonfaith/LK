import { studentApi } from '@api'
import { TStudent } from '@api/model'
import { createEffect, sample } from 'effector'
import { createGate } from 'effector-react'
import { createPaginationList } from 'shared/effector/create-pagination-list'

const getFetchTeachers = createEffect(
    async (request: ServerListRequest<EmptyObject>): Promise<ServerListResponse<TStudent>> => {
        const data = (await studentApi.get('191-722', request.page, request.limit)).data.items
        return { results: data }
    },
)

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
