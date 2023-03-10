import { notificationApi, docsApi } from '@api'
import { useStore } from 'effector-react/compat'
import { createEffect, createEvent, createStore } from 'effector'
import { Notifications } from '@api/model/notification'

interface PersonalNotificationsStore {
    type: 'notifications' | 'docs' | null
    personalNotifications: Notifications | null
    error: string | null
    completed: boolean
}

const DEFAULT_STORE: PersonalNotificationsStore = {
    type: null,
    personalNotifications: null,
    error: null,
    completed: false,
}

const usePersonalNotifications = () => {
    return {
        data: useStore($personalNotificationsStore).personalNotifications,
        loading: useStore(getPersonalNotificationsFx.pending),
        error: useStore($personalNotificationsStore).error,
        completed: useStore($personalNotificationsStore).completed,
    }
}

const useType = () => {
    return useStore($personalNotificationsStore).type
}

const changeCompleted = createEvent<{ completed: boolean }>()

const setNotificationsType = createEffect((type: 'notifications' | 'docs') => type)

const getPersonalNotificationsFx = createEffect(async (): Promise<Notifications> => {
    const { type } = $personalNotificationsStore.getState()

    if (type === 'notifications') {
        try {
            const response = await notificationApi.get()

            return response.data
        } catch (error) {
            throw new Error(error as string)
        }
    }

    try {
        const response = await docsApi.get()

        return {
            docs: response.data,
        }
    } catch (error) {
        throw new Error(error as string)
    }
})

const viewPersonalNotificationsFx = createEffect(async (notificationId: string): Promise<string> => {
    const { type } = $personalNotificationsStore.getState()
    const api = type === 'notifications' ? notificationApi : docsApi

    try {
        await api.view(notificationId)
        return 'ok'
    } catch (error) {
        throw new Error('Ошибка загрузки данных')
    }
})

const clearStore = createEvent()

const $personalNotificationsStore = createStore<PersonalNotificationsStore>(DEFAULT_STORE)
    .on(setNotificationsType, (oldData, newData) => ({
        ...oldData,
        type: newData,
    }))
    .on(getPersonalNotificationsFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getPersonalNotificationsFx.doneData, (oldData, newData) => ({
        ...oldData,
        personalNotifications: newData,
    }))
    .on(getPersonalNotificationsFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(viewPersonalNotificationsFx.doneData, (oldData) => ({ ...oldData }))
    .on(viewPersonalNotificationsFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(changeCompleted, (oldData, newData) => ({
        ...oldData,
        completed: newData.completed,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

viewPersonalNotificationsFx.doneData.watch(() => getPersonalNotificationsFx())

export const selectors = {
    usePersonalNotifications,
    useType,
}

export const effects = {
    setNotificationsType,
    getPersonalNotificationsFx,
    viewPersonalNotificationsFx,
}
export const events = {
    changeCompleted,
    clearStore,
}
