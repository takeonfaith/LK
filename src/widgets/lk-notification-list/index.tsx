import { lkNotificationModel } from '@entities/lk-notifications'
import { CenterPage, Error } from '@shared/ui/atoms'
import React, { useEffect } from 'react'
import { FiBellOff } from 'react-icons/fi'
import styled from 'styled-components'
import NotificationList from './ui/list'

const LkNotificationListStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;

    @media (min-width: 1001px) {
        width: 100%;
        min-width: 400px;
    }
`

const LkNotificationList = () => {
    const { notifications } = lkNotificationModel.selectors.useLkNotifications()

    useEffect(() => {
        lkNotificationModel.events.clearAllVisible()
    }, [])

    return (
        <LkNotificationListStyled>
            {notifications.length === 0 && (
                <CenterPage height="100%">
                    <Error text="Нет новых уведомлений" image={<FiBellOff />} size="80px" />
                </CenterPage>
            )}
            <NotificationList notifications={notifications} />
        </LkNotificationListStyled>
    )
}

export default LkNotificationList
