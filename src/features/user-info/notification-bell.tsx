import { LK_NOTIFICATIONS_ROUTE } from '@app/routes/general-routes'
import { lkNotificationModel } from '@entities/lk-notifications'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'
import Notification from '@shared/ui/notification'
import React from 'react'
import { MdOutlineNotifications } from 'react-icons/md'
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
        background: var(--theme-mild-xxl);
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

    return (
        <Flex d="column" gap="48px" w="100%" mw="500px">
            <LkNotificationList />
            {notifications.length > 0 && (
                <Link to={LK_NOTIFICATIONS_ROUTE} style={{ width: '100%' }}>
                    <Button width="100%" text="Показать больше" onClick={close} />
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
                box-shadow="0px 0px 0px 3px var(--schedule)"
                color="red"
                top="14px"
                right="-4px"
                visible={notifications.length > 0}
                pulsing
                className="notification-circle"
                shadow
            >
                {notifications.length}
            </Notification>
            <MdOutlineNotifications />
        </NotificationBellStyled>
    )
}

export default NotificationBellSection
