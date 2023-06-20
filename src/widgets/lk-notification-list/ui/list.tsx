import { TNotification, lkNotificationModel } from '@entities/lk-notifications'
import List from '@shared/ui/list'
import React from 'react'
import NotificationItem from './notification-item'

type Props = {
    notifications: TNotification[] | null
    loadingRemove: boolean
}

const NotificationList = ({ notifications, loadingRemove }: Props) => {
    if (!notifications) return null

    const handleClose = (id: string, pageId?: string, close?: () => void) => {
        return () => {
            lkNotificationModel.events.clearById({ id, pageId })
            close?.()
        }
    }

    const onClose = (notification: TNotification) =>
        notification.canClose !== false
            ? handleClose(notification.id, notification.pageId, notification.onClose)
            : undefined

    return (
        <List gap={12} visible={notifications.length > 0}>
            {notifications.map((notification) => (
                <NotificationItem
                    size="big"
                    loadingRemove={loadingRemove}
                    {...notification}
                    key={notification.id}
                    onClose={onClose(notification)}
                />
            ))}
        </List>
    )
}

export default NotificationList
