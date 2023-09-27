import { popUpMessageModel } from '@entities/pop-up-message'
import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent, sample } from 'effector'
import { modalModel } from 'widgets/modal/model'
import { AddStudentRegulationPoints } from '../types'

import { getAddPEStudentRegulationPoints } from '../utils'

const addRegulationPoints = createEvent<AddStudentRegulationPoints>()

const addRegulationPointsFx = createEffect(async (payload: AddStudentRegulationPoints) => {
    await pERequest(getAddPEStudentRegulationPoints(payload))

    return payload
})

sample({ clock: addRegulationPoints, target: addRegulationPointsFx })
sample({ clock: addRegulationPointsFx.doneData, target: modalModel.events.close })

sample({
    clock: addRegulationPointsFx.failData,
    fn: () => ({
        message: 'Не удалось добавить норматив',
        type: 'failure' as any,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const events = {
    addRegulationPoints,
}

export const effects = {
    addRegulationPointsFx,
}
