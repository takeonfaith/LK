import { pEStudentModel } from '@entities/pe-student/model'
import { createEvent, sample } from 'effector'

export const pageLoaded = createEvent()

sample({
    clock: pageLoaded,
    target: pEStudentModel.events.load,
})
