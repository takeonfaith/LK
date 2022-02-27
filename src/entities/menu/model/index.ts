import { createEvent, createStore } from 'effector/compat'
import { useStore } from 'effector-react/compat'

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
