import styled from 'styled-components'

export const SideMenuStyled = styled.div`
    width: 320px;
    background: var(--schedule);
    height: calc(100% - 85px);
    display: flex;
    z-index: 10;
    padding: 16px;
    flex-direction: column;
    overflow-y: auto;
    border-radius: var(--brLight);
    box-shadow: var(--very-mild-shadow);
    position: absolute;
`
