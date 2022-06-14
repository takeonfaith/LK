import { useStore } from 'effector-react/compat'
import { createEvent, createStore } from 'effector/compat'
import { createEffect } from 'effector'

interface Param {
    name: string
    title: string
    property: string
}

let UR = ''

interface SettingsStore {
    settings: {
        [key: string]: Param[]
    }
    error: string | null
    completed: boolean
}

const DEFAULT_SETTINGS = (userId = '0') => {
    return {
        [userId]: [
            {
                name: 'settings-home-page',
                title: 'Домашний экран',
                property: '',
            },
            {
                name: 'settings-security',
                title: 'Безопасность',
                property: '',
            },
            {
                name: 'settings-appearance',
                title: 'Лялялялял',
                property: '',
            },
        ],
    }
}

const DEFAULT_STORE: SettingsStore = {
    settings: DEFAULT_SETTINGS(),
    error: null,
    completed: false,
}

const useSettings = () => {
    return {
        settings: useStore($settingsStore).settings[UR],
        error: useStore($settingsStore).error,
        completed: useStore($settingsStore).completed,
    }
}

const getLocalSettingsFx = createEffect(async (userId: string): Promise<Param[]> => {
    UR = userId
    const localSettings = JSON.parse(localStorage.getItem('new-settings') ?? '{}')[UR]
    return localSettings ?? DEFAULT_SETTINGS(userId)[userId]
})
const changeCompleted = createEvent<{ completed: boolean }>()

const clearStore = createEvent()

const deleteElement = createEvent<{ nameElement: string }>()

const $settingsStore = createStore<SettingsStore>(DEFAULT_STORE)
    .on(changeCompleted, (oldData, newData) => ({
        ...oldData,
        completed: newData.completed,
    }))
    .on(getLocalSettingsFx.doneData, (oldData, newData) => ({
        ...oldData,
        settings: {
            ...oldData.settings,
            [UR]: newData,
        },
    }))
    .on(deleteElement, (oldData, { nameElement }) => ({
        ...oldData,
        settings: {
            ...oldData.settings,
            [UR]: oldData.settings[UR].filter((item) => item.name !== nameElement),
        },
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

$settingsStore.watch((state) => {
    if (state !== DEFAULT_STORE && !!UR) {
        const allSettings = JSON.parse(localStorage.getItem('new-settings') ?? JSON.stringify({}))
        allSettings[UR] = state.settings[UR]
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
}
