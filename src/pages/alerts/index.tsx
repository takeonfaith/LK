import React from 'react'
import Block from '@ui/block'
import { Message } from '@ui/message'
import Table from '@ui/table'
import getAlertsColumns from '@pages/alerts/lib/get-alerts-columns'
import { alertsModel } from '@entities/alerts'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { AlertModal } from '@pages/alerts/ui/atoms'
import { IndexedProperties } from '@utility-types/indexed-properties'

const Alerts = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
`

const AlertsPage = () => {
    const { data: alerts } = alertsModel.selectors.useAlerts()
    const { open } = useModal()
    const showAlertModal = (alert: IndexedProperties) => {
        open(<AlertModal alert={alert} />)
    }

    return (
        <Alerts>
            <Block gap="10px" orientation="vertical" justifyContent="none" height="100%">
                <Message
                    type="info"
                    title="На этой странице отображаются сообщения от администрации университета и портала"
                    width="100%"
                />
                <Table onRowClick={showAlertModal} columns={getAlertsColumns()} data={alerts} />
            </Block>
        </Alerts>
    )
}

export default AlertsPage
