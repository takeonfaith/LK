import { Colors, IColors } from '@consts'
import React from 'react'
import styled from 'styled-components'

type ColorType = keyof IColors | Omit<string, keyof IColors>

const IconWrapper = styled.div<{ backgroud: ColorType; size: number; borderRadius?: string }>`
    min-width: ${({ size }) => size + 'px'};
    min-height: ${({ size }) => size + 'px'};
    max-width: ${({ size }) => size + 'px'};
    max-height: ${({ size }) => size + 'px'};
    border-radius: ${({ borderRadius }) => borderRadius ?? '15px'};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ backgroud }) =>
        Colors[backgroud as keyof IColors] ? Colors[backgroud as keyof IColors].main : (backgroud as string)};
    transition: 0.2s;

    svg {
        color: #fff;
        width: ${({ size }) => size / 2 + 'px'};
        height: ${({ size }) => size / 2 + 'px'};
    }
`

interface Props {
    children: ChildrenType
    color: ColorType
    size?: number
    borderRadius?: string
}

const Icon = ({ children, color, borderRadius, size = 38 }: Props) => {
    return (
        <IconWrapper borderRadius={borderRadius} backgroud={color} size={size} className="icon">
            {children}
        </IconWrapper>
    )
}

export default Icon
