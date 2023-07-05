import React from 'react'
import { BiRuble } from 'react-icons/bi'
import styled from 'styled-components'
import { Size } from '../types'

const RubleNumberStyled = styled.div<{ fontSize: string; iconSize: string; fontWeight?: string }>`
    display: flex;
    align-items: center;
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
    color: ${({ color }) => color};

    svg {
        width: ${({ iconSize }) => iconSize};
        max-width: ${({ iconSize }) => iconSize};
        height: ${({ iconSize }) => iconSize};
        min-width: ${({ iconSize }) => iconSize};
        margin: 0;
        stroke-width: 0.2;
    }
`

type Props = {
    children: ChildrenType
    color?: string
    size?: Size
    fontWeight?: string
}

const RubleNumber = ({ children, size, color, fontWeight }: Props) => {
    const fontSize = size === 'small' ? '1rem' : size === 'big' ? '1.5rem' : '1.2rem'
    const iconSize = size === 'small' ? '17px' : size === 'big' ? '22px' : '18px'
    return (
        <RubleNumberStyled color={color} fontSize={fontSize} iconSize={iconSize} fontWeight={fontWeight}>
            {children}
            <BiRuble />
        </RubleNumberStyled>
    )
}

export default RubleNumber
