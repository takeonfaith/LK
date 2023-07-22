import { SETTINGS_NOTIFICATIONS } from '@app/routes/general-routes'
import { confirmModel } from '@entities/confirm'
import { lkNotificationModel } from '@entities/lk-notifications'
import { popUpMessageModel } from '@entities/pop-up-message'
import { Button, CenterPage, Loading } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import React, { useEffect } from 'react'
import { FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import LkNotificationList from 'widgets/lk-notification-list'

const LkNotificationsPage = () => {
    const { notifications, clearAllError, clearAllLoading } = lkNotificationModel.selectors.useLkNotifications()

    const handleClearAll = () => {
        confirmModel.events.evokeConfirm({
            message: 'Вы уверены, что хотите очистить все уведомления?',
            onConfirm: () => lkNotificationModel.events.clearAll(),
        })
    }

    useEffect(() => {
        if (clearAllError) {
            popUpMessageModel.events.evokePopUpMessage({ type: 'failure', message: clearAllError })
        }
    }, [clearAllError])

    return (
        <CenterPage padding="10px">
            <PageBlock
                topRightCornerElement={
                    <Link to={SETTINGS_NOTIFICATIONS}>
                        <Button icon={<FiSettings />} height="35px" width="35px" />
                    </Link>
                }
            >
                <LkNotificationList />
                {notifications.length > 0 ? (
                    !clearAllLoading ? (
                        <Button text="Очистить все" onClick={handleClearAll} width="100%" />
                    ) : (
                        <Flex jc="center">
                            <Loading width="40px" height="40px" />
                        </Flex>
                    )
                ) : null}
            </PageBlock>
        </CenterPage>
    )
}

export default LkNotificationsPage
