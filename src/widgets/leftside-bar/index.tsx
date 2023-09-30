import { HOME_ROUTE } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import GlobalAppSearch from '@features/global-app-search'
import ThemeToggle from '@features/theme-toggle'
import { Logo } from '@ui/logo'
import useResize from '@utils/hooks/use-resize'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import UserBig from 'widgets/user-big'
import { CloseMenuButton, LeftsideBarList, LeftsideBarWrapper } from './ui'

const LeftsideBar = () => {
    const { isOpen } = menuModel.selectors.useMenu()
    const { width, height } = useResize()
    const {
        data: { user },
    } = userModel.selectors.useUser()

    const { visibleRoutes } = menuModel.selectors.useMenu()
    const location = useLocation()

    return (
        <LeftsideBarWrapper isOpen={isOpen} height={height}>
            <div className="top-wrapper">
                <Link to={HOME_ROUTE}>
                    <Logo width="165px" />
                </Link>
                <UserBig
                    notifications={visibleRoutes?.profile.notifications}
                    avatar={user?.avatar}
                    name={user?.fullName ?? ''}
                    loading={!user}
                    selected={location.pathname === '/profile'}
                />
                <GlobalAppSearch size="small" />
                <LeftsideBarList />
            </div>
            <ThemeToggle type="toggle" />
            {width < 1000 && <CloseMenuButton />}
        </LeftsideBarWrapper>
    )
}

export default LeftsideBar
