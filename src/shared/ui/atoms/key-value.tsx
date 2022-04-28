import { Direction } from '@ui/types'
import React from 'react'
import styled from 'styled-components'

const Line = styled.div<{ direction: Direction }>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ direction }) => direction === 'vertical' && 'column'};
    justify-content: flex-start;
    align-items: ${({ direction }) => (direction === 'vertical' ? 'flex-start' : 'center')};
    width: 100%;
    column-gap: 5px;
    margin-top: 10px;
`

interface Props {
    keyStr: string
    value: ChildrenType
    direction?: Direction
}

const KeyValue = ({ keyStr, value, direction = 'horizontal' }: Props) => {
    return (
        <Line direction={direction}>
            <b>{keyStr}:</b>
            <span>{value}</span>
        </Line>
    )
}

export default KeyValue
