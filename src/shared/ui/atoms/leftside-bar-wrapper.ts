import styled from 'styled-components'

const LeftsideBarWrapper = styled.div<{ isOpen: boolean }>`
    min-width: 235px;
    width: 235px;
    height: 100%;
    box-shadow: var(--light-box-shadow);
    background: var(--theme);
    z-index: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 20px;
    align-items: center;
    box-sizing: border-box;
    padding: 20px 15px;
    transition: 0.2s transform, width 0.3s;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    transition: 0.2s left;

    .top-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 20px;
        align-items: center;
        max-height: 100%;
    }

    @media (max-width: 1000px) {
        position: absolute;
        left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
        width: 100%;
        font-size: 0.9em;

        .top-wrapper {
            max-height: calc(100% - 60px);

            img {
                width: 200px;
            }
        }
    }
`

export default LeftsideBarWrapper
