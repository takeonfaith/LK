import styled from 'styled-components'

const ModalContent = styled.div<{ isOpen: number; isMouseDown: boolean }>`
    background: var(--theme);
    color: var(--text);
    padding: 20px;
    min-height: 150px;
    max-height: 90vh;
    border-radius: var(--brSemi);
    transition: 0.2s opacity, 0.2s transform;
    overflow: hidden;

    @media (max-width: 1000px) {
        font-size: 0.9em;
        padding-top: 15px;

        /* Swipe bar on top */

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
        }
    }

    @media (min-width: 801px) {
        transform: scale(${({ isOpen }) => (isOpen ? 1 : 0.95)});
    }

    @media (max-width: 800px) {
        max-height: 100vh;
        padding: 10px;
        padding-top: 15px;
        transition: ${({ isMouseDown }) => (isMouseDown ? '0s' : '0.3s')};
        height: ${({ isOpen }) => (isOpen <= 1 ? '80%' : '100%')};
        width: 100%;
        border-radius: ${({ isOpen }) => (isOpen === 1 ? '14px 14px 0 0' : '0')};
    }
`

export default ModalContent
