import styled from 'styled-components'

const BasicBlock = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: var(--search2);
    border-radius: var(--brSemi);
    padding: 30px;
    height: 400px;
    color: var(--text);

    @media (max-width: 1000px) {
        height: auto;
        padding: 20px;
    }
`

export default BasicBlock
