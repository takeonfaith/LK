import { createStore, createEvent } from 'effector/compat'
import { useStore } from 'effector-react/compat'
import { MessageType } from '@ui/types'

const usePopUpMessage = () => {
    return useStore($popUpstore)
}

interface IPopUpMessage {
    message: ChildrenType
    type: MessageType
    isOpen: boolean
    time?: number
    onClick?: () => void
}

const defaultStore: IPopUpMessage = {
    message: '',
    type: 'success',
    isOpen: false,
    time: 2000,
}

const evokePopUpMessage = createEvent<{
    message: ChildrenType
    type: MessageType
    time?: number
    onClick?: () => void
}>()

const openPopUpMessage = createEvent<{ isOpen: boolean }>()

const $popUpstore = createStore(defaultStore)
    .on(evokePopUpMessage, (_, { message, type, time = 2000, onClick }) => ({
        isOpen: true,
        message,
        type,
        time,
        onClick,
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
