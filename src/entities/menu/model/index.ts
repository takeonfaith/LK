import { User } from '@api/model'
import { IRoute, IRoutes } from '@app/routes/general-routes'
import { hiddenRoutes, privateRoutes } from '@app/routes/routes'
import { teachersHiddenRoutes, teachersPrivateRoutes } from '@app/routes/teachers-routes'
import { useStore } from 'effector-react/compat'
import { createEvent, createStore } from 'effector/compat'
import findLeftsideBarRoutes from '../lib/find-leftside-bar-routes'

interface Menu {
    allRoutes: IRoutes | null
    visibleRoutes: IRoutes | null
    leftsideBarRoutes: IRoutes | null
    leftsideBarConfig: string[]
    currentPage: IRoute | null
    isOpen: boolean
}

const DEFAULT_STORE: Menu = {
    allRoutes: null,
    visibleRoutes: null,
    leftsideBarRoutes: null,
    currentPage: null,
    leftsideBarConfig: ['home', 'schedule', 'chat', 'acad-performance', 'all'],
    isOpen: false,
}

const useMenu = () => {
    return useStore($menu)
}

const changeOpen = createEvent<{ isOpen: boolean; currentPage?: string }>()
const clearStore = createEvent()
const defineMenu = createEvent<{ user: User | null }>()

const $menu = createStore<Menu>(DEFAULT_STORE)
    .on(changeOpen, (oldState, { isOpen, currentPage }) => ({
        ...oldState,
        currentPage: oldState.allRoutes && currentPage ? oldState.allRoutes?.[currentPage] : oldState.currentPage,
        isOpen: isOpen,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))
    .on(defineMenu, (oldData, { user }) => ({
        ...oldData,
        currentPage:
            user?.status === 'stuff'
                ? teachersPrivateRoutes[window.location.hash.slice(2, window.location.hash.length)]
                : privateRoutes[window.location.hash.slice(2, window.location.hash.length)],
        allRoutes:
            user?.status === 'stuff'
                ? { ...teachersPrivateRoutes, ...teachersHiddenRoutes }
                : { ...privateRoutes, ...hiddenRoutes },
        visibleRoutes: user?.status === 'stuff' ? teachersPrivateRoutes : privateRoutes,
        leftsideBarRoutes: findLeftsideBarRoutes(
            oldData.leftsideBarConfig,
            user?.status === 'stuff' ? teachersPrivateRoutes : privateRoutes,
        ),
    }))

export const selectors = {
    useMenu,
}

export const events = {
    changeOpen,
    clearStore,
    defineMenu,
}
