import styled from 'styled-components'

const HeaderWrapper = styled.header<{ hidden?: boolean }>`
    width: 100%;
    height: var(--header-height);
    background: var(--theme);
    box-shadow: var(--header-box-shadow);
    z-index: 12;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;

    display: ${({ hidden = false }) => (hidden ? 'none' : 'flex')};

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
        min-width: 200px;

        button {
            margin-right: 8px;
            flex-shrink: 0;
        }

        .title-container {
            min-width: 200px;

            h3 {
                color: var(--text);
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }

    @media (max-width: 1000px) {
        padding: 0 10px;
    }
`

export default HeaderWrapper
