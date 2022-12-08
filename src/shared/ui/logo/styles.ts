import styled from 'styled-components'

export const LogoWrapper = styled.div<{ width?: string }>`
    width: ${({ width }) => width ?? '100%'};
    height: fit-content;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 100%;
    }
`
