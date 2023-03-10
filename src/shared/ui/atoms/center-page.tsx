import styled from 'styled-components'

const CenterPage = styled.div<{ background?: string; alignItems?: string; padding?: string; height?: string }>`
    display: flex;
    align-items: ${({ alignItems }) => alignItems ?? 'center'};
    justify-content: center;
    height: ${({ height }) => height ?? 'auto'};
    color: var(--text);
    background: ${({ background }) => background};
    padding: ${({ padding }) => padding};
    width: 100%;
`

export default CenterPage
