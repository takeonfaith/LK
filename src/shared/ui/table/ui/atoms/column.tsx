import { Align } from '@ui/types'
import styled from 'styled-components'

const Column = styled.div<{
    even?: boolean
    align?: Align | 'space-between'
    clickable?: boolean
    padding?: string
    width?: string
    overflow?: string
    showFull?: boolean
    onRowClick?: () => void
}>`
    width: ${({ width }) => width ?? '100%'};
    min-width: ${({ width }) => width ?? 'auto'};
    padding: ${({ padding }) => padding ?? '20px'};
    height: 100%;
    text-align: ${({ align }) => align && align};
    cursor: ${({ clickable }) => clickable && 'pointer'};
    overflow: ${({ overflow }) => overflow ?? 'hidden'};
    display: block;
    white-space: ${({ showFull }) => (showFull ? 'wrap' : 'nowrap')};
    text-overflow: ${({ showFull }) => (showFull ? 'clip' : 'ellipsis')};
    position: relative;

    @media (max-width: 700px) {
        padding: ${({ clickable }) => !clickable && '10px'};
    }
`

export default Column
