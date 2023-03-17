import { menuModel } from '@entities/menu'
import { paymentsModel } from '@entities/payments'
import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import LinksList from '@features/home/ui/organisms/links-list'
import ScheduleAndNotification from '@features/home/ui/organisms/schedule-and-notification'
import { Title, Wrapper } from '@ui/atoms'
import { useEffect } from 'react'
import { Content } from './ui/atoms/content'
import React from 'react'
import MobileAppLink from '@features/all-pages/ui/organisms/mobile-app-link'
import { isProduction } from '@shared/consts'
import HomeTopSection from '@features/home/ui/organisms/home-top-section'
import Avatar from '@features/home/ui/molecules/avatar'
import UserContextMenu from '@features/user-context-menu'
import { contextMenuModel } from '@entities/context-menu'

const Home = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()

    const { homeRoutes } = menuModel.selectors.useMenu()

    if (!user || !homeRoutes) return null

    useEffect(() => {
        scheduleModel.effects.getScheduleFx({ user })
        paymentsModel.effects.getPaymentsFx()
    }, [user])

    const handleUserClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        e.stopPropagation()
        contextMenuModel.events.open({
            e,
            height: 143,
            content: <UserContextMenu />,
        })
    }

    return (
        <Wrapper loading={!user} load={() => null} error={error} data={user}>
            <Content>
                <div className="top">
                    <div className="user" onClick={handleUserClick}>
                        <Avatar
                            marginRight="5px"
                            name={user.fullName ?? ''}
                            avatar={user.avatar}
                            width="40px"
                            height="40px"
                            border
                        />
                        <Title size={3} align="left">
                            {user.name}
                        </Title>
                    </div>
                    <HomeTopSection />
                </div>
                <LinksList wrapOnMobile={false} align="left" restricted title={'Разделы'} links={homeRoutes} />
                <ScheduleAndNotification />
                {!isProduction && <MobileAppLink />}
            </Content>
        </Wrapper>
    )
}

export default Home
