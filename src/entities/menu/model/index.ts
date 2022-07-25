import { AdminLinks, User } from '@api/model'
import { IRoute, IRoutes } from '@app/routes/general-routes'
import { hiddenRoutes, privateRoutes } from '@app/routes/routes'
import { teachersHiddenRoutes, teachersPrivateRoutes } from '@app/routes/teachers-routes'
import { MenuType, REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG, SETTINGS } from '@consts'
import { useStore } from 'effector-react/compat'
import { createEvent, createStore } from 'effector/compat'
import findRoutesByConfig from '../lib/find-routes-by-config'

interface Menu {
    allRoutes: IRoutes | null
    visibleRoutes: IRoutes | null
    leftsideBarRoutes: IRoutes | null
    homeRoutes: IRoutes | null
    currentPage: IRoute | null
    isOpen: boolean
}

// const DEFAULT_HOME_CONFIG = ['settings', 'profile', 'chat', 'schedule', 'payments', 'project-activity', 'all-students']

export const DEFAULT_MOBILE_CONFIG = ['home', 'schedule', 'chat', 'all', 'profile']
// const DEFAULT_STUDENT_LEFTSIDE_BAR_CONFIG = ['home', 'schedule', 'chat', 'acad-performance', 'payments', 'all']
// const DEFAULT_TEACHER_LEFTSIDE_BAR_CONFIG = ['home', 'schedule', 'chat', 'all']

const getLeftsideBarConfig = (user: User | null): MenuType => {
    const localSettings = JSON.parse(localStorage.getItem(SETTINGS) || '{}')
    const settingsMenuData: MenuType = localSettings.menu

    const uniqueRequiredTeacherMenuItems = REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG.filter(
        (item) => !settingsMenuData.includes(item),
    )

    const settingsDataToBeSet =
        user?.user_status === 'staff' && settingsMenuData.some((item) => !uniqueRequiredTeacherMenuItems.includes(item))
            ? [...settingsMenuData, ...uniqueRequiredTeacherMenuItems]
            : settingsMenuData

    localStorage.setItem(SETTINGS, JSON.stringify({ ...localSettings, menu: settingsDataToBeSet }))

    return settingsMenuData
}

const DEFAULT_STORE: Menu = {
    allRoutes: null,
    visibleRoutes: null,
    leftsideBarRoutes: null,
    homeRoutes: null,
    currentPage: null,
    isOpen: false,
}

const useMenu = () => {
    return useStore($menu)
}

const changeOpen = createEvent<{ isOpen: boolean; currentPage?: string }>()
const clearStore = createEvent()
const defineMenu = createEvent<{ user: User | null; adminLinks: AdminLinks | null; homeRoutes: string[] | string }>()
const changeNotifications = createEvent<{ page: string; notifications: ((prev: number) => number) | number }>()

const getNewNotifications = (page: string, notifications: number, routes: IRoutes | null) => {
    const newRoutes = { ...routes }
    newRoutes[page].notifications = notifications
    return newRoutes
}

const $menu = createStore<Menu>(DEFAULT_STORE)
    .on(changeOpen, (oldState, { isOpen, currentPage }) => ({
        ...oldState,
        currentPage: oldState.allRoutes && currentPage ? oldState.allRoutes?.[currentPage] : oldState.currentPage,
        isOpen: isOpen,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))
    .on(defineMenu, (oldData, { user, homeRoutes }) => ({
        ...oldData,
        currentPage:
            user?.user_status === 'staff'
                ? teachersPrivateRoutes()[window.location.hash.slice(2, window.location.hash.length)]
                : privateRoutes()[window.location.hash.slice(2, window.location.hash.length)],
        allRoutes:
            user?.user_status === 'staff'
                ? { ...teachersPrivateRoutes(), ...teachersHiddenRoutes() }
                : { ...privateRoutes(), ...hiddenRoutes() },
        visibleRoutes: user?.user_status === 'staff' ? teachersPrivateRoutes() : privateRoutes(),
        leftsideBarRoutes: findRoutesByConfig(
            getLeftsideBarConfig(user),
            user?.user_status === 'staff' ? teachersPrivateRoutes() : privateRoutes(),
        ),
        homeRoutes: findRoutesByConfig(
            homeRoutes as string[],
            user?.user_status === 'staff' ? teachersPrivateRoutes() : privateRoutes(),
        ),
    }))
    .on(changeNotifications, (oldData, { page, notifications }) => ({
        ...oldData,
        allRoutes: getNewNotifications(
            page,
            typeof notifications === 'number'
                ? notifications
                : notifications(oldData.allRoutes?.[page].notifications ?? 0),
            oldData.allRoutes,
        ),
    }))

export const selectors = {
    useMenu,
}

export const events = {
    changeOpen,
    clearStore,
    defineMenu,
    changeNotifications,
}
