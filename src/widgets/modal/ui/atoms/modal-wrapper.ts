import { Colors } from '@consts'
import styled from 'styled-components'

const ModalWrapper = styled.div<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transition: 0.2s opacity, 0.2s visibility;

    @media (max-width: 800px) {
        align-items: flex-end;
    }

    .close-button {
        position: absolute;
        /*top: 12px;
        right: 20px;
        padding: 8px;
        */
        z-index: 100;

        &:hover {
            filter: brightness(0.8);
            background: ${Colors.grey.transparentAF};
        }
    }
`

export default ModalWrapper
