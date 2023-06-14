import { PreparedAlerts } from '@entities/alert/lib/prepare-data'
import List from '@shared/ui/list'
import { LocalSearch } from '@shared/ui/molecules'
import React, { useState } from 'react'
import styled from 'styled-components'
import AlertItem from 'widgets/alerts-widget/alert-item'
import search from '../../lib/search'
import Collapse from './collapse'
import { userModel } from '@entities/user'

const AlertsStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

type Props = {
    alerts: PreparedAlerts
    listView?: boolean
}

const Alerts = ({ alerts, listView }: Props) => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [foundAlerts, setFoundAlerts] = useState<PreparedAlerts | null>(null)

    const finalAlerts = foundAlerts ?? alerts

    return (
        <AlertsStyled>
            {!listView && (
                <LocalSearch
                    placeholder="Поиск новостей"
                    whereToSearch={alerts}
                    searchEngine={search}
                    setResult={setFoundAlerts}
                    loadingOnType
                    validationCheck
                />
            )}
            {Object.keys(finalAlerts)
                .sort((a, b) => Number.parseInt(b) - Number.parseInt(a))
                .map((year) => {
                    const currentYear = new Date().getFullYear().toString()
                    const collapsed = foundAlerts === null ? year !== currentYear : false
                    const sideText = `Новостей: ${finalAlerts[year].length}`
                    return (
                        <Collapse
                            sideText={sideText}
                            title={year}
                            key={year}
                            isCollapsed={collapsed}
                            initiallyCollapsed={collapsed}
                        >
                            <List scroll={false} gap={12}>
                                {finalAlerts[year].map((alert, index) => {
                                    return (
                                        <AlertItem
                                            isNew={year === currentYear && index === 0 && !user?.hasAlerts}
                                            key={alert.id}
                                            news={alert}
                                            orientation="horizontal"
                                        />
                                    )
                                })}
                            </List>
                        </Collapse>
                    )
                })}
        </AlertsStyled>
    )
}

export default Alerts
