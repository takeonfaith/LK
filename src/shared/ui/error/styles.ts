import styled from 'styled-components'

export const ErrorContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text);

    img {
        min-width: 100px;
        height: 100px;
        margin-bottom: 20px;
    }

    .error-content {
        margin-top: 20px;
    }
`
