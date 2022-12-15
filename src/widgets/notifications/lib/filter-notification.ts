import { ItemNotification, Notifications } from '@api/model/notification'

const checkNotifications = (search: string, selected: string | number, notifications: Notifications) => {
    const result: { [index: string]: ItemNotification[] } = {}

    let listNotification: ItemNotification[] = []

    const checkNotification = (notification: ItemNotification) => {
        if ('document' in notification) {
            const { viewed, name } = notification
            const searchResult = name?.includes(search) || !search.length
            if (selected === 'all' && searchResult) return true
            return !viewed && selected !== 'all' && searchResult
        }

        const { viewed, post, event } = notification
        const searchResult = event?.includes(search) || post?.includes(search) || !search.length
        if (selected === 'all' && searchResult) return true
        return !viewed && selected !== 'all' && searchResult
    }
    Object.entries(notifications).map(([key, items]) => {
        listNotification = []
        items.map((notification: ItemNotification) => {
            if (checkNotification(notification)) {
                listNotification.push(notification)
            }
        })

        result[key] = listNotification
    })
    return result
}

export default checkNotifications
