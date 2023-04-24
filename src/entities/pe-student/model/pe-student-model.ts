import { PEStudent } from '@entities/pe-student/types'
import { pERequest } from '@shared/api/config/pe-config'
import { attach, combine, createEffect, createEvent, createStore, sample } from 'effector'
import { getPEStudentsQuery, getPEStudentsTotalCountQuery } from '../utils'

const load = createEvent()
const setPage = createEvent<number>()

const $pEStudentsPage = createStore<number>(0).on(setPage, (_, page) => page)

const loadPageFx = attach({
    source: $pEStudentsPage,
    effect: async (page: number) => {
        const { students } = await pERequest<{ students: { items: PEStudent[] } }>(getPEStudentsQuery(page))

        return students
    },
})

sample({ clock: $pEStudentsPage, target: load })

const loadTotalCount = createEffect(async () => {
    const { students } = await pERequest<{ students: { totalCount: number } }>(getPEStudentsTotalCountQuery())

    return students.totalCount
})

sample({ clock: load, target: loadPageFx })
sample({ clock: load, target: loadTotalCount })

const $pEStudents = createStore<PEStudent[]>([]).on(loadPageFx.doneData, (_, students) => students.items)
const $pEStudentsTotalCount = createStore<number>(0).on(loadTotalCount.doneData, (_, totalCount) => totalCount)
const $loading = combine($pEStudentsTotalCount, $pEStudentsTotalCount, Boolean)

// sample({
//     clock: setPage,
//     // source: { page: $pEStudentsPage, total: $pEStudentsTotalCount },
//     // filter: ({ page, total }) => total / STUDENT_PAGE_SIZE >= page && !!page,
//     fn: ({ page }) => {
//         return ++page
//     },
//     // target: $pEStudentsPage,
// })

export const events = {
    load,
    setPage,
}

export const stores = {
    $loading,
    $pEStudents,
    $pEStudentsPage,
    $pEStudentsTotalCount,
}
