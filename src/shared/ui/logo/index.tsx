import { HOME_ROUTE } from '@app/routes/general-routes'
import React from 'react'
import LogoPicture from '../../images/logo.png'
import { LogoWrapper } from './styles'

interface Props {
    short?: boolean
}

export function Logo({ short = false }: Props) {
    return (
        <LogoWrapper to={HOME_ROUTE}>
            <img
                src={
                    !short
                        ? LogoPicture
                        : 'https://mospolytech.ru/local/templates/main/dist/img/logos/mospolytech-logo-white.png'
                }
                alt="Logo"
            />
        </LogoWrapper>
    )
}
