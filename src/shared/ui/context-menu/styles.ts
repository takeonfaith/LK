import styled from 'styled-components'

export const ContextMenuWrapper = styled.div<{ isVisible: boolean }>`
    height: fit-content;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    transform: ${({ isVisible }) => (isVisible ? 'translateY(0px)' : 'translateY(20px)')};
    position: absolute;
    width: 250px;
    right: 0;
    top: calc(100% + 10px);
    background: var(--schedule);
    border-radius: var(--brLight);
    box-shadow: 0 0 20px #0000003b;
    transition: 0.2s height, 0.2s opacity, 0.2s visibility, 0.2s transform;
    z-index: 200;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 500px) {
        width: calc(100vw - 20px);
    }
`
