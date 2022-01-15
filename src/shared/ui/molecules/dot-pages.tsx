import { Colors } from '@consts'
import React from 'react'
import styled from 'styled-components'

const DotPagesWrapper = styled.div<{ direction: 'horizontal' | 'vertical' }>`
    display: flex;
    align-items: center;
    padding: 5px;
    flex-direction: ${({ direction }) => direction === 'vertical' && 'column'};
    width: fit-content;

    .dot-page {
        width: 8px;
        height: 8px;
        background: var(--almostTransparentOpposite);
        margin: 3px;
        border-radius: 100%;

        &.current {
            background: ${Colors.blue.main};
        }
    }
`

interface Props {
    direction?: 'horizontal' | 'vertical'
    amount: number
    current: number
}

const DotPages = ({ amount, current, direction = 'horizontal' }: Props) => {
    return (
        <DotPagesWrapper direction={direction}>
            {Array(amount)
                .fill(0)
                .map((_, index) => {
                    return <span className={'dot-page ' + (current === index && 'current')} key={index} />
                })}
        </DotPagesWrapper>
    )
}

export default DotPages
