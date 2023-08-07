import { Colors } from '@shared/constants'
import { Direction } from '@ui/types'
import React from 'react'
import styled from 'styled-components'

type StyledProps = {
    distance?: number
    filled?: number
    reached?: boolean
}

type HiddenProps = {
    direction: Direction
}

const LineWrapper = styled.div<StyledProps & HiddenProps>`
    min-width: ${({ direction, distance }) => (direction === 'vertical' ? '5px' : (distance ?? 100) + 'px')};
    background: var(--almostTransparentOpposite);
    border-radius: 10px;
    height: ${({ direction, distance }) => (direction === 'vertical' ? (distance ?? 100) + 'px' : '5px')};
    overflow: hidden;
    width: 100%;

    .inside-line {
        height: ${({ direction, filled }) => (direction === 'vertical' ? (filled ?? 100) + '%' : '5px')};
        border-radius: 10px;
        width: ${({ direction, filled }) => (direction === 'vertical' ? '100%' : (filled ?? 100) + '%')};
        background: ${({ reached }) => (reached ? Colors.green.main : 'none')};
    }
`

export type LineProps = StyledProps

const Line = ({ distance, filled, reached, direction }: LineProps & HiddenProps) => {
    return (
        <LineWrapper direction={direction} distance={distance} reached={reached} filled={filled}>
            <div className="inside-line" />
        </LineWrapper>
    )
}

export default Line
