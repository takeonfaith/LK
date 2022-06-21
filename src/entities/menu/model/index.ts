import { createEvent, createStore } from 'effector'
import { useStore } from 'effector-react'

interface Menu {
    isOpen: boolean
}

const DEFAULT_STORE: Menu = {
    isOpen: false,
}

const useMenu = () => {
    return useStore($menu)
}

const changeOpen = createEvent<Menu>()
const clearStore = createEvent()

const $menu = createStore<Menu>(DEFAULT_STORE)
    .on(changeOpen, (oldState, { isOpen }) => ({
        ...oldState,
        isOpen: isOpen,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

export const selectors = {
    useMenu,
}

export const events = {
    changeOpen,
    clearStore,
}
