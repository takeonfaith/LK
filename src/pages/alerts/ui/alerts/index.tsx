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
    display: flex;
    flex-direction: column;
    gap: 12px;
`

type Props = {
    alerts: PreparedAlerts
    limit?: number
    listView?: boolean
}

const Alerts = ({ alerts, limit, listView }: Props) => {
    const { open } = useModal()
    const [foundAlerts, setFoundAlerts] = useState<PreparedAlerts | null>(null)

    const handleAlertClick = (alert: Alert) => {
        open(<AlertModal alert={alert} />)
    }

    const finalAlerts = foundAlerts ?? alerts

    return (
        <AlertsStyled>
            {!listView && (
                <LocalSearch
                    placeholder="Поиск оповещений"
                    whereToSearch={alerts}
                    searchEngine={search}
                    setResult={setFoundAlerts}
                    loadingOnType
                    validationCheck
                />
            )}
            {!listView &&
                Object.keys(finalAlerts)
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
                                    <List scroll={false} gap={12}>
                                        {finalAlerts[year]
                                            .slice(0, limit ?? Object.keys(finalAlerts).length)
                                            .map((alert) => {
                                                return (
                                                    <AlertItem
                                                        key={alert.id}
                                                        alert={alert}
                                                        onClick={handleAlertClick}
                                                    />
                                                )
                                            })}
                                    </List>
                                ) : null}
                            </Collapse>
                        )
                    })}

            {listView && (
                <List scroll={false} gap={12}>
                    {Object.values(finalAlerts)
                        .reverse()
                        .slice(0, 1)
                        .map((alerts) => {
                            return alerts.map((alert) => {
                                return <AlertItem key={alert.id} alert={alert} onClick={handleAlertClick} />
                            })
                        })}
                </List>
            )}
        </AlertsStyled>
    )
}

export default Alerts
