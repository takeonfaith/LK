import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent, sample } from 'effector'
import { modalModel } from 'widgets/modal/model'
import { AssignVisitValue } from './types'
import { getAssignVisitValueMutation } from './utils'

export const assignVisitValue = createEvent<AssignVisitValue>()

export const assignVisitValueFx = createEffect(async ({ groupName, newVisitValue }: AssignVisitValue) => {
    return await pERequest(getAssignVisitValueMutation({ groupName, newVisitValue }))
})

sample({ clock: assignVisitValue, target: assignVisitValueFx })
sample({ clock: assignVisitValueFx.doneData, target: modalModel.events.close })
