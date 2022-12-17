import { alertModel } from '@entities/alert'
import { Alert } from '@shared/api/model/alert'
import localizeDate from '@shared/lib/localize-date'
import Block from '@shared/ui/block'
import { Title } from '@shared/ui/title'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import AlertModal from './ui/alert-modal'

const AlertsPage = () => {
    const { alerts } = alertModel.selectors.useAlerts()

    const { open } = useModal()

    useEffect(() => {
        alertModel.events.load()
    }, [])

    const handleAlertClick = (alert: Alert) => {
        open(<AlertModal alert={alert} />)
    }

    return (
        <Wrapper>
            <Block height="fit-content">
                <Title size={2} align="left">
                    Оповещения
                </Title>
            </Block>
            {alerts.map((alert) => {
                return (
                    <Block
                        height="fit-content"
                        justifyContent="flex-start"
                        gap="10px"
                        style={{ cursor: 'pointer', overflow: 'auto' }}
                        key={alert.id}
                        onClick={() => handleAlertClick(alert)}
                    >
                        <Date>{localizeDate(alert.date, 'numeric')}</Date>
                        <AlertTitle>{alert.title}</AlertTitle>
                    </Block>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
`

const Date = styled.div``

const AlertTitle = styled.div``

export default AlertsPage
