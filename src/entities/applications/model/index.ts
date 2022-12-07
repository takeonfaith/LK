import { applicationApi } from '@api'
import { Application, UserApplication, WorkerApplication } from '@api/model'
import { createEvent, forward } from 'effector'
import { useStore } from 'effector-react/compat'
import { createEffect, createStore } from 'effector'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'

interface ApplicationsStore {
    listApplication: Application[] | null
    dataUserApplication: UserApplication | null
    dataWorkerApplication: WorkerApplication[] | null
    error: string | null
}

export interface ApplicationCreating {
    formId: ApplicationFormCodes
    args: { [key: string]: any }
}

const DEFAULT_STORE = { listApplication: null, error: null, dataUserApplication: null, dataWorkerApplication: null }

const useApplications = () => {
    const { listApplication, dataUserApplication, dataWorkerApplication, error } = useStore($applicationsStore)
    return {
        data: { listApplication, dataUserApplication, dataWorkerApplication },
        loading: useStore(getUserDataApplicationsFx.pending),
        error: error,
    }
}
const getApplicationsFx = createEffect(async (): Promise<Application[]> => {
    const response = await applicationApi.get()
    try {
        return response.data.reverse()
    } catch (_) {
        throw new Error('Не удалось загрузить заявления')
    }
})

const getUserDataApplicationsFx = createEffect(async (): Promise<UserApplication> => {
    const response = await applicationApi.getAppData()

    try {
        return response.data
    } catch (_) {
        throw new Error('Не удалось загрузить информацию о пользователе')
    }
})

const postApplicationFx = createEffect(async (data: ApplicationCreating): Promise<string> => {
    const resultAddApplication = await applicationApi.post(data)

    if (resultAddApplication === 'ok') {
        return 'ok'
    } else {
        throw new Error(resultAddApplication)
    }
})
const getWorkerPosts = createEffect(async (): Promise<any[]> => {
    const response = await applicationApi.getWorkerData()
    try {
        return response.data
    } catch (_) {
        throw new Error('Не удалось загрузить информацию о пользователе')
    }
})

const clearStore = createEvent()

forward({ from: postApplicationFx.doneData, to: getApplicationsFx })

const $applicationsStore = createStore<ApplicationsStore>(DEFAULT_STORE)
    .on(getUserDataApplicationsFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getUserDataApplicationsFx.doneData, (oldData, newData) => ({
        ...oldData,
        dataUserApplication: newData,
    }))
    .on(getUserDataApplicationsFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(getApplicationsFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getApplicationsFx.doneData, (oldData, newData) => ({
        ...oldData,
        listApplication: newData,
    }))
    .on(getApplicationsFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(getWorkerPosts, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getWorkerPosts.doneData, (oldData, newData) => ({
        ...oldData,
        dataWorkerApplication: newData,
    }))
    .on(getWorkerPosts.failData, (oldData, newData) => ({
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
    getUserDataApplicationsFx,
    postApplicationFx,
    getWorkerPosts,
}

export const events = {
    clearStore,
}
