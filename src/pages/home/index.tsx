import { menuModel } from '@entities/menu'
import { paymentsModel } from '@entities/payments'
import { scheduleModel } from '@entities/schedule'
import { settingsModel } from '@entities/settings'
import { userModel } from '@entities/user'
import GlobalAppSearch from '@features/global-app-search'
import Links from '@features/home/ui/links'
import ScheduleAndNotification from '@features/home/ui/organisms/schedule-and-notification'
import UserInfo from '@features/user-info'
import Block from '@shared/ui/block'
import Flex from '@shared/ui/flex'
import { CenterPage, Title, Wrapper } from '@ui/atoms'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import AlertsWidget from 'widgets/alerts-widget'
import HomeTopPlate from './ui/home-top-plate'
import { settingsModel } from '@entities/settings'
import { useUnit } from 'effector-react'

const HomePageStyled = styled.div`
    width: 100%;
    padding-top: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    @media (max-width: 1000px) {
        padding-top: 153px;
    }
`

const Home = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()

    const payments = useUnit(paymentsModel.stores.$paymentsStore)
    const { data: schedule } = scheduleModel.selectors.useSchedule()

    const { homeRoutes } = menuModel.selectors.useMenu()

    if (!user || !homeRoutes) return null

    useEffect(() => {
        if (!payments) {
            paymentsModel.events.getPayments()
        }
    }, [payments])

    useEffect(() => {
        if (!schedule) {
            scheduleModel.effects.getScheduleFx(user)
        }
    }, [schedule])

    const { news } = settingsModel.selectors.useSettings().settings['settings-home-page'].property

    return (
        <Wrapper loading={!user} load={() => null} error={error} data={user}>
            <HomeTopPlate />
            <HomePageStyled>
                <GlobalAppSearch />
                <Links links={homeRoutes} />
                <CenterPage>
                    <Block maxWidth="750px" minHeight="100%" height="100%" orientation="vertical" gap="20px">
                        <Flex>
                            <Title size={2} align="left" width="100%">
                                Главная
                            </Title>
                            <UserInfo />
                        </Flex>
                        <ScheduleAndNotification />
                        {!!news && <AlertsWidget />}
                    </Block>
                </CenterPage>
            </HomePageStyled>
        </Wrapper>
    )
}

export default Home
