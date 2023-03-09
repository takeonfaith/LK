import { createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'

export type NotificationType = 'info' | 'message' | 'alert'

export type TNotification = {
    id: string
    title: string
    text: string
    type: NotificationType
    icon?: ChildrenType
    time?: string
    image?: string
    duration?: number
    goTo?: string
    date?: string
    onClose?: () => void
}

const DEFAULT_STORE = {
    notifications: [] as TNotification[],
}

const add = createEvent<TNotification>()
const clearById = createEvent<string>()
// const clearFirst = createEvent()
// const clearAll = createEvent()

const $lkNotificationsStore = createStore(DEFAULT_STORE)

sample({
    clock: add,
    source: $lkNotificationsStore,
    fn: (src, clk) => ({ notifications: [...src.notifications, clk] }),
    target: $lkNotificationsStore,
})

sample({
    clock: clearById,
    source: $lkNotificationsStore,
    fn: ({ notifications }, id) => ({ notifications: notifications.filter((n) => n.id !== id) }),
    target: $lkNotificationsStore,
})

const useLkNotifications = () => {
    return useStore($lkNotificationsStore)
}

export const events = { add, clearById }
export const selectors = { useLkNotifications }
