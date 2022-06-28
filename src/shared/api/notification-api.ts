import { $api } from '@api/config'
import token from '@utils/token'
import { Notifications, viewNotificationResponse } from '@api/model/notification'

export const get = () => {
    return $api.get<Notifications>(`?getNotification&token=${token()}`)
}

export const view = (notificationId: string) => {
    return $api.get<viewNotificationResponse>(`?viewNotification=${notificationId}&token=${token()}`)
}
