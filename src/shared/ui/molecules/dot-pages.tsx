import { Colors } from '@consts'
import List from '@ui/list'
import { Direction } from '@ui/types'
import React from 'react'
import styled from 'styled-components'

const DotPage = styled.div<{ current: boolean }>`
    width: 8px;
    height: 8px;
    background: ${({ current }) => (current ? Colors.blue.main : 'var(--almostTransparentOpposite)')};
    margin: 3px;
    border-radius: 100%;
`

interface Props {
    direction?: Direction
    amount: number
    current: number
}

const DotPages = ({ amount, current, direction = 'horizontal' }: Props) => {
    if (amount <= 1) return null

    return (
        <List direction={direction} gap={2} width="100%" horizontalAlign="center">
            {Array(amount)
                .fill(0)
                .map((_, index) => {
                    return <DotPage current={current === index} key={index} />
                })}
        </List>
    )
}

export default DotPages
