import { popUpMessageModel } from '@entities/pop-up-message'
import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent, sample } from 'effector'
import { modalModel } from 'widgets/modal/model'
import { getUpdateStudentsListMutation } from './utils'

export const updateStudentsList = createEvent()

const updateStudentsListFx = createEffect(async () => {
    return await pERequest(getUpdateStudentsListMutation())
})

sample({ clock: updateStudentsList, target: updateStudentsListFx })
sample({ clock: updateStudentsListFx.doneData, target: modalModel.events.close })

sample({
    clock: updateStudentsListFx.failData,
    fn: () => {
        return {
            message: 'Не удалось обновить список студентов',
            type: 'failure' as any,
            time: 3000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: updateStudentsListFx.doneData,
    fn: () => {
        return {
            message: 'Список студентов обновлен',
            type: 'success' as any,
            time: 3000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const $isStudentsListUpdating = updateStudentsListFx.pending
