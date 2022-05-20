import styled from 'styled-components'

export const Container = styled.div<{
    selected?: boolean
    width?: string
    height?: string
    marginRight?: string
    background?: string
}>`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ background }) => background ?? 'var(--almostTransparent)'};
    color: var(--text);
    border: ${({ selected }) => selected && '5px solid var(--schedule)'};
    outline: ${({ selected }) => selected && '4px solid var(--reallyBlue)'};
    position: relative;

    svg {
        width: 40%;
        height: 40%;
    }

    width: ${({ width }) => width ?? '160px'};
    min-width: ${({ width }) => width ?? '160px'};
    height: ${({ height }) => height ?? '160px'};

    margin-right: ${({ marginRight }) => marginRight ?? '32px'};

    .name {
        display: flex;
        height: 100%;
        width: 100%;
        color: #fff;
        font-size: ${({ width }) => (width ? parseInt(width) / 50 + 'em' : '3em')};
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }

    @media (max-width: 1000px) {
        width: ${({ width }) => width ?? '75px'};
        min-width: ${({ width }) => width ?? '75px'};
        height: ${({ height }) => height ?? '75px'};
        margin-right: ${({ marginRight }) => marginRight ?? '15px'};

        .name {
            font-size: ${({ width }) => (width ? parseInt(width) / 50 + 'em' : '1.5em')};
        }
    }
`

export const Img = styled.img<{ round?: boolean }>`
    width: 100%;
    height: 100%;
    border-radius: ${({ round }) => round && '100%'};

    object-fit: cover;
    object-position: center;
`
