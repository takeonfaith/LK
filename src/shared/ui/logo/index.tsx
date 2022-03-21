import { HOME_ROUTE } from '@app/routes/routes'
import React from 'react'
import LogoPicture from '../../images/logo.png'
import { LogoWrapper } from './styles'

export function Logo() {
    return (
        <LogoWrapper to={HOME_ROUTE}>
            <img src={LogoPicture} alt="Logo" />
        </LogoWrapper>
    )
}
