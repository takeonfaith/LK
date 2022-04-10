import { applicationApi } from '@api'
import { Application } from '@api/model'
import { useStore } from 'effector-react/compat'
import { createEffect, createStore } from 'effector/compat'

const useApplications = () => {
    return {
        data: useStore($applicationsStore).applications,
        loading: useStore(getApplicationsFx.pending),
        error: useStore($applicationsStore).error,
    }
}

interface ApplicationsStore {
    applications: Application[] | null
    error: string | null
}

const getApplicationsFx = createEffect(async (): Promise<Application[]> => {
    const response = await applicationApi.get()

    try {
        return response.data
    } catch (_) {
        throw new Error('Не удалось загрузить заявления')
    }
})

const $applicationsStore = createStore<ApplicationsStore>({ applications: null, error: null })
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

export const selectors = {
    useApplications,
}

export const effects = {
    getApplicationsFx,
}
