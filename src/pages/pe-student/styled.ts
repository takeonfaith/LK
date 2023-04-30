import Table from '@shared/ui/table'
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 12px;
    width: 100%;
    height: 100%;

    color: var(--text);
`

export const UserData = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: row;
`

export const Visits = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
`

export const StyledTable = styled(Table)`
    flex: 1;
`
