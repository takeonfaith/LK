import { SETTINGS_HOME_PAGE_ROUTE } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { paymentsModel } from '@entities/payments'
import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import LinksList from '@features/home/ui/organisms/links-list'
import ScheduleAndNotification from '@features/home/ui/organisms/schedule-and-notification'
import { Message, Title, Wrapper } from '@ui/atoms'
import List from '@ui/list'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HintModal, User } from 'widgets'
import getGreetingMessage from './lib/get-greeting-message'
import { Content } from './ui/atoms/content'

const Home = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()
    const [tipVisible, setTipVisible] = useState(true)

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
                <Message
                    type={'tip'}
                    title={'Подсказка'}
                    width="100%"
                    visible={tipVisible}
                    maxWidth="400px"
                    onClose={() => setTipVisible((prev) => !prev)}
                >
                    Вы можете менять ссылки вверху в <Link to={SETTINGS_HOME_PAGE_ROUTE}>настройках</Link>
                </Message>
                {/* <HintModal /> */}
                <ScheduleAndNotification />
                <List title="Преподаватели" direction="horizontal" gap="0px">
                    <User type={'teacher'} name={'Долоз Констанстин'} orientation="vertical" />
                    <User type={'teacher'} name={'AFA test'} orientation="vertical" />
                    <User type={'teacher'} name={'FSFQ test'} orientation="vertical" />
                    <User type={'teacher'} name={'GSLR test'} orientation="vertical" />
                    <User type={'teacher'} name={'BGFAODAddq test'} orientation="vertical" />
                    <User type={'teacher'} name={'POAE test'} orientation="vertical" />
                </List>
            </Content>
        </Wrapper>
    )
}

export default Home
