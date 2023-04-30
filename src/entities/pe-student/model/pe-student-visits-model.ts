import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent, sample } from 'effector'
import { AddStudentVisits } from '../types/add-student-visits'
import { getAddVisitMutation } from '../utils/getAddVisitMutation'

const addVisit = createEvent<AddStudentVisits>()

const addVisitFx = createEffect(async (payload: AddStudentVisits) => {
    await pERequest(getAddVisitMutation(payload))

    return payload
})

sample({ clock: addVisit, target: addVisitFx })

export const events = {
    addVisit,
}

export const effects = {
    addVisitFx,
}
