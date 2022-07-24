import { Align } from '@ui/types'
import styled from 'styled-components'

const Subtext = styled.span<{ width?: string; maxWidth?: string; visible?: boolean; fontSize?: string; align?: Align }>`
    width: ${({ width }) => width ?? 'fit-content'};
    max-width: ${({ maxWidth }) => maxWidth ?? 'fit-content'};
    font-size: ${({ fontSize }) => fontSize ?? '0.8em'};
    font-weight: 500;
    opacity: 0.7;
    text-align: ${({ align }) => align ?? 'left'};
    display: ${({ visible }) => !(visible ?? true) && 'none'};
`

export default Subtext
