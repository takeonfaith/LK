import { createEvent, createStore } from 'effector/compat'
import { useStore } from 'effector-react/compat'

export interface Confirm {
    isOpen: boolean
    message?: string | null
    onConfirm: () => void
    onReject?: (params: any) => void
}

const defaultStore: Confirm = {
    isOpen: false,
    message: null,
    onConfirm: () => null,
    onReject: () => null,
}

const useConfirm = () => {
    return useStore($confirm)
}

const evokeConfirm = createEvent<{ message: string; onConfirm: () => void; onReject?: (params: any) => void }>()

const closeConfirm = createEvent()

const $confirm = createStore<Confirm>(defaultStore)
    .on(evokeConfirm, (oldState, { message, onReject, onConfirm }) => ({
        isOpen: true,
        message,
        onConfirm,
        onReject,
    }))
    .on(closeConfirm, (oldState) => ({
        ...oldState,
        isOpen: false,
    }))

export const selectors = {
    useConfirm,
}

export const events = {
    evokeConfirm,
    closeConfirm,
}
