import { ALERTS_ROUTE } from '@app/routes/general-routes'
import { alertModel } from '@entities/alert'
import Flex from '@shared/ui/flex'
import List from '@shared/ui/list'
import PlaneSkeleton from '@shared/ui/plane-skeleton'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AlertItem from './alert-item'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { userModel } from '@entities/user'

const AlertsWidget = () => {
    const { data, loading } = alertModel.selectors.useData()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const currentNews = data?.[new Date().getFullYear()]?.slice(0, 3)
    const { isMobile } = useCurrentDevice()
    const history = useHistory()
    useEffect(() => {
        if (!data) alertModel.effects.getFx()
    }, [])

    return (
        <List
            title=" Последние новости"
            gap={8}
            scroll={false}
            direction={isMobile ? 'vertical' : 'horizontal'}
            onWatchMore={() => history.push(ALERTS_ROUTE)}
        >
            {loading && (
                <Flex d="column" gap="8px">
                    <PlaneSkeleton />
                    <PlaneSkeleton />
                    <PlaneSkeleton />
                </Flex>
            )}
            {currentNews?.map((news, index) => (
                <AlertItem
                    isNew={index === 0 && user?.hasAlerts}
                    news={news}
                    key={news.id}
                    orientation={isMobile ? 'horizontal' : 'vertical'}
                />
            ))}
        </List>
    )
}

export default AlertsWidget
