import { createStore, createEvent } from 'effector'
import { useStore } from 'effector-react'

const usePopUpMessage = () => {
    return useStore($popUpstore)
}

interface IPopUpMessage {
    message: string
    type: 'success' | 'failure'
    isOpen: boolean
}

const defaultStore: IPopUpMessage = {
    message: '',
    type: 'success',
    isOpen: false,
}

const evokePopUpMessage = createEvent<{ message: string; type: 'success' | 'failure' }>()

const openPopUpMessage = createEvent<{ isOpen: boolean }>()

const $popUpstore = createStore(defaultStore)
    .on(evokePopUpMessage, (_, { message, type }) => ({
        isOpen: true,
        message,
        type,
    }))
    .on(openPopUpMessage, (oldState, { isOpen }) => ({
        ...oldState,
        isOpen: isOpen,
    }))

export const selectors = {
    usePopUpMessage,
}

export const events = {
    evokePopUpMessage,
    openPopUpMessage,
}
