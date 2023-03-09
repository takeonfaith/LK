import { ALERTS_ROUTE } from '@app/routes/general-routes'
import { lkNotificationModel } from '@entities/lk-notifications'
import { userModel } from '@entities/user'
import { Thinking } from '@shared/images'
import { CenterPage, Error } from '@shared/ui/atoms'
import { Button } from '@shared/ui/button'
import List from '@shared/ui/list'
import { Title } from '@shared/ui/title'
import React from 'react'
import styled from 'styled-components'
import NotificationItem from './ui/notification-item'

const LkNotificationListStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (min-width: 1001px) {
        width: 100%;
        min-width: 400px;
    }
`

const LkNotificationList = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { notifications } = lkNotificationModel.selectors.useLkNotifications()

    const addNotif = () => {
        // eslint-disable-next-line no-console
        console.log('Test', notifications)
        lkNotificationModel.events.add({
            id: crypto.randomUUID(),
            title: 'Шурыгин Владимир Николаевич',
            text: 'Приглашаем обучающихся, имеющих публикации',
            type: 'message',
            image: user?.avatar,
            goTo: ALERTS_ROUTE,
            time: '12:42',
            date: '2022-12-1',
        })
    }

    return (
        <LkNotificationListStyled>
            <Title size={3} align="left">
                Уведомления
            </Title>
            <Button text="Добавить" onClick={addNotif} />
            {notifications.length === 0 && (
                <CenterPage height="300px">
                    <Error text="Нет новых уведомлений" image={Thinking} />
                </CenterPage>
            )}
            <List gap={12} height="300px" visible={notifications.length > 0}>
                {notifications.map((notification) => (
                    <NotificationItem size="small" {...notification} key={notification.title} onClose={() => null} />
                ))}
            </List>
            {notifications.length > 0 && <Button width="100%" text="Очистить все" />}
        </LkNotificationListStyled>
    )
}

export default LkNotificationList
