import { createStore, createEvent } from 'effector'
import { useStore } from 'effector-react'

const usePopUpMessage = () => {
    return useStore($popUpstore)
}

type PopUpMessageType = 'success' | 'failure' | 'info'

interface IPopUpMessage {
    message: string
    type: PopUpMessageType
    isOpen: boolean
    time?: number
}

const defaultStore: IPopUpMessage = {
    message: '',
    type: 'success',
    isOpen: false,
    time: 2000,
}

const evokePopUpMessage = createEvent<{ message: string; type: PopUpMessageType; time?: number }>()

const openPopUpMessage = createEvent<{ isOpen: boolean }>()

const $popUpstore = createStore(defaultStore)
    .on(evokePopUpMessage, (_, { message, type, time = 2000 }) => ({
        isOpen: true,
        message,
        type,
        time,
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
