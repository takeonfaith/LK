import { popUpMessageModel } from '@entities/pop-up-message'
import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { getCompetitionsQuery, getRemoveCompetitionMutation } from '../utils/get-competitions-query'

const load = createEvent()
const remove = createEvent<string>()

const loadFx = createEffect(async () => {
    const { competitions } = await pERequest<{ competitions: string[] }>(getCompetitionsQuery())

    return competitions
})

const removeFx = createEffect(async (compName: string) => {
    await pERequest(getRemoveCompetitionMutation(compName))

    return compName
})

sample({ clock: remove, target: removeFx })

sample({
    clock: removeFx.failData,
    fn: () => ({
        message: 'Не удалось удалить соревнование',
        type: 'failure' as any,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: removeFx.doneData,
    fn: () => ({
        message: 'Соревнование удалено',
        type: 'success' as any,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({ clock: load, target: loadFx })

const $competitions = createStore<string[]>([])
    .on(loadFx.doneData, (_, competitions) => competitions)
    .on(removeFx.doneData, (state, competitionName) => state.filter((c) => c !== competitionName))

export const events = {
    load,
    remove,
}

export const stores = {
    $competitions,
}
