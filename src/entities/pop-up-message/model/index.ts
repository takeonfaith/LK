import { createStore, createEvent } from 'effector/compat'
import { useStore } from 'effector-react/compat'

const usePopUpMessage = () => {
    return useStore($popUpstore)
}

const changeOpenState = (popUps: IPopUpMessage[], index: number, state: boolean) => {
    const found = popUps.find((el) => el.id === index) ?? { isOpen: false }
    found.isOpen = state
    return popUps
}

const removeElement = (popUps: IPopUpMessage[], index: number) => {
    return popUps.filter((el) => el.id !== index)
}

type PopUpMessageType = 'success' | 'failure' | 'info'

export interface IPopUpMessage {
    message: React.ReactNode[] | React.ReactNode | string
    type: PopUpMessageType
    isOpen: boolean
    time: number
    onClick?: () => void
    id: number
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

const removePopUp = createEvent<{ index: number }>()

const openPopUpMessage = createEvent<{ isOpen: boolean; index: number }>()

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
                id: oldData.popUps.length,
            },
        ],
    }))
    .on(openPopUpMessage, (oldState, { isOpen, index }) => ({
        ...oldState,
        popUps: changeOpenState(oldState.popUps, index, isOpen),
    }))
    .on(removePopUp, (oldData, { index }) => ({
        ...oldData,
        popUps: removeElement(oldData.popUps, index),
    }))

export const selectors = {
    usePopUpMessage,
}

export const events = {
    evokePopUpMessage,
    openPopUpMessage,
    removePopUp,
}
