import { menuModel } from '@entities/menu'
import { NotificationsSettingsType } from '@entities/settings/lib/get-default-settings'
import { lkNotificationApi } from '@shared/api'
import { createEffect, createEvent, createStore, forward, sample } from 'effector'
import { useStore } from 'effector-react'
import createNotification from '../lib/create-notification'
import { TNotification } from '../types'

type TStore = {
    notifications: TNotification[]
    visibleNotifications: TNotification[]
    loading: boolean
    error: string | null
    removeNotificationError: string | null
    removeNotificationLoading: boolean
}

const DEFAULT_STORE: TStore = {
    notifications: [] as TNotification[],
    visibleNotifications: [] as TNotification[],
    loading: false,
    error: null,
    removeNotificationError: null,
    removeNotificationLoading: false,
}

const fetchNotifications = createEffect(async ({ settings }: { settings: NotificationsSettingsType }) => {
    try {
        const { data } = await lkNotificationApi.get()

        const typeSettingsDictionary: Record<string, keyof NotificationsSettingsType> = {
            message: 'messages',
            'doc-for-review': 'doclist',
            'version-update': 'newVersion',
            'digital-services': 'applications',
            alert: 'news',
            schedule: 'schedule',
        }

        return data
            .filter(({ type }) => settings[typeSettingsDictionary[type]])
            .map(({ id, type, title, text }) => createNotification(type, id, title, text))
    } catch (error) {
        throw new Error(`Не удалось загрузить уведомления. Ошибка: ${error}`)
    }
})

const addNotificationsToPagesFx = createEffect(({ notifications }: { notifications: TNotification[] }) => {
    notifications.forEach(({ pageId }) => {
        if (pageId) menuModel.events.changeNotifications({ page: pageId, notifications: 1 })
    })
})

const addNotificationToPageFx = createEffect(({ notifications }: { notifications: TNotification[] }) => {
    const { pageId } = notifications[0]
    if (pageId) menuModel.events.changeNotifications({ page: pageId, notifications: 1 })
})

const clearNotificationByIdFx = createEffect(async ({ id, pageId }: { id: string; pageId?: string }) => {
    try {
        await lkNotificationApi.clearNotificationById(id)
        return { id, pageId }
    } catch (error) {
        throw new Error('Не удалось скрыть уведомление')
    }
})

const removeNotificationFromPageFx = (pageId?: string) => {
    if (pageId) menuModel.events.changeNotifications({ page: pageId, notifications: 0 })
}

const add = createEvent<TNotification>()
const initialize = createEvent<{ settings: NotificationsSettingsType }>()
const clearVisibleById = createEvent<string>()
const clearById = createEvent<{ id: string; pageId?: string }>()
const clearAll = createEvent()
const clearAllVisible = createEvent()
const clearStore = createEvent()

const $lkNotificationsStore = createStore<TStore>(DEFAULT_STORE).reset(clearStore)

forward({
    from: initialize,
    to: fetchNotifications,
})

sample({
    clock: fetchNotifications.pending,
    source: $lkNotificationsStore,
    fn: (store, clk) => ({ ...store, loading: clk }),
    target: $lkNotificationsStore,
})

sample({
    clock: fetchNotifications.failData,
    source: $lkNotificationsStore,
    fn: (store, clk) => ({ ...store, error: clk.message }),
    target: $lkNotificationsStore,
})

sample({
    clock: fetchNotifications.doneData,
    source: $lkNotificationsStore,
    fn: (store, clk) => ({
        notifications: [...clk, ...store.notifications],
        visibleNotifications: [...store.visibleNotifications, ...clk].slice(0, 2),
        error: null,
    }),
    target: [$lkNotificationsStore, addNotificationsToPagesFx],
})

sample({
    clock: add,
    source: $lkNotificationsStore,
    fn: (src, clk) => ({
        notifications: [...src.notifications, clk],
        visibleNotifications: [...src.visibleNotifications, clk],
    }),
    target: [$lkNotificationsStore, addNotificationToPageFx],
})

forward({
    from: clearById,
    to: clearNotificationByIdFx,
})

sample({
    clock: clearNotificationByIdFx.doneData,
    source: $lkNotificationsStore,
    fn: ({ notifications, visibleNotifications, ...store }, { id, pageId }) => {
        removeNotificationFromPageFx(pageId)
        // eslint-disable-next-line no-console
        console.log(id, notifications)

        return {
            ...store,
            notifications: notifications.filter((n) => n.id !== id),
            visibleNotifications: visibleNotifications.filter((n) => n.id !== id),
        }
    },
    target: $lkNotificationsStore,
})

sample({
    clock: clearNotificationByIdFx.failData,
    source: $lkNotificationsStore,
    fn: (store, err) => ({ ...store, removeNotificationError: err.message }),
    target: $lkNotificationsStore,
})

sample({
    clock: clearNotificationByIdFx.pending,
    source: $lkNotificationsStore,
    fn: (store, loading) => ({ ...store, removeNotificationLoading: loading }),
    target: $lkNotificationsStore,
})

sample({
    clock: clearAll,
    source: $lkNotificationsStore,
    fn: (store) => ({ ...store, notifications: [], visibleNotifications: [] }),
    target: $lkNotificationsStore,
})

sample({
    clock: clearVisibleById,
    source: $lkNotificationsStore,
    fn: ({ notifications, visibleNotifications, ...store }, id) => ({
        ...store,
        notifications,
        visibleNotifications: visibleNotifications.filter((n) => n.id !== id),
    }),
    target: $lkNotificationsStore,
})

sample({
    clock: clearAllVisible,
    source: $lkNotificationsStore,
    fn: ({ notifications, ...store }) => ({ ...store, notifications, visibleNotifications: [] }),
    target: $lkNotificationsStore,
})

const useLkNotifications = () => {
    return useStore($lkNotificationsStore)
}

export const events = { initialize, add, clearById, clearVisibleById, clearAll, clearAllVisible, clearStore }
export const selectors = { useLkNotifications }
