import styled from 'styled-components'

export const Content = styled.div`
    /* display: flex;
	justify-content: center; */
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: var(--text);
    padding: var(--desktop-page-padding);

    .top {
        width: 100%;
        display: flex;
        align-items: center;

        .title-wrapper {
            width: fit-content;
        }

        .user {
            display: flex;
            align-items: center;
        }
    }

    .home-page-content-inner {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }

    @media (max-width: 1000px) {
        margin: 0;
        .top {
            justify-content: space-between;
        }
    }

    @media (max-width: 600px) {
        padding-top: 30px;
        padding: var(--mobile-page-padding);
    }
`
