import React from 'react'
import { alertModel } from '@entities/alert'
import { CenterPage, Error, Wrapper } from '@shared/ui/atoms'
import Block from '@shared/ui/block'
import { Title } from '@shared/ui/title'
import Alerts from './ui/alerts'

const AlertsPage = () => {
    const { data, error, loading } = alertModel.selectors.use()

    return (
        <Wrapper load={alertModel.effects.getFx} error={error} loading={loading} data={data}>
            <CenterPage>
                <Block height="100%" maxWidth="700px" orientation="vertical" gap="8px" noAppearanceInMobile>
                    <Title size={2} align="left" bottomGap>
                        Оповещения
                    </Title>
                    {data ? <Alerts alerts={data} /> : <Error text="У вас нет оповещений" />}
                </Block>
            </CenterPage>
        </Wrapper>
    )
}

export default AlertsPage
