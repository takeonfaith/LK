import { createEffect, createStore } from 'effector'
import { useStore } from 'effector-react'
import { Projects } from './types'

interface Store {
    loading?: boolean
    error?: string
    data?: Projects
}

const getProjectActivitesFx = createEffect(async (): Promise<Projects> => {
    return {}
})

const $store = createStore<Store>({})
    .on(getProjectActivitesFx.pending, () => ({ loading: true }))
    .on(getProjectActivitesFx.doneData, (_, newState) => ({ data: newState }))
    .on(getProjectActivitesFx.failData, (_, newData) => ({ error: newData?.message }))

function useProjectActivites() {
    return useStore($store)
}

export const selectors = {
    useProjectActivites,
}
