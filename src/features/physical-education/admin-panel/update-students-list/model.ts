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

export const $isStudentsListUpdating = updateStudentsListFx.pending
