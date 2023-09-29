import { AdminLinks, User } from '@api/model'
import { IRoute, IRoutes } from '@app/routes/general-routes'
import { hiddenRoutes, privateRoutes } from '@app/routes/routes'
import { teachersHiddenRoutes, teachersPrivateRoutes } from '@app/routes/teacher-routes'
import { MenuType, REQUIRED_LEFTSIDE_BAR_CONFIG, REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG } from '@shared/constants'
import { SettingsType } from '@entities/settings/model'
import { useStore } from 'effector-react/compat'
import { createEvent, createStore } from 'effector'
import findRoutesByConfig from '../lib/find-routes-by-config'
import { BrowserStorageKey } from '@shared/constants/browser-storage-key'

export interface Menu {
    allRoutes: IRoutes | null
    visibleRoutes: IRoutes | null
    leftsideBarRoutes: IRoutes | null
    homeRoutes: IRoutes | null
    currentPage: IRoute | null
    isOpen: boolean
}

const DEFAULT_HOME_CONFIG = ['settings', 'profile', 'chat', 'schedule', 'payments', 'project-activity', 'all-students']

export const DEFAULT_STUDENT_MOBILE_CONFIG = ['home', 'schedule', 'acad-performance', 'all', 'profile']
export const DEFAULT_PPS_MOBILE_CONFIG = ['home', 'schedule', 'alerts', 'all', 'profile']
export const DEFAULT_STAFF_MOBILE_CONFIG = ['home', 'doclist', 'alerts', 'all', 'profile']

const getLeftsideBarConfig = (user: User | null): MenuType => {
    if (!user) return []

    const localSettings = JSON.parse(localStorage.getItem(BrowserStorageKey.NewSettings) || '{}') as SettingsType
    const settingsMenuData =
        (localSettings[user.id]?.['settings-customize-menu']?.property.pages as unknown as string[]) ??
        REQUIRED_LEFTSIDE_BAR_CONFIG

    const uniqueRequiredTeacherMenuItems = REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG.filter(
        (item) => !settingsMenuData.includes(item),
    )

    const settingsDataToBeSet =
        user?.user_status === 'staff' && settingsMenuData.some((item) => !uniqueRequiredTeacherMenuItems.includes(item))
            ? [...settingsMenuData, ...uniqueRequiredTeacherMenuItems]
            : settingsMenuData

    return settingsDataToBeSet
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
const defineMenu = createEvent<{ user: User | null; adminLinks: AdminLinks | null; homeRoutes?: string[] }>()
const changeNotifications = createEvent<{ page: string; notifications: ((prev: number) => number) | number }>()

const getNewNotifications = (page: string, notifications: number, routes: IRoutes | null) => {
    const newRoutes = { ...routes }
    if (!!newRoutes[page]) newRoutes[page].notifications = notifications
    else return null

    return newRoutes
}

const filterTeachersPrivateRoutes = (adminLinks: AdminLinks | null): IRoutes => {
    if (!adminLinks) {
        return teachersPrivateRoutes()
    }

    const { accepts, agreements, checkdata, studLogins } = adminLinks

    const hasAdminLinks = !!accepts.length || !!agreements.length || !!checkdata.length || !!studLogins?.length

    const adminRoute = 'download-agreements'

    const filteredRoutes = Object.entries(teachersPrivateRoutes()).filter(
        ([key]) => key !== adminRoute || (key === adminRoute && hasAdminLinks),
    )

    return Object.fromEntries(filteredRoutes)
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
    .on(defineMenu, (oldData, { user, adminLinks, homeRoutes }) => ({
        ...oldData,
        currentPage:
            user?.user_status === 'staff'
                ? filterTeachersPrivateRoutes(adminLinks)[window.location.hash.slice(2, window.location.hash.length)]
                : privateRoutes()[window.location.hash.slice(2, window.location.hash.length)],
        allRoutes:
            user?.user_status === 'staff'
                ? { ...filterTeachersPrivateRoutes(adminLinks), ...teachersHiddenRoutes() }
                : { ...privateRoutes(), ...hiddenRoutes(user) },
        visibleRoutes: user?.user_status === 'staff' ? filterTeachersPrivateRoutes(adminLinks) : privateRoutes(),
        leftsideBarRoutes: findRoutesByConfig(
            getLeftsideBarConfig(user),
            user?.user_status === 'staff' ? filterTeachersPrivateRoutes(adminLinks) : privateRoutes(),
        ),
        homeRoutes: findRoutesByConfig(
            homeRoutes ??
                (JSON.parse(
                    localStorage.getItem(BrowserStorageKey.HomeRoutes) ?? JSON.stringify(DEFAULT_HOME_CONFIG),
                ) as string[]),
            user?.user_status === 'staff'
                ? { ...filterTeachersPrivateRoutes(adminLinks), ...teachersHiddenRoutes() }
                : { ...privateRoutes(), ...hiddenRoutes(user) },
        ),
    }))
    .on(changeNotifications, (oldData, { page, notifications }) => ({
        ...oldData,
        visibleRoutes: getNewNotifications(
            page,
            typeof notifications === 'number'
                ? notifications
                : notifications(oldData.visibleRoutes?.[page].notifications ?? 0),
            oldData.visibleRoutes,
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
