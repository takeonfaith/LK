import { useStore } from 'effector-react/compat'
import { createEvent, createStore } from 'effector/compat'
import { createEffect } from 'effector'
import { ThemeType } from '@consts'
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
        property: {
            [key: string]: ThemeType | string[] | boolean
        }
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

const updateSetting = createEvent<{
    nameSettings: keyof typeof NameSettings
    nameParam: string
    value: string | boolean | string[]
}>()

const changeCompleted = createEvent<{ completed: boolean }>()

const clearStore = createEvent()

const $settingsStore = createStore<SettingsStore>(DEFAULT_STORE)
    .on(changeCompleted, (oldData, newData) => ({
        ...oldData,
        completed: newData.completed,
    }))
    .on(getLocalSettingsFx.doneData, (oldData, newData) => ({
        ...oldData,
        settings: {
            [currentUser]: newData,
        },
    }))
    .on(updateSetting, (oldData, { nameSettings, nameParam, value }) => ({
        ...oldData,
        settings: {
            [currentUser]: {
                ...oldData.settings[currentUser],
                [nameSettings]: {
                    ...oldData.settings[currentUser][nameSettings],
                    property: {
                        ...oldData.settings[currentUser][nameSettings].property,
                        [nameParam]: value,
                    },
                },
            },
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
    updateSetting,
    changeCompleted,
    clearStore,
}

export const effects = {
    getLocalSettingsFx,
}
