import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent, sample } from 'effector'
import { modalModel } from 'widgets/modal/model'

import { popUpMessageModel } from '@entities/pop-up-message'
import { AddCompetition } from './types'
import { getAddCompetition } from './utils'
import { peStudentCompetitionModel } from '@entities/pe-student/model'

export const addCompetition = createEvent<AddCompetition>()

const addCompetitionFx = createEffect(async (payload: AddCompetition) => {
    return await pERequest(getAddCompetition(payload))
})

sample({ clock: addCompetition, target: addCompetitionFx })

sample({
    clock: addCompetitionFx.failData,
    fn: () => {
        return {
            message: 'Не удалось добавить соревнование',
            type: 'failure' as any,
            time: 3000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: addCompetitionFx.doneData,
    fn: () => {
        return {
            message: 'Соревнование добавлено',
            type: 'success' as any,
            time: 3000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({ clock: addCompetitionFx.doneData, target: peStudentCompetitionModel.events.load })

sample({
    clock: addCompetitionFx.doneData,
    target: modalModel.events.close,
})
