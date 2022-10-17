import styled from 'styled-components'

const SelectItems = styled.ul<{ isOpen: boolean; itemsAmount: number; width?: string; title?: string }>`
    max-width: ${({ width }) => width ?? '155px'};
    width: 100%;
    min-width: 50px;
    min-height: 60px;
    /**
    *height: ${({ itemsAmount }) => itemsAmount * 30 + 'px'};
    */

    position: absolute;
    top: ${({ title }) => (!!title ? '80px' : '46px')};

    box-shadow: var(--light-box-shadow);
    border-radius: var(--brLight);
    background: var(--schedule);
    user-select: none;
    max-height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
    opacity: 0;

    transition: 0.2s opacity, 0.2s visibility, 0.2s top, height 0.3s;

    &.open {
        opacity: 1;
        visibility: visible;
        top: ${({ title }) => (!!title ? '60px' : '46px')};
    }

    &.close {
        opacity: 0;
        visibility: hidden;
        top: 36px;
    }
`

export default SelectItems
