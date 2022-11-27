import { signalRConnection } from '@api/config'
import { $userStore } from '@entities/user/model'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'
import { chatsModel } from '..'
import { Chat } from '../types/chat'

const selectChat = createEvent<{ chatId: string }>()

const joinChatFx = createEffect<{ userId: number; roomId: string }, void>(async ({ roomId, userId }) => {
    await signalRConnection.invoke('JoinRoom', { user: userId, room: roomId })
})

sample({
    clock: selectChat,
    source: $userStore,
    filter: (source) => !!source.currentUser?.id,
    fn: ({ currentUser }, { chatId }) => ({ userId: currentUser!.id, roomId: chatId }),
    target: joinChatFx,
})

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
