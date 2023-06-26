import { lkNotificationModel } from '@entities/lk-notifications'
import React from 'react'
import NotificationItem from 'widgets/lk-notification-list/ui/notification-item'
import usePopUpNotifications from './hooks/use-pop-up-notifications'
import { PopUpNotificationsItem, PopUpNotificationsStyled } from './styles'

const PopUpNotifications = () => {
    const { visibleNotifications } = lkNotificationModel.selectors.useLkNotifications()
    const { closing, handleClose } = usePopUpNotifications()
    return (
        <PopUpNotificationsStyled>
            {visibleNotifications.map((notification) => {
                return (
                    <PopUpNotificationsItem
                        onClick={handleClose(notification.id)}
                        key={notification.id}
                        open={closing !== notification.id}
                    >
                        <NotificationItem
                            {...notification}
                            fullText={false}
                            maxLetters={19}
                            closeAnimation={false}
                            onClose={handleClose(notification.id)}
                        />
                    </PopUpNotificationsItem>
                )
            })}
            {/* {notifications.length > 3 && visibleNotifications.length > 0 && (
                <Link to={LK_NOTIFICATIONS_ROUTE}>
                    <Button
                        background="var(--theme-mild-xxl)"
                        text={`Показать все уведомления (${notifications.length})`}
                        width="100%"
                        height="40px"
                    />
                </Link>
            )} */}
        </PopUpNotificationsStyled>
    )
}

export default PopUpNotifications
