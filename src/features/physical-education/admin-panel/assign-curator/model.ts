import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent, sample } from 'effector'
import { modalModel } from 'widgets/modal/model'
import { AssignCurator } from './types'
import { getAssignCuratorToGroup } from './utils'
import { combineEvents } from 'patronum'
import { assignVisitValueFx } from '../assign-visit-value/model'
export const assignCurator = createEvent<AssignCurator>()

const assignCuratorFx = createEffect(async ({ groupName, teacherGuid }: AssignCurator) => {
    return await pERequest(getAssignCuratorToGroup({ groupName, teacherGuid }))
})

sample({ clock: assignCurator, target: assignCuratorFx })
sample({
    clock: combineEvents({ events: [assignCuratorFx.doneData, assignVisitValueFx.doneData] }),
    target: modalModel.events.close,
})
