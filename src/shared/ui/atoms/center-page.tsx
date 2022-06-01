import styled from 'styled-components'

const CenterPage = styled.div<{ alignItems?: string; padding?: string }>`
    display: flex;
    align-items: ${({ alignItems }) => alignItems ?? 'center'};
    justify-content: center;
    height: 100%;
    color: var(--text);
    padding: ${({ padding }) => padding};
`

export default CenterPage
