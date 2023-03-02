import { hrApplicationApi } from '@api'
import { HrApplication, HrUserApplication } from '@api/model'
import { createEvent, forward, sample } from 'effector'
import { useStore } from 'effector-react/compat'
import { createEffect, createStore } from 'effector'
import { popUpMessageModelHr } from '@entities/pop-up-message-hr'
import { MessageType } from '@shared/ui/types'

interface ApplicationsStore {
    listApplication: HrApplication[] | null
    dataUserApplication: HrUserApplication | null
    error: string | null
}

export interface ApplicationCreating {
    [key: string]: any
}

const DEFAULT_STORE = { listApplication: null, error: null, dataUserApplication: null }

const useApplications = () => {
    const { listApplication, dataUserApplication, error } = useStore($applicationsStore)
    return {
        data: { listApplication, dataUserApplication },
        loading: useStore(getUserDataApplicationsFx.pending),
        error: error,
    }
}
const getApplicationsFx = createEffect(async (): Promise<HrApplication[]> => {
    const response = await hrApplicationApi.get()
    try {
        return response.data.reverse()
    } catch (_) {
        throw new Error('Не удалось загрузить заявления')
    }
})

const getUserDataApplicationsFx = createEffect(async (): Promise<HrUserApplication> => {
    const response = await hrApplicationApi.getAppData()

    try {
        return response.data
    } catch (_) {
        throw new Error('Не удалось загрузить информацию о пользователе')
    }
})

const postApplicationFx = createEffect(async (data: ApplicationCreating) => {
    return await hrApplicationApi.post(data)
})

sample({
    clock: postApplicationFx.doneData,
    fn: (response) => {
        const result = response.data.dismissalResponse

        if (result.isError) {
            return { message: result.errorString, type: 'hrFailure' as MessageType, time: 300000 }
        }
        return {
            message: `Форма отправлена успешно`,
            type: 'success' as MessageType,
            time: 0,
        }
    },
    target: popUpMessageModelHr.events.evokePopUpMessage,
})

sample({
    clock: postApplicationFx.fail,
    fn: () => {
        return {
            message: 'Не удалось отправить форму. Попробуйте позже',
            type: 'hrFailure' as MessageType,
            time: 300000,
        }
    },
    target: popUpMessageModelHr.events.evokePopUpMessage,
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
}

export const events = {
    clearStore,
}
