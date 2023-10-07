import { popUpMessageModel } from '@entities/pop-up-message'
import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent, sample } from 'effector'
import { AddPermissionToTeacher } from './types'
import { addPermissionToTeacherMutation } from './utils'

export const addPermission = createEvent<AddPermissionToTeacher>()

export const addPermissionToTeacherFx = createEffect(async (teacher: AddPermissionToTeacher) => {
    return await pERequest(addPermissionToTeacherMutation(teacher))
})

sample({
    clock: addPermissionToTeacherFx.failData,
    fn: () => {
        return {
            message: 'Не удалось добавить права преподавателю',
            type: 'failure' as any,
            time: 3000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: addPermissionToTeacherFx.doneData,
    fn: () => {
        return {
            message: 'Права добавлены',
            type: 'success' as any,
            time: 3000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({ clock: addPermission, target: addPermissionToTeacherFx })
