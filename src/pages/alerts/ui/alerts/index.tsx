import { PreparedAlert } from '@entities/alert/lib/prepare-data'
import { Alert } from '@shared/api/model/alert'
import List from '@shared/ui/list'
import React from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import AlertItem from '../alert-item'
import AlertModal from '../alert-modal'
import Collapse from './collapse'

const AlertsStyled = styled.div`
    width: 100%;
`

type Props = {
    alerts: PreparedAlert
}

const Alerts = ({ alerts }: Props) => {
    const { open } = useModal()

    const handleAlertClick = (alert: Alert) => {
        open(<AlertModal alert={alert} />)
    }
    return (
        <AlertsStyled>
            {Object.keys(alerts)
                .sort((a, b) => Number.parseInt(b) - Number.parseInt(a))
                .map((year) => {
                    const collapsed = year !== new Date().getFullYear().toString()
                    const sideText = `Оповещений: ${alerts[year].length}`
                    return (
                        <Collapse sideText={sideText} title={year} key={year} initiallyCollapsed={collapsed}>
                            <List scroll={false}>
                                {alerts[year].map((alert) => {
                                    return <AlertItem key={alert.id} alert={alert} onClick={handleAlertClick} />
                                })}
                            </List>
                        </Collapse>
                    )
                })}
        </AlertsStyled>
    )
}

export default Alerts
