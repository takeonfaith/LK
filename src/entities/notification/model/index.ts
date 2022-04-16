import { notificationApi } from '@api'
import { useStore } from 'effector-react/compat'
import { createEffect, createEvent, createStore } from 'effector/compat'
import { Notifications } from '@api/model/notification'

const usePersonnelNotifications = () => {
    return {
        data: useStore($personnelNotificationsStore).personnelNotifications,
        loading: useStore(getPersonnelNotificationsFx.pending),
        error: useStore($personnelNotificationsStore).error,
        completed: useStore($personnelNotificationsStore).completed,
    }
}

interface PersonnelNotificationsStore {
    personnelNotifications: Notifications | null
    error: string | null
    completed: boolean
}

const changeCompleted = createEvent<{ completed: boolean }>()

const getPersonnelNotificationsFx = createEffect(async (): Promise<Notifications> => {
    try {
        const response = await notificationApi.get()

        return response.data
    } catch (error) {
        throw new Error(error as string)
    }
})

const viewPersonnelNotificationsFx = createEffect(async (notificationId: string): Promise<string> => {
    const response = await notificationApi.view(notificationId)
    if (response.data.result !== 'ok') {
        throw new Error('Ошибка загрузки данных')
    }
    return 'ok'
})

const $personnelNotificationsStore = createStore<PersonnelNotificationsStore>({
    personnelNotifications: null,
    error: null,
    completed: false,
})
    .on(getPersonnelNotificationsFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getPersonnelNotificationsFx.doneData, (oldData, newData) => ({
        ...oldData,
        personnelNotifications: newData,
    }))
    .on(getPersonnelNotificationsFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(viewPersonnelNotificationsFx.doneData, (oldData) => ({ ...oldData }))
    .on(viewPersonnelNotificationsFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(changeCompleted, (oldData, newData) => ({
        ...oldData,
        completed: newData.completed,
    }))

viewPersonnelNotificationsFx.doneData.watch(() => getPersonnelNotificationsFx())

export const selectors = {
    usePersonnelNotifications,
}

export const effects = {
    getPersonnelNotificationsFx,
    viewPersonnelNotificationsFx,
}
export const events = {
    changeCompleted,
}
