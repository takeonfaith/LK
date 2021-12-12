import React, { useState } from 'react'
import useTheme from '@utils/hooks/use-theme'
import ToggleArea, { ToggleItem } from '@ui/organisms/toggle-area'

const Appearance = () => {
    const { theme, switchTheme } = useTheme()
    const [toggles, setToggles] = useState<ToggleItem[]>([
        {
            title: 'Темная тема',
            state: theme !== 'light',
            action: (state: boolean) => switchTheme(state),
        },
    ])

    return <ToggleArea title={'Тема'} toggles={toggles} setToggles={setToggles} />
}

export default React.memo(Appearance)
