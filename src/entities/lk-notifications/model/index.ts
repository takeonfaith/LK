import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'
import { TNotification } from '../types'
import { menuModel } from '@entities/menu'

const DEFAULT_STORE = {
    notifications: [] as TNotification[],
    visibleNotifications: [] as TNotification[],
}

const addNotificationsToPagesFx = createEffect(({ notifications }: { notifications: TNotification[] }) => {
    notifications.forEach(({ pageId }) => {
        if (pageId) menuModel.events.changeNotifications({ page: pageId, notifications: 1 })
    })
})

const addNotificationToPageFx = createEffect(({ notifications }: { notifications: TNotification[] }) => {
    const { pageId } = notifications[0]
    if (pageId) menuModel.events.changeNotifications({ page: pageId, notifications: 1 })
})

const removeNotificationFromPageFx = (pageId?: string) => {
    if (pageId) menuModel.events.changeNotifications({ page: pageId, notifications: 0 })
}

const add = createEvent<TNotification>()
const initialize = createEvent<TNotification[]>()
const clearVisibleById = createEvent<string>()
const clearById = createEvent<{ id: string; pageId?: string }>()
const clearAll = createEvent()
const clearAllVisible = createEvent()

const $lkNotificationsStore = createStore(DEFAULT_STORE)

sample({
    clock: initialize,
    source: $lkNotificationsStore,
    fn: (_, clk) => ({ notifications: clk, visibleNotifications: clk.slice(0, 3) }),
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

sample({
    clock: clearById,
    source: $lkNotificationsStore,
    fn: ({ notifications, visibleNotifications }, { id, pageId }) => {
        removeNotificationFromPageFx(pageId)
        return {
            notifications: notifications.filter((n) => n.id !== id),
            visibleNotifications: visibleNotifications.filter((n) => n.id !== id),
        }
    },
    target: $lkNotificationsStore,
})

sample({
    clock: clearAll,
    source: $lkNotificationsStore,
    fn: () => ({ notifications: [], visibleNotifications: [] }),
    target: $lkNotificationsStore,
})

sample({
    clock: clearVisibleById,
    source: $lkNotificationsStore,
    fn: ({ notifications, visibleNotifications }, id) => ({
        notifications,
        visibleNotifications: visibleNotifications.filter((n) => n.id !== id),
    }),
    target: $lkNotificationsStore,
})

sample({
    clock: clearAllVisible,
    source: $lkNotificationsStore,
    fn: ({ notifications }) => ({ notifications, visibleNotifications: [] }),
    target: $lkNotificationsStore,
})

const useLkNotifications = () => {
    return useStore($lkNotificationsStore)
}

export const events = { initialize, add, clearById, clearVisibleById, clearAll, clearAllVisible }
export const selectors = { useLkNotifications }
