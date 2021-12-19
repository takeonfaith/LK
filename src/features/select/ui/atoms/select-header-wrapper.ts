import styled from 'styled-components'

const SelectHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    padding: 5px 10px;
    box-shadow: var(--light-box-shadow);
    position: relative;
    background: var(--schedule);
    border-radius: var(--brLight);
    overflow: hidden;

    &:hover {
        filter: brightness(0.95);
    }
`

export default SelectHeaderWrapper
