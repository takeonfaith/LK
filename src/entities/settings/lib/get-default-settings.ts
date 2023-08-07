import { ThemeType, REQUIRED_LEFTSIDE_BAR_CONFIG } from '@shared/constants'
import { NameSettings, Param, SettingsType } from '../model'

const NOTIFICATIONS_DEFAULT_VALUE = {
    all: true,
    messages: true,
    newVersion: true,
    schedule: true,
    news: true,
    applications: true,
    doclist: true,
}

export type NotificationsSettingsType = typeof NOTIFICATIONS_DEFAULT_VALUE

const generateDefaultSettings = () => {
    return (Object.keys(NameSettings) as (keyof typeof NameSettings)[]).reduce((acc, el) => {
        acc[el] = {
            id: el,
            property: {},
        }
        return acc
    }, {} as Param)
}

const getDefaultSettings = (userId = ''): SettingsType => ({
    [userId]: {
        ...generateDefaultSettings(),
        [NameSettings['settings-appearance']]: {
            id: NameSettings['settings-appearance'],
            property: {
                theme: 'dark' as ThemeType,
                scheduledLightTheme: false,
                lightThemeRange: ['300', '1140'],
            },
        },
        [NameSettings['settings-home-page']]: {
            id: NameSettings['settings-home-page'],
            property: {
                pages: ['settings', 'profile', 'chat', 'schedule', 'payments', 'project-activity', 'all-students'],
                widgetSchedule: true,
                widgetPayment: true,
            },
        },
        [NameSettings['settings-customize-menu']]: {
            id: NameSettings['settings-customize-menu'],
            property: {
                pages: REQUIRED_LEFTSIDE_BAR_CONFIG,
            },
        },
        [NameSettings['settings-notifications']]: {
            id: NameSettings['settings-notifications'],
            property: NOTIFICATIONS_DEFAULT_VALUE,
        },
    },
})

export default getDefaultSettings
