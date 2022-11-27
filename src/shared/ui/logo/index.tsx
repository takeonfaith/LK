import React from 'react'
import LogoPicture from '../../images/logo.png'
import LogoShort from '../../images/mospolytech-logo-white.png'
import { LogoWrapper } from './styles'

interface Props {
    short?: boolean
    width?: string
}

export function Logo({ width, short = false }: Props) {
    return (
        <LogoWrapper width={width}>
            <img src={!short ? LogoPicture : LogoShort} alt="Logo" />
        </LogoWrapper>
    )
}
