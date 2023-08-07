import { createEvent, createStore } from 'effector'

const update = createEvent<string>()

const $search = createStore<string>('').on(update, (_, updatedValue) => updatedValue)

export const events = {
    update,
}

export const stores = {
    $search,
}
