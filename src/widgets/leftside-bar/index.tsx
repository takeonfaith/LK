import React from 'react'
import { IRoute, privateRoutes } from '@app/routes/routes'
import { menuModel } from '@entities/menu'
import CloseMenuButton from 'widgets/leftside-bar/ui/molecules/close-menu-button'
import LeftsideBarList from 'widgets/leftside-bar/ui/organisms/leftside-bar-list'
import useResize from '@utils/hooks/use-resize'
import LeftsideBarWrapper from '@ui/atoms/leftside-bar-wrapper'
import Logo from '@ui/atoms/logo'
import LocalSearch from '@ui/molecules/local-search'

const LeftsideBar = () => {
    const { isOpen } = menuModel.selectors.useMenu()
    const { width } = useResize()

    return (
        <LeftsideBarWrapper isOpen={isOpen}>
            <div className="top-wrapper">
                <Logo />
                <LocalSearch
                    whereToSearch={[Object.values(privateRoutes).map((el: IRoute) => el.title)]}
                    setResult={() => null}
                    searchEngine={() => []}
                />
                <LeftsideBarList />
            </div>
            {width < 1000 && <CloseMenuButton />}
        </LeftsideBarWrapper>
    )
}

export default LeftsideBar
