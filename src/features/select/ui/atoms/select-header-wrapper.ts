import styled from 'styled-components'

const SelectHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    padding: 5px 10px;
    box-shadow: var(--light-box-shadow);
    position: relative;
    background: var(--search2);
    border-radius: var(--brLight);
    background: var(--search2);
    overflow: hidden;

    &:hover {
        filter: brightness(0.95);
    }
`

export default SelectHeaderWrapper
