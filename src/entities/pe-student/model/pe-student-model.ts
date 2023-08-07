import { PEStudent } from '@entities/pe-student/types'
import { pEStudentFilterModel } from '@pages/teacher-physical-education/model'
import { pERequest } from '@shared/api/config/pe-config'
import { attach, combine, createEvent, createStore, sample } from 'effector'
import { debounce } from 'patronum'
import { pEStudentVisitModel } from '.'
import { getFilters } from '../utils/get-filters'
import { getPEStudentsQuery, getPEStudentsTotalCountQuery } from '../utils/get-pe-student-query'

const load = createEvent()
const setPage = createEvent<number>()

const $pEStudentsPage = createStore<number>(0)
    .on(setPage, (_, page) => page)
    .on(pEStudentFilterModel.stores.$filters, () => 0)

const loadPageFx = attach({
    source: { page: $pEStudentsPage, filters: pEStudentFilterModel.stores.$filters },
    effect: async ({ filters, page }) => {
        const { students } = await pERequest<{ students: { items: PEStudent[] } }>(
            getPEStudentsQuery(page, getFilters(filters)),
        )

        return students
    },
})

debounce({ source: combine($pEStudentsPage, pEStudentFilterModel.stores.$filters), timeout: 200, target: load })

const loadTotalCount = attach({
    source: { filters: pEStudentFilterModel.stores.$filters },
    effect: async ({ filters }) => {
        const { students } = await pERequest<{ students: { totalCount: number } }>(
            getPEStudentsTotalCountQuery(getFilters(filters)),
        )

        return students.totalCount
    },
})

debounce({ source: pEStudentFilterModel.stores.$filters, timeout: 200, target: loadTotalCount })

sample({ clock: load, target: loadPageFx })
sample({ clock: load, target: loadTotalCount })

const $pEStudents = createStore<PEStudent[]>([]).on(loadPageFx.doneData, (_, students) => students.items)
const $pEStudentsTotalCount = createStore<number>(0).on(loadTotalCount.doneData, (_, totalCount) => totalCount)
const $loading = combine(loadTotalCount.pending, loadPageFx.pending, Boolean)

sample({
    clock: pEStudentVisitModel.effects.addVisitFx.doneData,
    source: $pEStudents,
    filter: (students, { studentGuid }) => students.some((s) => s.studentGuid === studentGuid),
    fn: (students, visit) => {
        const updatedStudents = JSON.parse(JSON.stringify(students)) as typeof students

        const updatedStudent = updatedStudents.find((s) => s.studentGuid === visit.studentGuid)!

        ++updatedStudent.visits

        return updatedStudents
    },
    target: $pEStudents,
})

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
