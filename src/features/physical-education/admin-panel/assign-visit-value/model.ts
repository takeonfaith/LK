import { popUpMessageModel } from '@entities/pop-up-message'
import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent, sample } from 'effector'
import { modalModel } from 'widgets/modal/model'
import { AssignVisitValue } from './types'
import { getAssignVisitValueMutation } from './utils'

export const assignVisitValue = createEvent<AssignVisitValue>()

export const assignVisitValueFx = createEffect(async ({ groupName, newVisitValue }: AssignVisitValue) => {
    return await pERequest(getAssignVisitValueMutation({ groupName, newVisitValue }))
})

sample({
    clock: assignVisitValueFx.failData,
    fn: () => {
        return {
            message: 'Не удалось назначить стоимость посещения',
            type: 'failure' as any,
            time: 3000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: assignVisitValueFx.doneData,
    fn: () => {
        return {
            message: 'Стоимость посещения назначена',
            type: 'success' as any,
            time: 3000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({ clock: assignVisitValue, target: assignVisitValueFx })
sample({ clock: assignVisitValueFx.doneData, target: modalModel.events.close })
