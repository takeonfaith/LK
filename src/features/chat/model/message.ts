import { createEvent, createStore, forward } from 'effector'
import { useStore } from 'effector-react'

const update = createEvent<string>()

export const $message = createStore<string>('')

forward({ from: update, to: $message })

export const events = {
    update,
}

export const selectors = {
    useMessage: () => useStore($message),
}
