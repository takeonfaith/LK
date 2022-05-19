import styled from 'styled-components'

const LeftsideBarWrapper = styled.div<{ isOpen: boolean; height: number }>`
    min-width: 270px;
    width: 270px;
    height: ${({ height }) => height + 'px'};
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
    transition: 0.2s transform, width 0.3s, 0.2s left, 0.2 opacity;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

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
        transition: 0.2s left, 0.2s opacity;
        position: absolute;
        left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
        opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
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
