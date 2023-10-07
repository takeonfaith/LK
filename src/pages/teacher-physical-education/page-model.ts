import { pEStudentModel } from '@entities/pe-student/model'
import { peTeacherModel } from '@entities/pe-teacher'
import { createEvent, createStore, sample } from 'effector'

export const pageIndexChanged = createEvent<number>()
export const pageLoaded = createEvent()

export const $page = createStore(0).on(pageIndexChanged, (_, page) => page)

sample({
    clock: pageLoaded,
    target: [pEStudentModel.events.load, peTeacherModel.events.load],
})
