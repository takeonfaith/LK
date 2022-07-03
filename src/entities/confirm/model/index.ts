import { createEvent, createStore } from 'effector'
import { useStore } from 'effector-react'

export interface Confirm {
    isOpen: boolean
    message?: string | null
    onConfirm: () => void
    onReject?: (params: any) => void
}

const DEFAULT_STORE: Confirm = {
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
const clearStore = createEvent()

const $confirm = createStore<Confirm>(DEFAULT_STORE)
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
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

export const selectors = {
    useConfirm,
}

export const events = {
    evokeConfirm,
    closeConfirm,
    clearStore,
}
