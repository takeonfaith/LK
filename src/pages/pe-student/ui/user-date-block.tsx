import { Title } from '@shared/ui/title'
import styled from 'styled-components'

interface Props {
    keyStr: string
    value: string
}

export const UserDataBlock = ({ keyStr, value }: Props) => {
    return (
        <Wrapper>
            <Title size={3}>{keyStr}</Title>
            <Value>{value}</Value>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    border-radius: 4px;
    padding: 12px;
    background-color: var(--primary-background);

    flex: 1;
`

const Value = styled.span``
