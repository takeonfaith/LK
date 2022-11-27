import { signalRConnection } from '@api/config'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'
import { Chat, Chats } from '../types/chat'

const chats: Chat[] = [
    {
        id: 'ddd',
        companion: { avatar: undefined, name: 'Стелла', id: '1' },
        lastMessage: {
            message: 'Привет. Как дела?',
            sentTime: 'dd',
        },
        amountOfUnreadMessages: 10,
    },
]

const loadChats = createEvent()

const loadChatsFx = createEffect(async (): Promise<Chat[]> => {
    return chats
})

sample({ clock: loadChats, target: loadChatsFx })

const $chats = createStore<Chats>({})

sample({
    clock: loadChatsFx.doneData,
    fn: (loaded) => loaded.reduce((sum, curr) => ({ ...sum, [curr.id]: curr }), {}),
    target: $chats,
})

export const selectors = {
    useChats: () => useStore($chats),
}

export const events = {
    loadChats,
}

export const stores = {
    $chats,
}
