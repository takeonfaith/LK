import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import { useEffect } from 'react'
import { lkNotificationModel } from '..'
import { settingsModel } from '@entities/settings'
import { NotificationsSettingsType } from '@entities/settings/lib/get-default-settings'

const useLkNotifications = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { notifications } = lkNotificationModel.selectors.useLkNotifications()
    const { settings } = settingsModel.selectors.useSettings()
    const notificationSettings = settings?.['settings-notifications'].property as NotificationsSettingsType

    useEffect(() => {
        if (!!user && !!notificationSettings) {
            if (notificationSettings.all !== false && notifications.length === 0) {
                lkNotificationModel.events.initialize({
                    settings: notificationSettings,
                })
            }
        }
    }, [user, notificationSettings])

    useEffect(() => {
        menuModel.events.changeNotifications({ page: 'lk-notifications', notifications: notifications.length })
    }, [notifications])
}

export default useLkNotifications
