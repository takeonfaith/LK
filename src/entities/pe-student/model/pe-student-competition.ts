import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent } from 'effector'
import { getCompetitionsQuery } from '../utils/get-competitions-query'

export const load = createEvent()

const loadFx = createEffect(async () => {
    const { competitions } = await pERequest<{ competitions: string[] }>(getCompetitionsQuery())
})
