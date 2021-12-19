import styled from 'styled-components'

export const MoreInfoLink = styled.div`
    cursor: pointer;
    margin-top: 8px;
    font-weight: 600;

    display: flex;

    & > svg {
        color: var(--blue);
        /* filter: brightness(1.2); */
    }

    & > span {
        margin-left: 5px;
        color: var(--blue);
        filter: brightness(1.2);
    }

    @media (max-width: 1000px) {
        & > svg {
            width: 13px;
            height: 13px;
        }
    }
`

export const MoreInfoContent = styled.div`
    width: 700px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @media (max-width: 1000px) {
        width: 100%;
    }
`

export const Description = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-evenly;

    @media (max-width: 1000px) {
        & .short-status p:nth-child(2) {
            display: none;
        }
        h2 {
            font-size: 0.9em;
            margin-bottom: 5px;
        }

        .short-status {
            font-size: 0.8em;
        }
    }
`
