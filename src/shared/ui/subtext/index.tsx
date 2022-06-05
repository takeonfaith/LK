import styled from 'styled-components'

const Subtext = styled.span<{ width?: string; visible?: boolean; fontSize?: string }>`
    width: ${({ width }) => width ?? 'fit-content'};
    font-size: ${({ fontSize }) => fontSize ?? '0.8em'};
    font-weight: 500;
    opacity: 0.7;
    display: ${({ visible }) => !(visible ?? true) && 'none'};
`

export default Subtext
