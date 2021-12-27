import { useCallback, useEffect, useState } from 'react'
import { useSettings } from '../contexts/settings-context'

const useTheme = () => {
    const { setting, change } = useSettings<string>('theme')

    const [theme, setTheme] = useState<string>('light')

    useEffect(() => {
        if (!setting) {
            if (!document.documentElement.getAttribute('data-theme')) {
                document.documentElement.setAttribute('data-theme', setting)
                setTheme(setting)
            }
        } else {
            document.documentElement.setAttribute('data-theme', setting)
            setTheme(setting)
        }
    }, [setting])

    const switchTheme = useCallback((state) => {
        setTheme(() => {
            const newTheme = state ? 'dark' : 'light'

            document.documentElement.setAttribute('data-theme', newTheme)
            change(newTheme)

            return newTheme
        })
    }, [])

    // console.log(document.documentElement.getAttribute('data-theme') ?? 'light')

    return { theme, switchTheme }
}

export default useTheme
