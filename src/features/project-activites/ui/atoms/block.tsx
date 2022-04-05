import styled from 'styled-components'
import { Direction } from '@ui/types'

const Block = styled.div<{ width?: string; maxWidth?: string; orientation?: Direction }>`
    background: var(--schedule);
    border-radius: var(--brSemi);
    flex-direction: ${({ orientation }) => (orientation === 'vertical' ? 'column' : 'row')};
    box-shadow: 0 0 32px rgb(0 0 0 / 8%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    height: 330px;
    max-width: ${({ maxWidth }) => maxWidth ?? '750px'};
    width: ${({ width }) => width ?? '100%'};
    color: var(--text);

    .list {
        width: 100%;
        display: flex;
        height: 100%;
        flex-direction: column;
        overflow-y: auto;
    }
`

export default Block
