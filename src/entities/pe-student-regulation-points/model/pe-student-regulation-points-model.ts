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

export const events = {
    addRegulationPoints,
}

export const effects = {
    addRegulationPointsFx,
}
