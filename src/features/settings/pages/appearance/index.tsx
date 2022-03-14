import React, { useEffect, useState } from 'react'
import useTheme from '@utils/hooks/use-theme'
import ToggleArea, { ToggleItem } from '@ui/organisms/toggle-area'

const Appearance = () => {
    const { theme, switchTheme } = useTheme()
    const [toggles, setToggles] = useState<ToggleItem[]>([])

    useEffect(() => {
        setToggles([
            {
                title: 'Темная тема',
                state: theme !== 'light',
                action: (state: boolean) => switchTheme(state),
            },
            // {
            //     title: 'Включать темную тему вечером',
            //     state: false,
            //     action: (state) => !state,
            // },
        ])
    }, [theme])

    return <ToggleArea title={'Тема'} toggles={toggles} setToggles={setToggles} />
}

export default React.memo(Appearance)
