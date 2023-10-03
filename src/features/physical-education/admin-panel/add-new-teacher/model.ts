import { popUpMessageModel } from '@entities/pop-up-message'
import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent, sample } from 'effector'
import { modalModel } from 'widgets/modal/model'
import { AddTeacher } from './types'
import { getAddNewTeacherMutation } from './utils'

export const createTeacher = createEvent<AddTeacher>()

const createTeacherFx = createEffect(async (teacher: AddTeacher) => {
    return await pERequest(getAddNewTeacherMutation(teacher))
})

sample({
    clock: createTeacherFx.failData,
    fn: () => {
        return {
            message: 'Не удалось создать нового преподавателя',
            type: 'failure' as any,
            time: 3000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: createTeacherFx.doneData,
    fn: () => {
        return {
            message: 'Преподаватель создан',
            type: 'success' as any,
            time: 3000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({ clock: createTeacher, target: createTeacherFx })
sample({ clock: createTeacherFx.doneData, target: modalModel.events.close })
