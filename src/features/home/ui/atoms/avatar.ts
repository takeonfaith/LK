import styled from 'styled-components'

export const Container = styled.div<{ width?: string; height?: string; marginRight?: string }>`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--almostTransparent);
    color: var(--text);

    svg {
        width: 40%;
        height: 40%;
    }

    width: ${({ width }) => width ?? '160px'};
    min-width: ${({ width }) => width ?? '160px'};
    height: ${({ height }) => height ?? '160px'};

    overflow: hidden;

    margin-right: ${({ marginRight }) => marginRight ?? '32px'};

    @media (max-width: 1000px) {
        width: ${({ width }) => width ?? '75px'};
        min-width: ${({ width }) => width ?? '75px'};
        height: ${({ height }) => height ?? '75px'};
        margin-right: ${({ marginRight }) => marginRight ?? '15px'};
    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
`
