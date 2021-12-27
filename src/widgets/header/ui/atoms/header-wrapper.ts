import styled from 'styled-components'

const HeaderWrapper = styled.header`
    width: 100%;
    height: 45px;
    background: var(--theme);
    box-shadow: var(--header-box-shadow);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;

    .buttons {
        display: flex;
        align-items: center;

        & > * + * {
            margin-left: 10px;
        }
    }

    .header-button-and-title {
        display: flex;
        align-items: center;

        button {
            margin-right: 8px;
        }

        h3 {
            color: var(--text);
        }
    }

    @media (max-width: 1000px) {
        padding: 0 10px;
    }
`

export default HeaderWrapper
