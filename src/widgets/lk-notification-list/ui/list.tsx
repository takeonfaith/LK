import List from '@shared/ui/list'
import React from 'react'
import NotificationItem from './notification-item'
import { TNotification, lkNotificationModel } from '@entities/lk-notifications'

type Props = {
    notifications: TNotification[] | null
}

const NotificationList = ({ notifications }: Props) => {
    if (!notifications) return null

    const handleClose = (id: string, close?: () => void) => {
        return () => {
            lkNotificationModel.events.clearById(id)
            close?.()
        }
    }

    const onClose = (notification: TNotification) =>
        notification.canClose !== false ? handleClose(notification.id, notification.onClose) : undefined

    return (
        <List gap={12} visible={notifications.length > 0}>
            {notifications.map((notification) => (
                <NotificationItem
                    size="small"
                    {...notification}
                    key={notification.title}
                    onClose={onClose(notification)}
                />
            ))}
        </List>
    )
}

export default NotificationList
