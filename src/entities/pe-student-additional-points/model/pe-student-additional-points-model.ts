import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent, sample } from 'effector'
import { modalModel } from 'widgets/modal/model'
import { AddStudentAdditionalPoints } from '../types'
import { getAddPEStudentAdditionalPoints } from '../utils'

const addAdditionPoints = createEvent<AddStudentAdditionalPoints>()

const addAdditionPointsFx = createEffect(async (payload: AddStudentAdditionalPoints) => {
    await pERequest(getAddPEStudentAdditionalPoints(payload))

    return payload
})

sample({ clock: addAdditionPoints, target: addAdditionPointsFx })
sample({ clock: addAdditionPointsFx.doneData, target: modalModel.events.close })

export const events = {
    addAdditionPoints,
}

export const effects = {
    addAdditionPointsFx,
}
