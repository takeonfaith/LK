import { Message } from '@api/model'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'
import { $message } from './message'

const inital: Message[] = [
    {
        message:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, non. Laboriosam aliquid animi magni sit perferendis, et minima maxime totam eos corporis saepe est sunt facilis? Quae iste nobis sapiente?',
        sender: 'Kostya Doloz',
        sentTime: 'January 5, 2022 21:12',
    },
    {
        message:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, non. Laboriosam aliquid animi magni sit perferendis, et minima maxime totam eos corporis saepe est sunt facilis? Quae iste nobis sapiente?',
        sender: 'Kostya Doloz',
        sentTime: 'January 5, 2022 21:12',
    },
    { message: 'Test', sender: 'Peter Parker', sentTime: 'January 5, 2022 21:12' },
    { message: 'Test', sender: 'Peter Parker', sentTime: 'January 5, 2022 21:12' },
    {
        message: 'TestTestTestTestTestTest',
        sender: 'Kostya Doloz',
        sentTime: 'January 5, 2022 21:12',
    },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 5, 2022 21:12' },
    { message: 'Test', sender: 'Peter Parker', sentTime: 'January 5, 2022 21:12' },
    { message: 'Test', sender: 'Peter Parker', sentTime: 'January 5, 2022 21:12' },
    { message: 'Test', sender: 'Peter Parker', sentTime: 'January 5, 2022 21:12' },
    { message: 'Test', sender: 'Peter Parker', sentTime: 'January 5, 2022 21:12' },
    { message: 'Test', sender: 'Peter Parker', sentTime: 'January 5, 2022 21:12' },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 5, 2022 21:12' },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 5, 2022 21:12' },
    { message: 'Test', sender: 'Peter Parker', sentTime: 'January 5, 2022 21:12' },
    { message: 'Test', sender: 'Peter Parker', sentTime: 'January 5, 2022 21:12' },
    { message: 'Test', sender: 'Peter Parker', sentTime: 'January 5, 2022 21:12' },
    { message: 'Test', sender: 'Peter Parker', sentTime: 'January 5, 2022 21:12' },
    { message: 'Test', sender: 'Peter Parker', sentTime: 'January 6, 2022 21:12' },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 6, 2022 21:12' },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 6, 2022 21:12' },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 6, 2022 21:12' },
    { message: 'Test', sender: 'Peter Parker', sentTime: 'January 6, 2022 21:12' },
    { message: 'Test', sender: 'Peter Parker', sentTime: 'January 6, 2022 21:12' },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 7, 2022 21:12' },
    {
        message:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, non. Laboriosam aliquid animi magni sit perferendis, et minima maxime totam eos corporis saepe est sunt facilis? Quae iste nobis sapiente?',
        sender: 'Kostya Doloz',
        sentTime: 'January 7, 2022 21:12',
    },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 7, 2022 21:12' },
    {
        message:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, non. Laboriosam aliquid animi magni sit perferendis, et minima maxime totam eos corporis saepe est sunt facilis? Quae iste nobis sapiente?',
        sender: 'Kostya Doloz',
        sentTime: 'January 7, 2022 21:12',
    },
    {
        message:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, non. Laboriosam aliquid animi magni sit perferendis, et minima maxime totam eos corporis saepe est sunt facilis? Quae iste nobis sapiente?',
        sender: 'Kostya Doloz',
        sentTime: 'January 7, 2022 21:12',
    },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 8, 2022 21:12' },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 8, 2022 21:12' },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 8, 2022 21:12' },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 8, 2022 21:12' },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 8, 2022 21:12' },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 8, 2022 21:12' },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 8, 2022 21:12' },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 8, 2022 21:12' },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 8, 2022 21:12' },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 9, 2022 21:12' },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 9, 2022 21:12' },
    { message: 'Test', sender: 'Kostya Doloz', sentTime: 'January 10, 2022 21:12' },
]

const sendMessage = createEvent()

const sendFx = createEffect((message: string): Message => {
    return { message, sender: 'me', sentTime: new Date().toISOString() }
})

sample({ clock: sendMessage, source: $message, fn: (message) => message, target: sendFx })

const $messages = createStore<Message[]>(inital)

sample({
    clock: sendFx.doneData,
    source: $messages,
    fn: (messages, message) => [...messages, message],
    target: $messages,
})

export const events = {
    sendMessage,
}

export const selectors = {
    useMessages: () => useStore($messages),
}
