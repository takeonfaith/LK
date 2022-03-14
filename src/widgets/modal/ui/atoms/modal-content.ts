import { SpringValue } from 'react-spring'
import styled from 'styled-components'

const ModalContent = styled.div<{ isOpen: boolean; position: SpringValue<number> }>`
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
        padding: 10px;
        padding-top: 15px;

        width: 100%;
        height: 80%;
        bottom: 0;
        border-radius: 20px 20px 0 0;
        transform: ${({ isOpen, position }) =>
            isOpen ? `scale(1) translateY(${position}px)` : `scale(1) translateY(150px)`};
        border-radius: var(--brLight) var(--brLight) 0 0;
    }
`

export default ModalContent
