import { projectActivitesApi } from '@api'
import { Projects } from '@api/model/project-activites'
import { createEffect, createStore } from 'effector'
import { useStore } from 'effector-react'

interface Store {
    loading?: boolean
    error?: string
    data?: Projects
}

const getProjectActivitesFx = createEffect(async (semestr: string): Promise<Projects> => {
    return projectActivitesApi.get(semestr)
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
