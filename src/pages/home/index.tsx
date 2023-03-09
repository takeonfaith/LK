import { menuModel } from '@entities/menu'
import { paymentsModel } from '@entities/payments'
import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import LinksList from '@features/home/ui/organisms/links-list'
import ScheduleAndNotification from '@features/home/ui/organisms/schedule-and-notification'
import { CenterPage, Divider, Title, Wrapper } from '@ui/atoms'
import { useEffect } from 'react'
import React from 'react'
import Block from '@shared/ui/block'
import TopUser from './ui/top-user'
import styled from 'styled-components'
import DaytimeBackground from './ui/daytime-background'
import List from '@shared/ui/list'
import { User } from 'widgets'
import { paginationList } from '@entities/all-students'
import { ALL_STUDENTS_ROUTE } from '@app/routes/general-routes'
import { useHistory } from 'react-router'

const HomePageStyled = styled.div`
    width: 100%;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
`

const Home = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()
    const { $items } = paginationList
    const history = useHistory()

    const { homeRoutes } = menuModel.selectors.useMenu()

    if (!user || !homeRoutes) return null

    useEffect(() => {
        scheduleModel.effects.getScheduleFx({ user })
        paymentsModel.effects.getPaymentsFx()
    }, [])

    const handleWatchMore = () => {
        history.push(ALL_STUDENTS_ROUTE)
    }

    return (
        <Wrapper loading={!user} load={() => null} error={error} data={user}>
            <DaytimeBackground />
            <HomePageStyled>
                <LinksList wrapOnMobile={false} align="left" restricted title={'Разделы'} links={homeRoutes} />
                <CenterPage>
                    <Block maxHeight="100%" minHeight="100%" height="100%" orientation="vertical" gap="16px">
                        <Title size={2} align="left" width="100%">
                            Главная
                            <TopUser />
                        </Title>
                        <ScheduleAndNotification />
                        <List showPages title="Одногруппники" direction="horizontal" onWatchMore={handleWatchMore}>
                            {$items.getState()?.map((user) => (
                                <User key={user?.fio} type={'stud'} name={user.fio} orientation="vertical" />
                            ))}
                        </List>
                        <Divider />
                    </Block>
                </CenterPage>
            </HomePageStyled>
        </Wrapper>
    )
}

export default Home
