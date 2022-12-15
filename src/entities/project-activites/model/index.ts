import { projectActivitesApi } from '@api'
import { Project } from '@api/model/project-activites'
import { DEFAULT_API_LOAD_ERROR_MESSAGE } from '@shared/consts'
import { createEffect, createEvent, createStore } from 'effector'
import { useStore } from 'effector-react'

interface Store {
    loading?: boolean
    error?: string | null
    data?: Project | null
}

const DEFAULT_STORE: Store = {
    data: null,
    error: null,
    loading: false,
}

const useProjectActivites = (): Store => {
    return {
        ...useStore($store),
        loading: useStore(getProjectActivitesFx.pending),
    }
}

const getProjectActivitesFx = createEffect(async (semestr: string): Promise<Project> => {
    try {
        const data = await projectActivitesApi.get(semestr)
        return data
    } catch (error) {
        throw new Error(DEFAULT_API_LOAD_ERROR_MESSAGE)
    }
})

const clearStore = createEvent()

const $store = createStore<Store>(DEFAULT_STORE)
    .on(getProjectActivitesFx.doneData, (_, newState) => ({ data: newState }))
    .on(getProjectActivitesFx.failData, (_, newData) => ({ error: newData?.message }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

export const selectors = {
    useProjectActivites,
}

export const effects = {
    getProjectActivitesFx,
}

export const events = {
    clearStore,
}
