import { confirmModel } from '@entities/confirm'
import { userModel } from '@entities/user'
import { Button, LinkButton } from '@ui/atoms'
import Divider from '@ui/atoms/divider'
import ToggleArea, { ToggleItem } from '@ui/organisms/toggle-area'
import useTheme from '@utils/hooks/use-theme'
import React, { useEffect, useState } from 'react'
import { FiArrowLeftCircle, FiLogOut } from 'react-icons/fi'
import SettingsButton from './settings-button'

const HeaderContextMenu = () => {
    const logout = userModel.events.logout
    const { theme, switchTheme } = useTheme()
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

    return (
        <>
            <ToggleArea title={''} toggles={toggles} setToggles={setToggles} />
            <SettingsButton />
            <LinkButton
                text={'Cтарый дизайн'}
                onClick={() => {
                    localStorage.setItem('useOldVersion', 'true')
                }}
                background="var(--schedule)"
                icon={<FiArrowLeftCircle />}
                width="100%"
                align="left"
                href="https://e.mospolytech.ru/old/index.php"
            />
            <Divider />
            <Button
                align="left"
                icon={<FiLogOut />}
                onClick={() =>
                    confirmModel.events.evokeConfirm({
                        message: 'Вы точно хотите выйти из аккаунта?',
                        onConfirm: logout,
                    })
                }
                text="Выйти"
                width="100%"
                background="var(--schedule)"
            />
        </>
    )
}

export default HeaderContextMenu
