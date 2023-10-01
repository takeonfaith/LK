import Flex from '@shared/ui/flex'
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: grid;
    width: 100%;
`

export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    justify-content: flex-end;
`

export const FiltersWrapper = styled(Flex)`
    gap: 8px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
