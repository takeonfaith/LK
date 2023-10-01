import { pEStudentModel } from '@entities/pe-student/model'
import { peTeacherModel } from '@entities/pe-teacher'
import { createEvent, sample } from 'effector'

export const pageLoaded = createEvent()

sample({
    clock: pageLoaded,
    target: [pEStudentModel.events.load, peTeacherModel.events.load],
})
