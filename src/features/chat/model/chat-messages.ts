import { signalRConnection } from '@api/config'
import { Message } from '@api/model'
import { chatModel } from '@entities/chat'
import { $userStore } from '@entities/user/model'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'
import { LoadChat } from '../types/load-chat'
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
const onReceivedMessage = createEvent<{ senderId: string; message: string }>()

const sendFx = createEffect<string, Omit<Message, 'sender'>>(async (message) => {
    await signalRConnection.invoke('SendMessage', message)
    return { message, sentTime: new Date().toISOString() }
})

signalRConnection.on('ReceiveMessage', (senderId: string, message: string) => onReceivedMessage({ senderId, message }))

const loadChatMessagesFx = createEffect<LoadChat, Message[]>(({ chatId }) => {
    return inital
})

sample({
    clock: chatModel.stores.$chat,
    filter: Boolean,
    fn: (chat) => ({ chatId: chat.id }),
    target: loadChatMessagesFx,
})

sample({ clock: sendMessage, source: $message, fn: (message) => message, target: sendFx })

const $chatMessages = createStore<Message[]>(inital)

sample({
    clock: onReceivedMessage,
    source: $chatMessages,
    fn: (messages, { message, senderId }): Message[] => [
        ...messages,
        {
            sender: senderId.toString(),
            message,
            sentTime: new Date().toISOString(),
        },
    ],
    target: $chatMessages,
})

sample({ clock: loadChatMessagesFx.doneData, target: $chatMessages })

sample({
    clock: sendFx.doneData,
    source: { messages: $chatMessages, user: $userStore },
    filter: ({ user }) => !!user.currentUser?.id,
    fn: ({ messages, user }, message) => [...messages, { ...message, sender: user.currentUser!.id.toString() }],
    target: $chatMessages,
})

export const events = {
    sendMessage,
}

export const selectors = {
    useChatMessages: () => useStore($chatMessages),
}
