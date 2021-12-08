import styled from 'styled-components'

export const Content = styled.div`
    margin: 50px;
    /* display: flex;
	justify-content: center; */
    color: var(--text);

    .home-page-content-inner {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }

    @media (max-width: 1000px) {
        margin: 0;
    }
`
