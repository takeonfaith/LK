import { popUpMessageModel } from '@entities/pop-up-message'
import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent, sample } from 'effector'
import { modalModel } from 'widgets/modal/model'
import { AddStudentVisits } from '../types/add-student-visits'
import { getAddVisitMutation } from '../utils/get-add-visits-mutation'

const addVisit = createEvent<AddStudentVisits>()

const addVisitFx = createEffect(async (payload: AddStudentVisits) => {
    await pERequest(getAddVisitMutation(payload))

    return payload
})

sample({ clock: addVisit, target: addVisitFx })
sample({ clock: addVisitFx.doneData, target: modalModel.events.close })

sample({
    clock: addVisitFx.failData,
    fn: () => ({
        message: 'Не удалось добавить посещение',
        type: 'failure' as any,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: addVisitFx.doneData,
    fn: () => ({
        message: 'Посещение добавлено',
        type: 'success' as any,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const events = {
    addVisit,
}

export const effects = {
    addVisitFx,
}
