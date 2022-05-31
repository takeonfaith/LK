import styled from 'styled-components'

const Subtext = styled.span<{ width?: string }>`
    width: ${({ width }) => width ?? 'fit-content'};
    font-size: 0.8em;
    font-weight: 500;
    opacity: 0.7;
`

export default Subtext
