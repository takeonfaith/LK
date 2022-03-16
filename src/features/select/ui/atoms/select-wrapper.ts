import styled from 'styled-components'

const SelectWrapper = styled.div<{ isOpen: boolean; isActive: boolean; width?: string }>`
    max-width: ${({ width }) => width ?? '155px'};
    width: 100%;
    min-width: 50px;
    min-height: 36px;

    position: relative;
    user-select: none;
    font-weight: 599;
    white-space: nowrap;
    font-size: 0.9em;
    z-index: ${({ isOpen }) => (isOpen ? 5 : 2)};
    opacity: ${({ isActive }) => !isActive && 0.7};
    pointer-events: ${({ isActive }) => !isActive && 'none'};

    color: var(--text);
    cursor: pointer;
    transition: 0.3s;

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
    &:active {
        transform: translateY(3px);
    }

    h5 {
        margin-bottom: 5px;

        .red-star {
            color: var(--red);
            margin-right: 5px;
        }
    }
`

export default SelectWrapper
