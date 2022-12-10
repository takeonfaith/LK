import { studentApi } from '@api'
import { TStudent } from '@api/model'
import { SelectPage } from '@features/select'
import { createEffect, sample } from 'effector'
import { createGate } from 'effector-react'
import { createPaginationList } from 'shared/effector/create-pagination-list'

const getFetchTeachersFx = createEffect(
    async (request: ServerListRequest<SelectPage | null>): Promise<ServerListResponse<TStudent>> => {
        const filter = request?.filter
        const group = filter?.title === 'Моя группа' ? filter.id.toString() : ''
        const data = (await studentApi.get(group, request.page, request.limit)).data.items
        return { results: data }
    },
)

const paginationList = createPaginationList({
    getFx: getFetchTeachersFx,
    limit: 50,
})

export const PageGate = createGate<SelectPage | null>()

sample({
    clock: PageGate.open,
    fn: (pageGate) => ({ filter: pageGate }),
    target: paginationList.load,
})

export default paginationList
