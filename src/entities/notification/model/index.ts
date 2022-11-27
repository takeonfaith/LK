import { notificationApi } from '@api'
import { useStore } from 'effector-react/compat'
import { createEffect, createEvent, createStore } from 'effector'
import { Notifications } from '@api/model/notification'

interface PersonalNotificationsStore {
    personalNotifications: Notifications | null
    error: string | null
    completed: boolean
}

const DEFAULT_STORE: PersonalNotificationsStore = {
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

const changeCompleted = createEvent<{ completed: boolean }>()

const getPersonalNotificationsFx = createEffect(async (): Promise<Notifications> => {
    try {
        const response = await notificationApi.get()

        return response.data
    } catch (error) {
        throw new Error(error as string)
    }
})

const viewPersonalNotificationsFx = createEffect(async (notificationId: string): Promise<string> => {
    try {
        await notificationApi.view(notificationId)
        return 'ok'
    } catch (error) {
        throw new Error('Ошибка загрузки данных')
    }
})

const clearStore = createEvent()

const $personalNotificationsStore = createStore<PersonalNotificationsStore>(DEFAULT_STORE)
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
}

export const effects = {
    getPersonalNotificationsFx,
    viewPersonalNotificationsFx,
}
export const events = {
    changeCompleted,
    clearStore,
}
