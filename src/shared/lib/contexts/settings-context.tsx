import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import {
    DEFAULT_SETTINGS,
    IDefaultSettings,
    MenuType,
    GeneralType,
    SETTINGS,
    ThemeType,
    REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG,
} from '@consts'
import useLocalStorage from '@utils/hooks/use-local-storage'
import React from 'react'
import { userModel } from '@entities/user'

interface IAllSettings {
    settings: IDefaultSettings
    update?: (newSettings: IDefaultSettings) => void
}

const Context = createContext<IAllSettings>({
    settings: DEFAULT_SETTINGS,
})

type SettingsKey = 'menu' | 'theme' | 'general' | 'shortCutLinks'

type SettingsType = MenuType | ThemeType | GeneralType

interface ISetting<T extends SettingsType> {
    setting: T
    change: (newSettings: T) => void
}

export const useSettings = <T extends SettingsType>(key: SettingsKey): ISetting<T> => {
    const { settings, update } = useContext(Context)

    const change = useCallback(
        (newSettings: T) => {
            settings[key] = newSettings

            update?.(settings)
        },
        [key, update, settings],
    )

    return { setting: settings[key] as T, change }
}

interface Props {
    children?: React.ReactNode
}

const SettingsProvider = ({ children }: Props) => {
    const { data } = userModel.selectors.useUser()
    const [settings, setSettings] = useState<IDefaultSettings>(DEFAULT_SETTINGS)
    const { get, set } = useLocalStorage()

    useEffect(() => {
        const settings = get(SETTINGS)

        if (!settings) {
            data?.user?.user_status === 'staff'
                ? set(SETTINGS, JSON.stringify((DEFAULT_SETTINGS.menu = REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG)))
                : set(SETTINGS, JSON.stringify(DEFAULT_SETTINGS))
        } else {
            setSettings(JSON.parse(settings))
        }
    }, [data?.user?.user_status])

    const update = useCallback(
        (newSettings: IDefaultSettings) => {
            set(SETTINGS, JSON.stringify(newSettings))

            setSettings({ ...newSettings })
        },
        [set, setSettings],
    )

    return <Context.Provider value={{ settings, update }}>{children}</Context.Provider>
}

export default SettingsProvider
