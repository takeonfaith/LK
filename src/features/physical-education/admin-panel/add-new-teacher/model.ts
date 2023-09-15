import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent, sample } from 'effector'
import { modalModel } from 'widgets/modal/model'
import { AddTeacher } from './types'
import { getAddNewTeacherMutation } from './utils'

export const createTeacher = createEvent<AddTeacher>()

const createTeacherFx = createEffect(async (teacher: AddTeacher) => {
    return await pERequest(getAddNewTeacherMutation(teacher))
})

sample({ clock: createTeacher, target: createTeacherFx })
sample({ clock: createTeacherFx.doneData, target: modalModel.events.close })
