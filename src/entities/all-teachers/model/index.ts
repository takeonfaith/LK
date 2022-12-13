import { teacherApi } from '@api'
import { TTeacher } from '@api/model'
import { SelectPage } from '@features/select'
import { createEffect } from 'effector'
import { createPaginationList } from 'shared/effector/create-pagination-list'

const getFetchTeachersFx = createEffect(
    async (request: ServerListRequest<SelectPage | null>): Promise<ServerListResponse<TTeacher>> => {
        const { search, page, limit, filter } = request
        const group = filter?.title === 'Все' ? '' : filter?.title ?? ''

        const { data } = await teacherApi.get(search ?? '', group, page, limit)
        return { results: data.items }
    },
)

const paginationList = createPaginationList({
    getFx: getFetchTeachersFx,
    limit: 50,
})

export default paginationList
