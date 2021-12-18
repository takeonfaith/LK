import styled from 'styled-components'

const ModalContent = styled.div<{ isOpen: boolean }>`
    background: var(--theme);
    color: var(--text);
    padding: 20px;
    min-height: 50vh;
    max-height: 90vh;
    border-radius: 29px;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transition: 0.2s opacity, 0.2s transform;
    overflow: hidden;

    @media (max-width: 1000px) {
        font-size: 0.9em;
    }

    @media (min-width: 801px) {
        transform: scale(${({ isOpen }) => (isOpen ? 1 : 0.95)});
    }

    @media (max-width: 800px) {
        padding: 10px;
        width: 100%;
        height: 80%;
        bottom: 0;
        border-radius: 20px 20px 0 0;
        transform: ${({ isOpen }) => (isOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(50px)')};
        border-radius: var(--brLight) var(--brLight) 0 0;
    }
`

export default ModalContent
