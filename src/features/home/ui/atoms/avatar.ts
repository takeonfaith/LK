import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--almostTransparent);

    svg {
        width: 40%;
        height: 40%;
    }

    width: 160px;
    height: 160px;

    overflow: hidden;

    margin-right: 32px;

    @media (max-width: 1000px) {
        min-width: 75px;
        width: 75px;
        height: 75px;
        margin-right: 15px;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
`
