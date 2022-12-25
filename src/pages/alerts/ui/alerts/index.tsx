import { PreparedAlerts } from '@entities/alert/lib/prepare-data'
import { Alert } from '@shared/api/model/alert'
import List from '@shared/ui/list'
import { LocalSearch } from '@shared/ui/molecules'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import AlertItem from '../alert-item'
import AlertModal from '../alert-modal'
import Collapse from './collapse'
import search from '../../lib/search'

const AlertsStyled = styled.div`
    width: 100%;
`

type Props = {
    alerts: PreparedAlerts
}

const Alerts = ({ alerts }: Props) => {
    const { open } = useModal()
    const [foundAlerts, setFoundAlerts] = useState<PreparedAlerts | null>(null)

    const handleAlertClick = (alert: Alert) => {
        open(<AlertModal alert={alert} />)
    }

    const finalAlerts = foundAlerts ?? alerts

    return (
        <AlertsStyled>
            <LocalSearch
                placeholder="Поиск оповещений"
                whereToSearch={alerts}
                searchEngine={search}
                setResult={setFoundAlerts}
                loadingOnType
                validationCheck
            />
            {Object.keys(finalAlerts)
                .sort((a, b) => Number.parseInt(b) - Number.parseInt(a))
                .map((year) => {
                    const collapsed = foundAlerts === null ? year !== new Date().getFullYear().toString() : false
                    const sideText = `Оповещений: ${finalAlerts[year].length}`
                    return (
                        <Collapse
                            sideText={sideText}
                            title={year}
                            key={year}
                            isCollapsed={collapsed}
                            initiallyCollapsed={collapsed}
                        >
                            {!!finalAlerts[year].length ? (
                                <List scroll={false}>
                                    {finalAlerts[year].map((alert) => {
                                        return <AlertItem key={alert.id} alert={alert} onClick={handleAlertClick} />
                                    })}
                                </List>
                            ) : null}
                        </Collapse>
                    )
                })}
        </AlertsStyled>
    )
}

export default Alerts
