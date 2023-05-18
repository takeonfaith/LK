import { Direction } from '@ui/types'
import React from 'react'
import styled from 'styled-components'

interface Props {
    keyStr: string
    value: ChildrenType
    direction?: Direction
}

export const KeyValue = ({ keyStr, value, direction = 'horizontal' }: Props) => {
    return (
        <Line direction={direction}>
            <strong>{keyStr}:</strong>
            <span>{value}</span>
        </Line>
    )
}

const Line = styled.div<{ direction: Direction }>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ direction }) => direction === 'vertical' && 'column'};
    justify-content: flex-start;
    align-items: ${({ direction }) => (direction === 'vertical' ? 'flex-start' : 'center')};
    width: 100%;
    column-gap: 5px;
    row-gap: 5px;
    margin-top: 10px;
    color: var(--text);

    span {
        width: ${({ direction }) => (direction === 'vertical' ? '100%' : 'fit-content')};
    }
`
