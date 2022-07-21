import styled from 'styled-components'

const CenterPage = styled.div<{ background?: string; alignItems?: string; padding?: string }>`
    display: flex;
    align-items: ${({ alignItems }) => alignItems ?? 'center'};
    justify-content: center;
    height: auto;
    color: var(--text);
    background: ${({ background }) => background};
    padding: ${({ padding }) => padding};
`

export default CenterPage
