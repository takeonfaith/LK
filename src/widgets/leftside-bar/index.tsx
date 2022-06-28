import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import { Logo } from '@ui/logo'
import ToggleArea, { ToggleItem } from '@ui/organisms/toggle-area'
import useResize from '@utils/hooks/use-resize'
import useTheme from '@utils/hooks/use-theme'
import React, { useEffect, useState } from 'react'
import UserBig from 'widgets/user-big'
import { CloseMenuButton, LeftsideBarList, LeftsideBarWrapper } from './ui'

const LeftsideBar = () => {
    const { isOpen } = menuModel.selectors.useMenu()
    const { width, height } = useResize()
    const {
        data: { user },
    } = userModel.selectors.useUser()

    const { visibleRoutes, currentPage } = menuModel.selectors.useMenu()

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
        <LeftsideBarWrapper isOpen={isOpen} height={height}>
            <div className="top-wrapper">
                <Logo />
                <UserBig
                    notifications={visibleRoutes?.profile.notifications}
                    avatar={user?.avatar}
                    name={user?.fullName ?? ''}
                    loading={!user}
                    selected={currentPage?.id === 'profile'}
                />
                {/* <LocalSearch whereToSearch={currentRoute} setResult={setFoundRoutes} searchEngine={search} /> */}
                <LeftsideBarList />
            </div>
            <ToggleArea title={''} toggles={toggles} setToggles={setToggles} />
            {width < 1000 && <CloseMenuButton />}
        </LeftsideBarWrapper>
    )
}

export default LeftsideBar
