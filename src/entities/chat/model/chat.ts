import { createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'
import { chatsModel } from '..'
import { Chat } from '../types/chat'

const selectChat = createEvent<{ chatId: string }>()

const $chat = createStore<Chat | null>(null)

sample({
    clock: selectChat,
    source: chatsModel.stores.$chats,
    fn: (chats, { chatId }) => chats[chatId],
    target: $chat,
})

export const events = {
    selectChat,
}

export const stores = {
    $chat,
}

export const selectors = { useChat: () => useStore($chat) }
