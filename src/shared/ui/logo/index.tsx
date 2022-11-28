import React from 'react'
import LogoPicture from '../../images/logo.png'
import LogoShort from '../../images/mospolytech-logo-white.png'
import { LogoWrapper } from './styles'

interface Props {
    short?: boolean
    width?: string
    className?: string
}

export function Logo({ width, className, short = false }: Props) {
    return (
        <LogoWrapper width={width} className={className ?? 'logo'}>
            <img src={!short ? LogoPicture : LogoShort} alt="Logo" />
        </LogoWrapper>
    )
}
