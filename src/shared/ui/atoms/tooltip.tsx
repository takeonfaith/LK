import React from 'react'
import styled from 'styled-components'

type Direction = 'up' | 'down' | 'left' | 'right'

const findPosition = (direction: Direction) => {
    switch (direction) {
        case 'up':
            return 'translate(0, -45px)'
        case 'down':
            return 'translate(0, 45px)'
        case 'left':
            return 'translate(-45px, 0)'

        case 'right':
            return 'translate(45px, 0)'
    }
}

const TooltipWrapper = styled.div<{ direction: Direction }>`
    position: relative;

    &:hover > div {
        transform: ${({ direction }) => findPosition(direction)};
        opacity: 1;
    }
`

const TooltipBox = styled.div`
    padding: 6px 10px;
    border-radius: var(--brLight);
    background: var(--search);
    color: var(--text);
    position: absolute;
    transform: translate(0, 0);
    transition: 0.2s;
    opacity: 0;
    font-size: 0.8em;
`

interface Props {
    children: React.ReactNode[] | React.ReactNode | string
    direction: Direction
    text: string
}

const Tooltip = ({ children, direction, text }: Props) => {
    return (
        <TooltipWrapper direction={direction}>
            <TooltipBox>{text}</TooltipBox>
            {children}
        </TooltipWrapper>
    )
}

export default Tooltip
