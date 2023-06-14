import { IconWrapper } from '@pages/profile/ui/top/styles'
import { Colors } from '@shared/consts'
import useTheme from '@shared/lib/hooks/use-theme'
import { Button } from '@shared/ui/button'
import ToggleArea, { ToggleItem } from '@shared/ui/organisms/toggle-area'
import React, { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

type Props = {
    type: 'toggle' | 'h-button' | 'v-button'
    onClick?: () => void
}

const ThemeToggle = ({ type, onClick }: Props) => {
    const { theme, switchTheme } = useTheme()
    const [isLight, setIsLight] = useState(theme === 'light')
    const icon = isLight ? <FiSun /> : <FiMoon />
    const themeWord = isLight ? 'Светлая' : 'Темная'
    const text = `Тема: ${themeWord}`

    const [toggles, setToggles] = useState<ToggleItem[]>([
        {
            title: 'Темная тема',
            state: theme !== 'light',
            action: (state: boolean) => switchTheme(state),
        },
    ])

    useEffect(() => {
        setToggles([
            {
                title: 'Темная тема',
                state: theme !== 'light',
                action: (state: boolean) => switchTheme(state),
            },
        ])
    }, [theme])

    useEffect(() => {
        setIsLight(theme === 'light')
    }, [theme])

    const changeTheme = () => {
        switchTheme(isLight)
        setIsLight((prev) => !prev)
        onClick?.()
    }

    if (type === 'toggle') return <ToggleArea title={''} toggles={toggles} setToggles={setToggles} />

    if (type === 'h-button') {
        return (
            <Button
                text={text}
                background="var(--schedule)"
                icon={icon}
                width="100%"
                align="left"
                onClick={changeTheme}
            />
        )
    }

    return (
        <Button
            padding="0"
            background={Colors.white.transparent2}
            icon={<IconWrapper background={Colors.green.main}>{icon}</IconWrapper>}
            onClick={changeTheme}
            text={text}
            width="calc(50% - 5px)"
            height="73px"
            direction="vertical"
            shrinkTextInMobile
        />
    )
}

export default ThemeToggle
