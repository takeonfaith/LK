import useCurrentPage from '@utils/hooks/use-current-page'
import useResize from '@utils/hooks/use-resize'
import React from 'react'
import MenuButton from 'widgets/header/ui/molecules/menu-button'
import { HeaderWrapper, UserInfo } from './ui'

const Header = () => {
    const { width } = useResize()
    const { title } = useCurrentPage()
    return (
        <HeaderWrapper>
            <div className="header-button-and-title">
                {width <= 1000 && <MenuButton />}
                <h3>{title}</h3>
            </div>
            <UserInfo />
        </HeaderWrapper>
    )
}

export default React.memo(Header)
