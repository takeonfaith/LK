import { useStore } from 'effector-react/compat'
import { createEvent, createStore } from 'effector/compat'
import { createEffect } from 'effector'
import { IDefaultSettings } from '@consts'
import getDefaultSettings from '../lib/get-default-settings'

export enum NameSettings {
    'settings-home-page' = 'settings-home-page',
    'settings-personal' = 'settings-personal',
    'settings-appearance' = 'settings-appearance',
    'settings-security' = 'settings-security',
}

export type Param = {
    [key in NameSettings]: {
        id: string
        property: IDefaultSettings
    }
}

export type SettingsType = {
    [key: string]: Param
}

interface SettingsStore {
    settings: SettingsType
    error: string | null
    completed: boolean
}

const DEFAULT_STORE: SettingsStore = {
    settings: getDefaultSettings(),
    error: null,
    completed: false,
}

let currentUser: string

const useSettings = () => {
    return {
        settings: useStore($settingsStore).settings[currentUser],
        error: useStore($settingsStore).error,
        completed: useStore($settingsStore).completed,
    }
}

const getLocalSettingsFx = createEffect((userId: string): Param => {
    currentUser = userId
    const localSettings = JSON.parse(localStorage.getItem('new-settings') ?? '{}')[currentUser]
    return localSettings ?? getDefaultSettings(userId)[userId]
})

const updateSettingFx = createEffect(
    ({
        nameSettings,
        nameParam,
        value,
    }: {
        nameSettings: keyof typeof NameSettings
        nameParam: string
        value: string | boolean
    }): Param => {
        const newParam = {
            ...useSettings().settings[nameSettings].property,
            [nameParam]: value,
        }
        return getDefaultSettings(currentUser)[currentUser] ?? newParam
    },
)

const filterSettings = (oldSettings: Param, nameParam: NameSettings) => {
    delete oldSettings[nameParam]
    return oldSettings
}

const changeCompleted = createEvent<{ completed: boolean }>()

const clearStore = createEvent()

const deleteElement = createEvent<{ nameElement: NameSettings }>()

const $settingsStore = createStore<SettingsStore>(DEFAULT_STORE)
    .on(changeCompleted, (oldData, newData) => ({
        ...oldData,
        completed: newData.completed,
    }))
    .on(getLocalSettingsFx.doneData, (oldData, newData) => ({
        ...oldData,
        settings: {
            ...oldData.settings,
            [currentUser]: newData,
        },
    }))
    .on(deleteElement, (oldData, { nameElement }) => ({
        ...oldData,
        settings: {
            ...oldData.settings,
            [currentUser]: filterSettings(oldData.settings[currentUser], nameElement),
        },
    }))
    .on(updateSettingFx.doneData, (oldData, newData) => ({
        ...oldData,
        settings: {
            ...oldData.settings,
            [currentUser]: newData,
        },
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

$settingsStore.watch((state) => {
    if (state !== DEFAULT_STORE && !!currentUser) {
        const allSettings = JSON.parse(localStorage.getItem('new-settings') ?? JSON.stringify({}))
        allSettings[currentUser] = state.settings[currentUser]
        localStorage.setItem('new-settings', JSON.stringify(allSettings))
    }
})

export const selectors = {
    useSettings,
}

export const events = {
    deleteElement,
    changeCompleted,
    clearStore,
}

export const effects = {
    getLocalSettingsFx,
    updateSettingFx,
}
