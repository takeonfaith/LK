import { PEStudent } from '@entities/pe-student/types'
import { pERequest } from '@shared/api/config/pe-config'
import { attach, combine, createEffect, createEvent, createStore, sample } from 'effector'
import { AddStudentVisits } from '../types/add-student-visits'
import { getAddVisitMutation } from '../utils/getAddVisitMutation'
import { getPEStudentsQuery } from '../utils/getPEStudentsQuery'
import { getPEStudentsTotalCountQuery } from '../utils/getPEStudentsTotalCountQuery'

const load = createEvent()
const setPage = createEvent<number>()
const addVisit = createEvent<AddStudentVisits>()

const $pEStudentsPage = createStore<number>(0).on(setPage, (_, page) => page)

const loadPageFx = attach({
    source: $pEStudentsPage,
    effect: async (page: number) => {
        const { students } = await pERequest<{ students: { items: PEStudent[] } }>(getPEStudentsQuery(page))

        return students
    },
})

const addVisitFx = createEffect(async (payload: AddStudentVisits) => {
    await pERequest(getAddVisitMutation(payload))

    return payload
})

sample({ clock: addVisit, target: addVisitFx })

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

sample({
    clock: addVisitFx.doneData,
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
    addVisit,
}

export const stores = {
    $loading,
    $pEStudents,
    $pEStudentsPage,
    $pEStudentsTotalCount,
}
