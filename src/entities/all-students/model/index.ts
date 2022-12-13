import { studentApi } from '@api'
import { TStudent } from '@api/model'
import { SelectPage } from '@features/select'
import { createEffect } from 'effector'
import { createPaginationList } from 'shared/effector/create-pagination-list'

const getFetchStudentsFx = createEffect(
    async (request: ServerListRequest<SelectPage | null>): Promise<ServerListResponse<TStudent>> => {
        const { search = '', page, limit, filter } = request
        const group = filter?.title === 'Моя группа' ? filter.id.toString() : ''
        const { data } = await studentApi.get(search, group, page, limit)
        return { results: data.items }
    },
)

const paginationList = createPaginationList({
    getFx: getFetchStudentsFx,
    limit: 50,
})

export default paginationList
