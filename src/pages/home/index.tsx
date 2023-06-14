import { acadPerformanceModel } from '@entities/acad-performance'
import { menuModel } from '@entities/menu'
import { paymentsModel } from '@entities/payments'
import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import GlobalAppSearch from '@features/global-app-search'
import Links from '@features/home/ui/links'
import ScheduleAndNotification from '@features/home/ui/organisms/schedule-and-notification'
import findSemestr from '@shared/lib/find-semestr'
import Block from '@shared/ui/block'
import Flex from '@shared/ui/flex'
import { CenterPage, Title, Wrapper } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'
import HomeTopPlate from './ui/home-top-plate'
import TopUser from './ui/top-user'
import AlertsWidget from 'widgets/alerts-widget'
import { electronicInteractionModel } from '@entities/electronic-interaction'

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

    const { data: acad } = acadPerformanceModel.selectors.useData()
    const { data: payments } = paymentsModel.selectors.usePayments()
    const { data: schedule } = scheduleModel.selectors.useSchedule()
    const semestr = `${findSemestr(new Date().toString(), user?.course ?? 1)}`

    const { homeRoutes } = menuModel.selectors.useMenu()

    if (!user || !homeRoutes) return null

    const load = () => {
        scheduleModel.effects.getScheduleFx({ user })
        paymentsModel.effects.getPaymentsFx()
        acadPerformanceModel.effects.getFx({ semestr })
        electronicInteractionModel.effects.getElectronicInteractionFx()
    }

    return (
        <Wrapper loading={!user} load={load} error={error} data={acad && payments && schedule}>
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
                            <TopUser />
                        </Flex>
                        <ScheduleAndNotification />
                        {/* {user.user_status === 'stud' && <AcadPerformanceStatWidget />} */}
                        <AlertsWidget />
                    </Block>
                </CenterPage>
            </HomePageStyled>
        </Wrapper>
    )
}

export default Home
