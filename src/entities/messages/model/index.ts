import { messageApi } from '@api'
import { Messages } from '@api/model'
import { createEffect, createStore } from 'effector'
import { useStore } from 'effector-react'
import { createEvent } from 'effector'

interface MessagesStore {
    messages: Messages | null
    error: string | null
}

const DEFAULT_STORE: MessagesStore = {
    messages: null,
    error: null,
}

const useMessages = () => {
    return {
        data: useStore($messagesStore).messages,
        loading: useStore(getMessagesFx.pending),
        error: useStore($messagesStore).error,
    }
}

const getMessagesFx = createEffect(async (): Promise<Messages> => {
    try {
        const response = await messageApi.get('1')

        return response.data
    } catch (error) {
        throw new Error(error as string)
    }
})

const clearStore = createEvent()

const $messagesStore = createStore<MessagesStore>(DEFAULT_STORE)
    .on(getMessagesFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getMessagesFx.doneData, (oldData, newData) => ({
        ...oldData,
        messages: newData,
    }))
    .on(getMessagesFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

export const selectors = {
    useMessages,
}

export const effects = {
    getMessagesFx,
}

export const events = {
    clearStore,
}
