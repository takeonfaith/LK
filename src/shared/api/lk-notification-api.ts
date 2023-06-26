import getToken from '@shared/lib/token'
import { $api } from './config'
import { NotificationType } from '@entities/lk-notifications'

type NotificationsResponse = {
    id: NotificationType
    type: NotificationType
    title: string
    text: string
}[]

export const get = () => {
    return $api.get<NotificationsResponse>(`?getNotifications&token=${getToken()}`)
}

export const clearNotificationById = (id: string) => {
    return $api.get(`?clearNotificationById=${id}&token=${getToken()}`)
}

export const clearAllNotifications = () => {
    return $api.get(`?clearAllNotifications&token=${getToken()}`)
}
