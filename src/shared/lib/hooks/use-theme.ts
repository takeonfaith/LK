import { settingsModel } from '@entities/settings'
import { useCallback, useLayoutEffect, useState } from 'react'
const useTheme = () => {
    const { settings } = settingsModel.selectors.useSettings()
    const appearanceSettings = settings?.['settings-appearance']

    const [theme, setTheme] = useState<string>(
        (settings?.['settings-appearance']?.property?.theme as string) ?? 'light',
    )

    useLayoutEffect(() => {
        if (settings) {
            const currentTime = new Date().getHours() * 60 + new Date().getMinutes()
            const timeRange = (appearanceSettings.property.lightThemeRange as [string, string]) ?? 0
            const isTimeInInterval = currentTime > +timeRange[0] && currentTime < +timeRange[1]

            const currentTheme = appearanceSettings.property.scheduledLightTheme
                ? isTimeInInterval
                    ? 'light'
                    : 'dark'
                : (appearanceSettings.property['theme'] as string)
            if (!document.documentElement.getAttribute('data-theme')) {
                setTheme(currentTheme)
                document.documentElement.setAttribute('data-theme', currentTheme)
            } else {
                setTheme(currentTheme)
                document.documentElement.setAttribute('data-theme', currentTheme)
            }
        } else {
            document.documentElement.setAttribute('data-theme', 'light')
        }
    }, [settings])

    const switchTheme = useCallback((state: boolean) => {
        setTheme(() => {
            const newTheme = state ? 'dark' : 'light'

            document.documentElement.setAttribute('data-theme', newTheme)
            settingsModel.events.updateSetting({
                nameSettings: 'settings-appearance',
                nameParam: 'theme',
                value: newTheme,
            })

            return newTheme
        })
    }, [])

    return { theme, switchTheme }
}

export default useTheme
