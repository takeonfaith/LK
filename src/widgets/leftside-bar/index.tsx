import { IRoutes } from '@app/routes/general-routes'
import { privateRoutes } from '@app/routes/routes'
import { teachersPrivateRoutes } from '@app/routes/teachers-routes'
import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import { Logo } from '@ui/logo'
import useResize from '@utils/hooks/use-resize'
import React, { useState } from 'react'
import UserBig from 'widgets/user-big'
import { CloseMenuButton, LeftsideBarList, LeftsideBarWrapper } from './ui'

const LeftsideBar = () => {
    const { isOpen } = menuModel.selectors.useMenu()
    const { width, height } = useResize()
    const {
        data: { user },
    } = userModel.selectors.useUser()

    const currentRoute = !user?.subdivisions ? privateRoutes : teachersPrivateRoutes
    const [foundRoutes, setFoundRoutes] = useState<IRoutes | null>(null)

    return (
        <LeftsideBarWrapper isOpen={isOpen} height={height}>
            <div className="top-wrapper">
                <Logo />
                <UserBig name={user?.fullName ?? ''} loading={!user} />
                {/* <LocalSearch whereToSearch={currentRoute} setResult={setFoundRoutes} searchEngine={search} /> */}
                <LeftsideBarList searchList={foundRoutes} />
            </div>
            {width < 1000 && <CloseMenuButton />}
        </LeftsideBarWrapper>
    )
}

export default LeftsideBar
