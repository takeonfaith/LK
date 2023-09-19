import { LK_NOTIFICATIONS_ROUTE } from '@app/routes/general-routes'
import { lkNotificationModel } from '@entities/lk-notifications'
import getCorrectWordForm from '@shared/lib/get-correct-word-form'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'
import Notification from '@shared/ui/notification'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import { FiBell } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useModal } from 'widgets'
import LkNotificationList from 'widgets/lk-notification-list'

const NotificationBellStyled = styled.div`
    position: relative;
    min-width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--brLight);

    &:hover {
        background: var(--theme-1t);
    }

    svg {
        width: 22px;
        height: 22px;
        color: var(--text);
    }
`

export const NotificationsModal = () => {
    const { close } = useModal()
    const { notifications } = lkNotificationModel.selectors.useLkNotifications()
    const MAX_QUANTITY = 3

    return (
        <Flex d="column" gap="30px" w="100%" mw="400px">
            <Flex d="column" gap="16px">
                <LkNotificationList maxNotificationsVisible={MAX_QUANTITY} />
                <Subtext width="100%" visible={notifications.length > MAX_QUANTITY}>
                    Еще {notifications.length - MAX_QUANTITY}{' '}
                    {getCorrectWordForm(notifications.length - MAX_QUANTITY, {
                        one: 'уведомление',
                        twoToFour: 'уведомления',
                        fiveToNine: 'уведомлений',
                        zero: 'уведомлений',
                    })}
                    ...
                </Subtext>
            </Flex>
            {notifications.length > 0 && (
                <Link to={LK_NOTIFICATIONS_ROUTE} style={{ width: '100%' }}>
                    <Button width="100%" text="Показать все" onClick={close} />
                </Link>
            )}
        </Flex>
    )
}

const NotificationBellSection = () => {
    const { notifications } = lkNotificationModel.selectors.useLkNotifications()
    const { open } = useModal()

    const handleClick = () => {
        open(<NotificationsModal />, 'Уведомления')
    }

    return (
        <NotificationBellStyled onClick={handleClick}>
            <Notification
                outline="none"
                box-shadow="0px 0px 0px 3px var(--block)"
                color="red"
                top="14px"
                left="30px"
                visible={notifications.length > 0}
                pulsing
                className="notification-circle"
                shadow
            >
                {notifications.length > 10 ? '10+' : notifications.length}
            </Notification>
            <FiBell />
        </NotificationBellStyled>
    )
}

export default NotificationBellSection
