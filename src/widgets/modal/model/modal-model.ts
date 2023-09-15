import { createEvent, createStore } from 'effector'

const close = createEvent()
const open = createEvent()

const $isModalOpen = createStore<boolean>(false)
    .on(open, () => true)
    .on(close, () => false)

export const events = {
    close,
    open,
}
export const stores = {
    $isModalOpen,
}
