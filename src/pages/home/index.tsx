import { menuModel } from '@entities/menu'
import { paymentsModel } from '@entities/payments'
import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import LinksList from '@features/home/ui/organisms/links-list'
import ScheduleAndNotification from '@features/home/ui/organisms/schedule-and-notification'
import { Message, Title, Wrapper } from '@ui/atoms'
import { useEffect } from 'react'
import getGreetingMessage from './lib/get-greeting-message'
import { Content } from './ui/atoms/content'
import React from 'react'
import MobileAppLink from '@features/all-pages/ui/organisms/mobile-app-link'
import { isProduction } from '@shared/consts'
import HomeTopSection from '@features/home/ui/organisms/home-top-section'

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
                <div className="top">
                    <Title size={2} align="left">
                        {getGreetingMessage(user.name)}
                    </Title>
                    <HomeTopSection />
                </div>
                <Message type="alert">Test</Message>
                <Message type="success">Test</Message>
                <Message type="failure">Test</Message>
                <Message type="hint">Test</Message>
                <Message type="info">Test</Message>
                <Message type="tip">Test</Message>
                <LinksList wrapOnMobile={false} align="left" restricted title={'Разделы'} links={homeRoutes} />
                <ScheduleAndNotification />
                {!isProduction && <MobileAppLink />}
            </Content>
        </Wrapper>
    )
}

export default Home
