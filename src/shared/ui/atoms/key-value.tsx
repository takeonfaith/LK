import { Direction } from '@ui/types'
import React from 'react'
import styled from 'styled-components'

const Line = styled.div<{ direction: Direction; fontSize?: string }>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ direction }) => direction === 'vertical' && 'column'};
    justify-content: flex-start;
    align-items: ${({ direction }) => (direction === 'vertical' ? 'flex-start' : 'center')};
    width: 100%;
    column-gap: 5px;
    row-gap: 5px;
    margin-top: 10px;
    font-size: ${({ fontSize }) => fontSize};
    color: var(--text);

    span {
        width: ${({ direction }) => (direction === 'vertical' ? '100%' : 'fit-content')};
    }

    strong {
        font-weight: 600;
    }
`

interface Props {
    keyStr: string
    value: ChildrenType
    direction?: Direction
    fontSize?: string
    visible?: boolean
}

const KeyValue = ({ keyStr, value, fontSize, visible = true, direction = 'horizontal' }: Props) => {
    if (!visible) return null

    return (
        <Line direction={direction} fontSize={fontSize}>
            <strong>{keyStr}:</strong>
            <span>{value}</span>
        </Line>
    )
}

export default KeyValue
