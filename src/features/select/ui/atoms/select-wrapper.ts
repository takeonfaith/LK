import styled from 'styled-components'

const SelectWrapper = styled.div`
    max-width: 155px;
    width: 50%;
    min-width: 50px;
    min-height: 36px;
    height: 36px;

    position: relative;
    user-select: none;
    font-weight: 599;
    white-space: nowrap;
    font-size: 0.9em;
    z-index: 0;

    color: var(--text);
    cursor: pointer;
    transition: 0.3s;
    z-index: 1;
    &:active {
        transform: translateY(3px);
    }
`

export default SelectWrapper
