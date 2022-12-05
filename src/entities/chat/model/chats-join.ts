import { signalRConnection } from '@api/config'
import { $userStore } from '@entities/user/model'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'
import { $signalRInitiated } from 'shared/effector/init-signalr'
import { chatsModel } from '..'

const joinChat = createEvent<{ chatId: string }>()

sample({
    source: { chats: chatsModel.stores.$chats, signalRInitiated: $signalRInitiated },
    filter: ({ signalRInitiated }) => signalRInitiated,
    fn: ({ chats }) => {
        Object.keys(chats).forEach((chatId) => {
            joinChat({ chatId })
        })
    },
})

const joinChatFx = createEffect<{ userId: number; roomId: string }, void>(async ({ roomId, userId }) => {
    await signalRConnection.invoke('JoinRoom', { user: userId, room: roomId })
})

sample({
    clock: joinChat,
    source: $userStore,
    filter: (source) => !!source.currentUser?.id,
    fn: ({ currentUser }, { chatId }) => ({ userId: currentUser!.id, roomId: chatId }),
    target: joinChatFx,
})

const $chatsJoin = createStore<Record<string, boolean>>({})

sample({
    clock: joinChatFx.done,
    source: $chatsJoin,
    fn: (chatsJoin, { params }) => ({ ...chatsJoin, [params.roomId]: true }),
})

export const selectors = { useChatsJoin: () => useStore($chatsJoin) }

export const events = { joinChat }
