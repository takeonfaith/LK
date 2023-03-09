import React from 'react'
import { lkNotificationModel } from '@entities/lk-notifications'
import NotificationItem from 'widgets/lk-notification-list/ui/notification-item'
import usePopUpNotifications from './hooks/use-pop-up-notifications'
import { PopUpNotificationsItem, PopUpNotificationsStyled } from './styles'

const PopUpNotifications = () => {
    const { notifications } = lkNotificationModel.selectors.useLkNotifications()
    const { closing, handleClose } = usePopUpNotifications()
    return (
        <PopUpNotificationsStyled>
            {notifications.map((notification) => {
                return (
                    <PopUpNotificationsItem
                        onClick={handleClose(notification.id)}
                        key={notification.id}
                        open={closing !== notification.id}
                    >
                        <NotificationItem {...notification} maxLetters={19} onClose={handleClose(notification.id)} />
                    </PopUpNotificationsItem>
                )
            })}
        </PopUpNotificationsStyled>
    )
}

export default PopUpNotifications
