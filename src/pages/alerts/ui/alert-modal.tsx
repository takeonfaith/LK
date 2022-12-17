import { Alert } from '@shared/api/model/alert'
import { Divider } from '@shared/ui/divider'
import { Title } from '@shared/ui/title'
import React from 'react'
import styled from 'styled-components'

interface Props {
    alert: Alert
}

const AlertModal: React.FC<Props> = ({ alert }) => {
    return (
        <Wrapper>
            <Title size={3}>{alert.title}</Title>
            <Divider />
            <div dangerouslySetInnerHTML={{ __html: alert.content }} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 1000px;
`

export default AlertModal
