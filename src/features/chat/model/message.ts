import { chatModel } from '@entities/chat'
import { createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'

const update = createEvent<string>()

const $chatsMessage = createStore<Record<string, string>>({})
const $currentChatMessage = sample({
    source: { chat: chatModel.stores.$chat, messages: $chatsMessage },
    fn: ({ chat, messages }) => (!chat ? '' : messages[chat.id]),
})

sample({
    clock: update,
    source: { chat: chatModel.stores.$chat, messages: $chatsMessage },
    filter: ({ chat }) => !!chat?.id,
    fn: ({ chat, messages }, message) => {
        return { ...messages, [chat!.id]: message }
    },
    target: $chatsMessage,
})

export const events = {
    update,
}

export const selectors = {
    useMessage: () => useStore($currentChatMessage),
}

export const stores = {
    $currentChatMessage,
}
