import { SCHEDULE_ROUTE } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { paymentsModel } from '@entities/payments'
import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import LinksList from '@features/home/ui/organisms/links-list'
import ScheduleAndNotification from '@features/home/ui/organisms/schedule-and-notification'
import { Message, Title, Wrapper } from '@ui/atoms'
import List from '@ui/list'
import Timeline, { TimelineItem } from '@ui/timeline'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { User } from 'widgets'
import getGreetingMessage from './lib/get-greeting-message'
import { Content } from './ui/atoms/content'

const Home = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()
    const { data } = scheduleModel.selectors.useSchedule()
    const [tipVisible, setTipVisible] = useState(true)

    const { homeRoutes } = menuModel.selectors.useMenu()

    if (!user || !homeRoutes) return null

    useEffect(() => {
        scheduleModel.effects.getScheduleFx(user)
        paymentsModel.effects.getPaymentsFx()
    }, [])

    const sessionStart = data.schedule?.[2]

    const timelineData: TimelineItem[] = [
        {
            id: 0,
            title: 'Личные данные',
            type: 'normal',
            insideCircle: '1',
            distance: 130,
            filled: 100,
            hint: 'TEafs',
        },
        {
            id: 1,
            title: 'Семья',
            type: 'normal',
            filled: 0,
            distance: 130,
            insideCircle: '2',
        },
        {
            id: 2,
            title: 'Паспортные данные',
            type: 'normal',
            filled: 0,
            distance: 130,
            insideCircle: '3',
        },
        {
            id: 3,
            hint: 'Test',
            title: 'Мобилизационный центр',
            type: 'normal',
            filled: 0,
            distance: 130,
            insideCircle: '4',
        },
        {
            id: 0,
            title: 'Личные данные',
            type: 'normal',
            insideCircle: '1',
            distance: 130,
            filled: 100,
            hint: 'TEafs',
        },
        {
            id: 1,
            title: 'Семья',
            type: 'normal',
            filled: 0,
            distance: 130,
            insideCircle: '2',
        },
        {
            id: 2,
            title: 'Паспортные данные',
            type: 'normal',
            filled: 0,
            distance: 130,
            insideCircle: '3',
        },
        {
            id: 3,
            hint: 'Test',
            title: 'Мобилизационный центр',
            type: 'normal',
            filled: 0,
            distance: 130,
            insideCircle: '4',
        },
        {
            id: 0,
            title: 'Личные данные',
            type: 'normal',
            insideCircle: '1',
            distance: 130,
            filled: 100,
            hint: 'TEafs',
        },
        {
            id: 1,
            title: 'Семья',
            type: 'normal',
            filled: 0,
            distance: 130,
            insideCircle: '2',
        },
        {
            id: 2,
            title: 'Паспортные данные',
            type: 'normal',
            filled: 0,
            distance: 130,
            insideCircle: '3',
        },
        {
            id: 3,
            hint: 'Test',
            title: 'Мобилизационный центр',
            type: 'normal',
            filled: 0,
            distance: 130,
            insideCircle: '4',
        },
        {
            id: 0,
            title: 'Личные данные',
            type: 'normal',
            insideCircle: '1',
            distance: 130,
            filled: 100,
            hint: 'TEafs',
        },
        {
            id: 1,
            title: 'Семья',
            type: 'normal',
            filled: 0,
            distance: 130,
            insideCircle: '2',
        },
        {
            id: 2,
            title: 'Паспортные данные',
            type: 'normal',
            filled: 0,
            distance: 130,
            insideCircle: '3',
        },
        {
            id: 3,
            hint: 'Test',
            title: 'Мобилизационный центр',
            type: 'normal',
            filled: 0,
            distance: 130,
            insideCircle: '4',
        },
        {
            id: 0,
            title: 'Личные данные',
            type: 'normal',
            insideCircle: '1',
            distance: 130,
            filled: 100,
            hint: 'TEafs',
        },
        {
            id: 1,
            title: 'Семья',
            type: 'normal',
            filled: 0,
            distance: 130,
            insideCircle: '2',
        },
        {
            id: 2,
            title: 'Паспортные данные',
            type: 'normal',
            filled: 0,
            distance: 130,
            insideCircle: '3',
        },
        {
            id: 3,
            hint: 'Test',
            title: 'Мобилизационный центр',
            type: 'normal',
            filled: 0,
            distance: 130,
            insideCircle: '4',
        },
    ]

    const [current, setCurrent] = useState(timelineData.find((el) => el.filled !== undefined && el.filled !== 100)?.id)

    return (
        <Wrapper loading={!user} load={() => null} error={error} data={user}>
            <Content>
                <Title size={2} align="left" bottomGap>
                    {getGreetingMessage(user.name)}
                </Title>
                <LinksList wrapOnMobile={false} align="left" restricted title={'Разделы'} links={homeRoutes} />
                <Timeline
                    data={timelineData}
                    direction="horizontal"
                    current={current}
                    onCircleClick={(id) => setCurrent(id)}
                />
                <Message
                    type={'tip'}
                    width="100%"
                    visible={tipVisible}
                    maxWidth="400px"
                    loading={!sessionStart}
                    onClose={() => setTipVisible((prev) => !prev)}
                >
                    {sessionStart && (
                        <span>
                            Появилось <Link to={SCHEDULE_ROUTE}>расписание</Link> сессии <br />
                            Начало сессии - {Object.values(sessionStart)[0].lessons?.[0].dateInterval}
                        </span>
                    )}
                </Message>
                <ScheduleAndNotification />
                <List title="Преподаватели" direction="horizontal" gap={0} showPages>
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
