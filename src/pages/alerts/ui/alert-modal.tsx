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
            <Title size={3} align="left">
                {alert.title}
            </Title>
            <Divider margin="8px 0" width="100%" />
            <div dangerouslySetInnerHTML={{ __html: alert.content }} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 600px;
`

export default AlertModal
