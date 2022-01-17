import { messageApi } from '@api'
import { Messages } from '@api/model'
import { createEffect, createStore } from 'effector/compat'
import { useStore } from 'effector-react/compat'

const useMessages = () => {
    return {
        data: useStore($messagesStore).messages,
        loading: useStore(getMessagesFx.pending),
        error: useStore($messagesStore).error,
    }
}

interface MessagesStore {
    messages: Messages | null
    error: string | null
}

const getMessagesFx = createEffect(async (): Promise<Messages> => {
    try {
        const response = await messageApi.get('1')

        return response.data
    } catch (error) {
        throw new Error(error as string)
    }
})

const $messagesStore = createStore<MessagesStore>({ messages: null, error: null })
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

export const selectors = {
    useMessages,
}

export const effects = {
    getMessagesFx,
}
