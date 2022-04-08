import { Direction } from '@ui/types'
import styled from 'styled-components'

export interface StyledProps {
    width?: string
    maxWidth?: string
    orientation?: Direction
    gap?: string
    height?: string
}

const BlockWrapper = styled.div<StyledProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--schedule);
    border-radius: var(--brSemi);
    flex-direction: ${({ orientation }) => (orientation === 'vertical' ? 'column' : 'row')};
    box-shadow: var(--very-mild-shadow);
    padding: 20px;
    height: ${({ height }) => height ?? '330px'};
    max-width: ${({ maxWidth }) => maxWidth ?? '750px'};
    width: ${({ width }) => width ?? '100%'};
    color: var(--text);
    gap: ${({ gap }) => gap ?? '0'};

    .list {
        width: 100%;
        display: flex;
        height: 100%;
        flex-direction: column;
        overflow-y: auto;
        padding-right: 5px;
    }

    @media (max-width: 1600px) {
        max-width: 800px;
        width: 100%;
    }

    @media (max-width: 1225px) {
        height: auto;
    }

    @media (max-width: 550px) {
        /* height: auto; */
        max-height: 100%;
        flex-direction: column;
        gap: 1rem;
    }
`
export default BlockWrapper
