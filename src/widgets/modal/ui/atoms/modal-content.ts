import styled from 'styled-components'

const ModalContent = styled.div<{ isOpen: boolean; hasBack: boolean; hasTitle: boolean }>`
    background: var(--theme);
    color: var(--text);
    padding: 20px;
    min-height: 150px;
    max-height: 90vh;
    border-radius: var(--brLight);
    transition: 0.2s opacity, 0.2s transform;
    overflow: auto;

    & > .title-wrapper {
        margin-left: ${({ hasBack }) => (hasBack ? '15px' : '0px')};
        padding-right: 50px;
        white-space: break-spaces;
        max-width: 600px;
    }

    .close-button,
    .back-button {
        position: absolute;
        top: 14px;
    }

    .back-button {
        left: ${({ hasTitle }) => (hasTitle ? '4px' : '12px')};
    }

    .close-button {
        right: 20px;
        z-index: 100;
        padding: 8px;
        border-radius: 100%;
    }

    @media (max-width: 1000px) {
        font-size: 0.9em;
        padding-top: 15px;

        /* Swipe bar on top */
        /* 
        &::after {
            content: '';
            display: block;
            position: absolute;
            transform: translateX(-50%);
            left: 50%;
            top: 5px;
            background: var(--almostTransparentOpposite);
            width: 30px;
            height: 4px;
            border-radius: 10px;
        } */
    }

    @media (min-width: 801px) {
        transform: scale(${({ isOpen }) => (isOpen ? 1 : 0.95)});
    }

    @media (max-width: 800px) {
        padding: 15px;
        width: 100%;
        max-height: 80%;
        height: fit-content;
        bottom: 0;
        border-radius: 20px 20px 0 0;
        transform: ${({ isOpen }) => (isOpen ? `scale(1) translateY(0px)` : `scale(1) translateY(150px)`)};
        border-radius: var(--brLight);

        .close-button {
            right: 15px;
        }

        h3 {
            margin-top: 7px;
        }
    }
`

export default ModalContent
