/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { menuModel } from '@entities/menu'
import { paymentsModel } from '@entities/payments'
import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import Links from '@features/home/ui/links'
import ScheduleAndNotification from '@features/home/ui/organisms/schedule-and-notification'
import Block from '@shared/ui/block'
import Flex from '@shared/ui/flex'
import { LocalSearch } from '@shared/ui/molecules'
import { CenterPage, Title, Wrapper } from '@ui/atoms'
import { useEffect } from 'react'
import styled from 'styled-components'
import AcadPerformanceStatWidget from 'widgets/acad-performance-stat-widget'
import DaytimeBackground from './ui/daytime-background'
import TopUser from './ui/top-user'
import { FiSearch } from 'react-icons/fi'
import Subtext from '@shared/ui/subtext'
import { acadPerformanceModel } from '@entities/acad-performance'
import findSemestr from '@shared/lib/find-semestr'

const HomePageStyled = styled.div`
    width: 100%;
    padding-top: 156px;
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
    const { data } = acadPerformanceModel.selectors.useData()
    const semestr = `${findSemestr(new Date().toString(), user?.course ?? 1)}`

    const { homeRoutes } = menuModel.selectors.useMenu()

    if (!user || !homeRoutes) return null

    useEffect(() => {
        scheduleModel.effects.getScheduleFx({ user })
        paymentsModel.effects.getPaymentsFx()
        acadPerformanceModel.effects.getFx({ semestr })
    }, [])

    return (
        <Wrapper loading={!user} load={() => null} error={error} data={user}>
            <DaytimeBackground />
            <HomePageStyled>
                <Block maxWidth="750px" height="fit-content" padding="16px">
                    <Subtext align="left" fontSize="0.9rem">
                        <Flex gap="8px">
                            <FiSearch />
                            Поиск
                        </Flex>
                    </Subtext>
                </Block>
                <Links links={homeRoutes} />
                <CenterPage>
                    <Block maxWidth="750px" minHeight="100%" height="100%" orientation="vertical" gap="16px">
                        <Flex>
                            <Title size={2} align="left" width="100%">
                                Главная
                            </Title>
                            <TopUser />
                        </Flex>
                        <ScheduleAndNotification />
                        {user.user_status === 'stud' && <AcadPerformanceStatWidget />}
                    </Block>
                </CenterPage>
            </HomePageStyled>
        </Wrapper>
    )
}

export default Home
