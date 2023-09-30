import React from 'react'
import { SideMenuContent } from './side-menu-content'
import { SideMenuStyled } from './styles'
import { SideMenuProps } from './types'

export const SideMenu = (props: SideMenuProps) => {
    return (
        <SideMenuStyled isSideMenuOpen={props.isSideMenuOpen}>
            <SideMenuContent {...props} />
        </SideMenuStyled>
    )
}
