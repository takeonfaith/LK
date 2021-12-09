import { createEvent, createStore } from 'effector'
import { useStore } from 'effector-react'

interface Menu {
    isOpen: boolean
}

const defaultStore: Menu = {
    isOpen: false,
}

const useMenu = () => {
    return useStore($menu)
}

const changeOpen = createEvent<Menu>()

const $menu = createStore<Menu>(defaultStore).on(changeOpen, (oldState, { isOpen }) => ({
    ...oldState,
    isOpen: isOpen,
}))

export const selectors = {
    useMenu,
}

export const events = {
    changeOpen,
}
