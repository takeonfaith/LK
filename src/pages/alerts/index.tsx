import { alertModel } from '@entities/alert'
import { lkNotificationModel } from '@entities/lk-notifications'
import { Error, Wrapper } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import React, { useEffect } from 'react'
import Alerts from './ui/alerts'

const AlertsPage = () => {
    const { data, error, loading } = alertModel.selectors.useData()

    useEffect(() => {
        lkNotificationModel.events.clearById({ id: 'alert', pageId: 'alerts' })
    }, [])

    return (
        <Wrapper load={alertModel.effects.getFx} error={error} loading={loading} data={data}>
            <PageBlock>{data ? <Alerts alerts={data} /> : <Error text="У вас нет оповещений" />}</PageBlock>
        </Wrapper>
    )
}

export default AlertsPage
