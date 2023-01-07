import styled from 'styled-components'

const HeaderWrapper = styled.header`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: var(--header-height);
    background: var(--theme);
    box-shadow: var(--header-box-shadow);
    z-index: 12;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;

    & > .buttons {
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
