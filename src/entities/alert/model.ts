import { getAlerts } from '@shared/api/alerts-api'
import { Alert } from '@shared/api/model/alert'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'

const load = createEvent()
const read = createEvent()

const loadFx = createEffect(async () => {
    const result = await getAlerts()

    return result.data
})

sample({ clock: load, target: loadFx })

const readFx = createEffect(() => {
    getAlerts()
})

sample({ clock: read, target: readFx })

const $alerts = createStore<Alert[]>([])

sample({ clock: loadFx.doneData, target: $alerts })

const $loading = loadFx.pending

export const events = {
    load,
}

const useAlerts = () => ({ loading: useStore($loading), alerts: useStore($alerts) })

export const selectors = {
    useAlerts,
}
