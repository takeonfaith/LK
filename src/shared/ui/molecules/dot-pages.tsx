import { Colors, IColors } from '@shared/constants'
import List from '@ui/list'
import { Direction } from '@ui/types'
import React from 'react'
import styled from 'styled-components'

const Dot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 3px;
`

const DotPage = styled(Dot)`
    background: var(--almostTransparentOpposite);
`

const CurrentPage = styled(Dot)<{ current: number }>`
    transition: 0.2s;
    left: 0;
    position: absolute;
    background: ${({ color }) => Colors[(color as keyof IColors) ?? 'blue'].main};
    transform: ${({ current }) => `translateX(${current * 16}px)`};
`

interface Props {
    direction?: Direction
    amount: number
    current: number
    color?: keyof IColors
}

const DotPages = ({ amount, current, color, direction = 'horizontal' }: Props) => {
    if (amount <= 1) return null

    return (
        <List
            direction={direction}
            gap={2}
            width="fit-content"
            minWidth="fit-content"
            verticalAlign="center"
            horizontalAlign="center"
        >
            {Array(amount)
                .fill(0)
                .map((_, index) => {
                    return <DotPage key={index} />
                })}
            <CurrentPage color={color} current={current} />
        </List>
    )
}

export default DotPages
