import styled from 'styled-components'
import { findPosition } from './lib/find-position'
import { Direction } from './types'

export const TooltipWrapper = styled.div<{ direction: Direction }>`
    position: relative;
    width: fit-content;
    height: fit-content;

    &:hover > div {
        transform: ${({ direction }) => findPosition(direction)};
        opacity: 1;
    }
`

export const TooltipBox = styled.div<{ width?: string }>`
    pointer-events: none;
    padding: 6px 10px;
    border-radius: var(--brLight);
    background: #000000b9;
    color: #fff;
    font-weight: bold;
    position: absolute;
    transform: translate(0, 0);
    transition: 0.2s;
    opacity: 0;
    font-size: 0.8em;
    text-align: center;
    max-width: ${({ width }) => width ?? 'fit-content'};
`
