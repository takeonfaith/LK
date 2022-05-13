import styled from 'styled-components'

const CenterPage = styled.div<{ background?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--text);
    background: ${({ background }) => background};
`

export default CenterPage
