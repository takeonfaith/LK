import { createEffect, createStore } from 'effector'
import { useStore } from 'effector-react'
import { MOCK } from './mock'
import { Project } from './types'

interface Store {
    loading?: boolean
    error?: string
    data?: Project[]
}

const getProjectActivitesFx = createEffect(async (semestr: string): Promise<Project[]> => {
    semestr.toString()
    return MOCK
})

const $store = createStore<Store>({})
    .on(getProjectActivitesFx.doneData, (_, newState) => ({ data: newState }))
    .on(getProjectActivitesFx.failData, (_, newData) => ({ error: newData?.message }))

function useProjectActivites(): Store {
    return {
        ...useStore($store),
        loading: useStore(getProjectActivitesFx.pending),
    }
}

export const selectors = {
    useProjectActivites,
}

export const effects = {
    getProjectActivitesFx,
}
