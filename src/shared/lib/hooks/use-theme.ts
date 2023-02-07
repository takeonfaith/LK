import { settingsModel } from '@entities/settings'
import { useCallback, useEffect, useState } from 'react'
const useTheme = () => {
    const { settings } = settingsModel.selectors.useSettings()

    const [theme, setTheme] = useState<string>('light')

    useEffect(() => {
        if (settings) {
            const currentTheme = settings['settings-appearance'].property['theme'] as string
            if (!document.documentElement.getAttribute('data-theme')) {
                document.documentElement.setAttribute('data-theme', currentTheme)
                setTheme(currentTheme)
            } else {
                document.documentElement.setAttribute('data-theme', currentTheme)
                setTheme(currentTheme)
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
