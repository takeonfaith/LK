import { $api } from '@api/config'
import token from '@utils/token'
import { ItemNotification, viewNotificationResponse } from '@api/model/notification'

export const get = () => {
    return $api.get<ItemNotification[]>(`?getDocList&token=${token()}`).then((res) => {
        return {
            ...res,
            data: res.data.map((item) => ({ ...item, document: true })),
        }
    })
}

export const view = (notificationId: string) => {
    return $api.get<viewNotificationResponse>(`?viewDoc=${notificationId}&token=${token()}`)
}
