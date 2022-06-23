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

const getDefaultSettings = (userId = ''): SettingsType => {
    const settings = {
        [userId]: {
            ...generateDefaultSettings(),
            [NameSettings['settings-appearance']]: {
                id: NameSettings['settings-appearance'],
                property: {
                    theme: 'dark',
                },
            },
        },
    }

    return settings
}

export default getDefaultSettings
