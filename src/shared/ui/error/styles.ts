import styled from 'styled-components'

export const ErrorContainer = styled.div<{ size?: string }>`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text);

    .image {
        margin-bottom: 10px;
        img {
            min-width: ${({ size }) => size ?? '100px'};
            height: ${({ size }) => size ?? '100px'};
        }
    }

    .error-content {
        margin-top: 20px;
    }
`
