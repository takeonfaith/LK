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

export const events = {
    addVisit,
}

export const effects = {
    addVisitFx,
}
