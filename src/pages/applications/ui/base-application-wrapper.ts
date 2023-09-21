import styled from 'styled-components'

const BaseApplicationWrapper = styled.div<{ isDone: boolean }>`
    display: flex;
    align-items: ${({ isDone }) => (isDone ? 'center' : 'flex-start')};
    justify-content: center;
    width: 100%;
    max-height: ${({ isDone }) => isDone && '100%'};
    padding: 10px;
    color: var(--text);

    @media (max-width: 1000px) {
        margin-top: 35px;
    }
`
export default BaseApplicationWrapper
