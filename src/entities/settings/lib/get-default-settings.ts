import { ThemeType, REQUIRED_LEFTSIDE_BAR_CONFIG } from '@consts'
import { NameSettings, Param, SettingsType } from '../model'

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
    },
})

export default getDefaultSettings
