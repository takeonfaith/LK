import { Application } from '@api/model'
import { Title } from '@ui/atoms'
import KeyValue from '@ui/atoms/key-value'
import React from 'react'
import styled from 'styled-components'

const ApplicationModalWrapper = styled.div`
    @media (min-width: 1001px) {
        max-width: 600px;
    }
`

type Props = Application

const ApplicationModal = (props: Props) => {
    const { regDate, notes, regNumber, requestBody, requestTitle, status, statusDate, structuralSubdivision } = props

    return (
        <ApplicationModalWrapper>
            <Title size={2} align="left" bottomGap>
                Сведения о заявке
            </Title>
            <KeyValue keyStr="Запрос" value={requestTitle} />
            <KeyValue keyStr="Информация" value={requestBody} />
            <KeyValue keyStr="Номер запроса" value={regNumber} />
            <KeyValue keyStr="Дата запроса" value={regDate} />
            <KeyValue keyStr="Статус" value={status} />
            <KeyValue keyStr="Время обновления статуса" value={statusDate} />
            <KeyValue keyStr="Структурные подразделения" value={structuralSubdivision} />
            <KeyValue keyStr="Примечания" value={notes} />
        </ApplicationModalWrapper>
    )
}

export default ApplicationModal
