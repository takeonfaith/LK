import { lkNotificationModel } from '@entities/lk-notifications'
import { CenterPage, Error, Message } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import PlaneSkeleton from '@shared/ui/plane-skeleton'
import React, { useEffect } from 'react'
import { FiBellOff, FiXCircle } from 'react-icons/fi'
import styled from 'styled-components'
import NotificationList from './ui/list'
import { popUpMessageModel } from '@entities/pop-up-message'

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

type Props = {
    maxNotificationsVisible?: number
}

const LkNotificationList = ({ maxNotificationsVisible }: Props) => {
    const { error, loading, notifications, removeNotificationError, removeNotificationLoading } =
        lkNotificationModel.selectors.useLkNotifications()

    useEffect(() => {
        if (removeNotificationError) {
            popUpMessageModel.events.evokePopUpMessage({
                type: 'failure',
                message: removeNotificationError,
                time: 10000,
            })
        }
    }, [removeNotificationError])

    useEffect(() => {
        lkNotificationModel.events.clearAllVisible()
    }, [])

    return (
        <LkNotificationListStyled>
            {notifications.length === 0 && !loading && (
                <CenterPage height="100%">
                    <Error
                        text={error ?? 'Нет новых уведомлений'}
                        image={error ? <FiXCircle /> : <FiBellOff />}
                        size="70px"
                    />
                </CenterPage>
            )}
            <Flex d="column" gap="16px">
                <Message lineHeight="1.2rem" type="tip" visible={notifications.length !== 0}>
                    Вы можете отключить получение каких-либо уведомлений в настройках
                </Message>
                <NotificationList
                    notifications={
                        maxNotificationsVisible ? notifications.slice(0, maxNotificationsVisible) : notifications
                    }
                    loadingRemove={removeNotificationLoading}
                />
            </Flex>
            {loading && (
                <Flex d="column" gap="12px">
                    {Array(5)
                        .fill(0)
                        .map((_, i) => (
                            <PlaneSkeleton key={i} />
                        ))}
                </Flex>
            )}
        </LkNotificationListStyled>
    )
}

export default LkNotificationList
