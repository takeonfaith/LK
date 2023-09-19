import styled from 'styled-components'

const SelectHeaderWrapper = styled.div<{ multiple: boolean; appearance: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 36px;

    padding: ${({ multiple }) => (multiple ? '5px 10px 5px 5px' : '5px 10px')};
    box-shadow: ${({ appearance }) => appearance && 'var(--content-block-shadow)'};
    position: relative;
    background: var(--content-block);
    border-radius: 6px;
    overflow: hidden;

    &:hover {
        filter: brightness(0.98);
    }
`

export default SelectHeaderWrapper
