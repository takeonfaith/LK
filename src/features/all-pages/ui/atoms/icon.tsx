import { Colors, IColors } from '@consts'
import React from 'react'
import styled from 'styled-components'

const IconWrapper = styled.div<{ color: string; size: number }>`
    min-width: ${({ size }) => size + 'px'};
    min-height: ${({ size }) => size + 'px'};
    max-width: ${({ size }) => size + 'px'};
    max-height: ${({ size }) => size + 'px'};
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ color }) => Colors[color as keyof IColors].main};
    transition: 0.2s;

    svg {
        color: #fff;
        width: ${({ size }) => size / 2 + 'px'};
        height: ${({ size }) => size / 2 + 'px'};
    }
`

interface Props {
    children: ChildrenType
    color: keyof IColors
    size?: number
}

const Icon = ({ children, color, size = 40 }: Props) => {
    return (
        <IconWrapper color={color} size={size} className="icon">
            {children}
        </IconWrapper>
    )
}

export default Icon
