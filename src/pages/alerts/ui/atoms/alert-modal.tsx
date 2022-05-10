import React from 'react'
import styled from 'styled-components'
import { Title } from '@ui/title'
import { IndexedProperties } from '@utility-types/indexed-properties'
import localizeDate from '@utils/localize-date'

const DateAlert = styled.div`
    font-size: 0.8em;
`

const AlertModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 70vw;
    max-width: 1300px;
`

const ContentAlert = styled.p`
    padding-top: 10px;
    margin-top: 5px;
    border-top: 1px solid gray;
    white-space: pre-line;
    overflow: auto;
    height: 70vh;
`
interface Props {
    alert: IndexedProperties
}

const AlertModal = ({ alert }: Props) => {
    const { dateAlert, topicAlert, contentAlert } = alert
    return (
        <AlertModalWrapper>
            <DateAlert> {localizeDate(dateAlert)} </DateAlert>
            <Title size={4} align="left">
                {topicAlert}
            </Title>
            <ContentAlert>{contentAlert}</ContentAlert>
        </AlertModalWrapper>
    )
}

export default AlertModal
