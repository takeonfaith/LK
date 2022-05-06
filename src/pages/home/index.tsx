import { menuModel } from '@entities/menu'
import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import LinksList from '@features/home/ui/organisms/links-list'
import ScheduleAndNotification from '@features/home/ui/organisms/schedule-and-notification'
import { Title, Wrapper } from '@ui/atoms'
import React, { useEffect } from 'react'
import getGreetingMessage from './lib/get-greeting-message'
import getLinksForHome from './lib/get-links-for-home'
import { Content } from './ui/atoms/content'

const Home = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()

    const { visibleRoutes } = menuModel.selectors.useMenu()

    if (!user || !visibleRoutes) return null

    useEffect(() => {
        scheduleModel.effects.getScheduleFx(user)
    }, [])

    return (
        <Wrapper loading={!user} load={() => null} error={error} data={user}>
            <Content>
                <Title size={2} align="left" bottomGap>
                    {getGreetingMessage(user.name)}
                </Title>
                <LinksList align="left" title={'Разделы'} links={getLinksForHome(visibleRoutes)} />
                <div className="home-page-content-inner">
                    <ScheduleAndNotification />
                    {/* <ShortCutLinks /> */}
                </div>
            </Content>
        </Wrapper>
    )
}

export default Home
