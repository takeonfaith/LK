import { createStore, createEvent } from 'effector/compat'
import { useStore } from 'effector-react/compat'

const usePopUpMessage = () => {
    return useStore($popUpstore)
}

type PopUpMessageType = 'success' | 'failure' | 'info'

interface IPopUpMessage {
    message: React.ReactNode[] | React.ReactNode | string
    type: PopUpMessageType
    isOpen: boolean
    time?: number
    onClick?: () => void
}

interface PopUpMessageStore {
    popUps: IPopUpMessage[]
}

const defaultStore: PopUpMessageStore = {
    popUps: [],
}

const evokePopUpMessage = createEvent<{
    message: React.ReactNode[] | React.ReactNode | string
    type: PopUpMessageType
    time?: number
    onClick?: () => void
}>()

const openPopUpMessage = createEvent<{ isOpen: boolean }>()

const $popUpstore = createStore(defaultStore)
    .on(evokePopUpMessage, (oldData, { message, type, time = 2000, onClick }) => ({
        popUps: [
            ...oldData.popUps,
            {
                isOpen: true,
                message,
                type,
                time,
                onClick,
            },
        ],
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
