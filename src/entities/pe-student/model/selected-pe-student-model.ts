import { pERequest } from '@shared/api/config/pe-config'
import { combine, createEffect, createEvent, createStore, sample } from 'effector'
import { pEStudentVisitModel } from '.'
import { PEStudentProfile } from '../types'
import { getPEStudentQuery } from '../utils/getPEStudentsQuery'

const setCurrentStudentId = createEvent<string>()
const resetStudentId = createEvent()
const reload = createEvent()

export const loadCurrentStudent = createEffect(async (studentId: string) => {
    const { student } = await pERequest<{ student: PEStudentProfile }>(getPEStudentQuery(studentId))

    return student
})

sample({ clock: setCurrentStudentId, target: loadCurrentStudent })

const $selectedStudent = createStore<PEStudentProfile | null>(null).reset(resetStudentId)
const $loading = combine(pEStudentVisitModel.effects.addVisitFx.pending, loadCurrentStudent.pending, Boolean)

sample({
    clock: pEStudentVisitModel.effects.addVisitFx.doneData,
    target: reload,
})

sample({
    clock: reload,
    source: $selectedStudent,
    filter: (source) => !!source,
    fn: (source) => source!.studentGuid,
    target: loadCurrentStudent,
})

sample({ clock: loadCurrentStudent.doneData, target: $selectedStudent })

export const stores = {
    $selectedStudent,
    $loading,
}

export const events = {
    setCurrentStudentId,
    resetStudentId,
}
