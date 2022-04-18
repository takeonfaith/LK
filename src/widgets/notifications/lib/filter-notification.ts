import { ItemNotification, Notifications } from '@api/model/notification'

const checkNotifications = (search: string, selected: string | number, notifications: Notifications) => {
    const result: { [index: string]: ItemNotification[] } = {}

    let listNotification: ItemNotification[] = []

    const checkNotification = (notification: ItemNotification) => {
        const { viewed, post, event } = notification
        const searchResult = event?.includes(search) || post?.includes(search) || !search.length

        if (selected === 'all' && searchResult) return true
        return !viewed && selected !== 'all' && searchResult
    }
    Object.keys(notifications).map((key: string) => {
        listNotification = []
        notifications[key].map((notification: ItemNotification) => {
            if (checkNotification(notification)) {
                listNotification.push(notification)
            }
        })

        result[key] = listNotification
    })
    return result
}

export default checkNotifications
