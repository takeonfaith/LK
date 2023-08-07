import { getDivisions } from '@shared/api/application-api'
import { combine, createEffect, createEvent, createStore, sample } from 'effector'

export const loadDivisions = createEvent()

const loadDivisionsFx = createEffect(getDivisions)

sample({ clock: loadDivisions, target: loadDivisionsFx })

export const $hrDivisions = createStore<{ divisionGuid: string; divisionName: string }[]>([])
export const $hrDivisionsSuggestions = combine($hrDivisions, (divisions) => {
    return divisions.map((d) => d.divisionName)
})
sample({ clock: loadDivisionsFx.doneData, target: $hrDivisions })
