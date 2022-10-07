import React from 'react'
import LogoPicture from '../../images/logo.png'
import LogoShort from '../../images/mospolytech-logo-white.png'
import { LogoWrapper } from './styles'

interface Props {
    short?: boolean
}

export function Logo({ short = false }: Props) {
    return (
        <LogoWrapper>
            <img src={!short ? LogoPicture : LogoShort} alt="Logo" />
        </LogoWrapper>
    )
}
