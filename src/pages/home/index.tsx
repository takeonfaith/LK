import { menuModel } from '@entities/menu'
import { paymentsModel } from '@entities/payments'
import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import LinksList from '@features/home/ui/organisms/links-list'
import ScheduleAndNotification from '@features/home/ui/organisms/schedule-and-notification'
import { Title, Wrapper } from '@ui/atoms'
import { useEffect } from 'react'
import getGreetingMessage from './lib/get-greeting-message'
import { Content } from './ui/atoms/content'
import React from 'react'
import MobileAppLink from '@features/all-pages/ui/organisms/mobile-app-link'

const Home = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()

    const { homeRoutes } = menuModel.selectors.useMenu()

    if (!user || !homeRoutes) return null

    useEffect(() => {
        scheduleModel.effects.getScheduleFx(user)
        paymentsModel.effects.getPaymentsFx()
    }, [])

    return (
        <Wrapper loading={!user} load={() => null} error={error} data={user}>
            <Content>
                <Title size={2} align="left" bottomGap>
                    {getGreetingMessage(user.name)}
                </Title>
                <LinksList wrapOnMobile={false} align="left" restricted title={'Разделы'} links={homeRoutes} />
                <ScheduleAndNotification />
                <MobileAppLink />
            </Content>
        </Wrapper>
    )
}

export default Home
