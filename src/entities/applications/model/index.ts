import { applicationApi } from '@api'
import { Application } from '@api/model'
import { createEvent } from 'effector'
import { useStore } from 'effector-react/compat'
import { createEffect, createStore } from 'effector/compat'

interface ApplicationsStore {
    applications: Application[] | null
    error: string | null
}

const DEFAULT_STORE = { applications: null, error: null }

const useApplications = () => {
    return {
        data: useStore($applicationsStore).applications,
        loading: useStore(getApplicationsFx.pending),
        error: useStore($applicationsStore).error,
    }
}

const getApplicationsFx = createEffect(async (): Promise<Application[]> => {
    const response = await applicationApi.get()

    try {
        return response.data
    } catch (_) {
        throw new Error('Не удалось загрузить заявления')
    }
})

const clearStore = createEvent()

const $applicationsStore = createStore<ApplicationsStore>(DEFAULT_STORE)
    .on(getApplicationsFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getApplicationsFx.doneData, (oldData, newData) => ({
        ...oldData,
        applications: newData,
    }))
    .on(getApplicationsFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

export const selectors = {
    useApplications,
}

export const effects = {
    getApplicationsFx,
}

export const events = {
    clearStore,
}
