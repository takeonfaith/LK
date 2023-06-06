import styled from 'styled-components'

export const ErrorContainer = styled.div<{ size?: string }>`
    width: 100%;
    height: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text);

    span {
        font-weight: 600;
    }

    .image {
        margin-bottom: 10px;
        img,
        & > svg {
            min-width: ${({ size }) => size ?? '100px'};
            height: ${({ size }) => size ?? '100px'};
        }

        & > svg {
            margin: 20px 0;
            opacity: 0.6;
        }
    }

    .error-content {
        margin-top: 20px;
    }
`
