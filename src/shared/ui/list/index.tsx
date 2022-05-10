import { Direction } from '@ui/types'
import styled from 'styled-components'

const List = styled.div<{ direction?: Direction; width?: string; gap?: string }>`
    display: flex;
    flex-direction: ${({ direction }) => (direction ?? 'vertical') === 'vertical' && 'column'};
    align-items: center;
    justify-content: flex-start;
    gap: ${({ gap }) => gap ?? '5px'};
    width: ${({ width }) => width ?? '100%'};
    min-width: ${({ width }) => width ?? '100%'};
    color: var(--text);
`

export default List
