import React, { useEffect } from 'react'
import { alertModel } from '@entities/alert'
import { CenterPage, Error, Wrapper } from '@shared/ui/atoms'
import Block from '@shared/ui/block'
import { Title } from '@shared/ui/title'
import Alerts from './ui/alerts'
import { lkNotificationModel } from '@entities/lk-notifications'

const AlertsPage = () => {
    const { data, error, loading } = alertModel.selectors.useData()

    useEffect(() => {
        lkNotificationModel.events.clearById('alert')
    }, [])

    return (
        <Wrapper load={alertModel.effects.getFx} error={error} loading={loading} data={data}>
            <CenterPage>
                <Block height="100%" maxWidth="700px" orientation="vertical" gap="8px" noAppearanceInMobile>
                    <Title size={2} align="left" bottomGap>
                        Новости
                    </Title>
                    {data ? <Alerts alerts={data} /> : <Error text="У вас нет оповещений" />}
                </Block>
            </CenterPage>
        </Wrapper>
    )
}

export default AlertsPage
