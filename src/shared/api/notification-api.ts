import { $api } from '@api/config'
import getToken from '@utils/token'
import { Notifications, viewNotificationResponse } from '@api/model/notification'

export const get = () => {
    return $api.get<Notifications>(`?getNotification&token=${getToken()}`)
}

export const view = (notificationId: string) => {
    return $api.get<viewNotificationResponse>(`?viewNotification=${notificationId}&token=${getToken()}`)
}
