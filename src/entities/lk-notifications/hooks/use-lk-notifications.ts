import { menuModel } from '@entities/menu'
import { settingsModel } from '@entities/settings'
import { NotificationsSettingsType } from '@entities/settings/lib/get-default-settings'
import { userModel } from '@entities/user'
import { useEffect, useMemo } from 'react'
import { lkNotificationModel } from '..'

const useLkNotifications = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { notifications, loading, loaded } = lkNotificationModel.selectors.useLkNotifications()
    const { settings } = settingsModel.selectors.useSettings()
    const notificationSettings = useMemo(
        () => settings?.['settings-notifications'].property as NotificationsSettingsType,
        [settings?.['settings-notifications']],
    )

    useEffect(() => {
        if (!!user && !!notificationSettings) {
            if (notificationSettings.all !== false && !loaded && !loading) {
                lkNotificationModel.events.initialize({
                    settings: notificationSettings,
                })
            }
        }
    }, [user, notificationSettings, loading, loaded])

    useEffect(() => {
        menuModel.events.changeNotifications({ page: 'lk-notifications', notifications: notifications.length })
    }, [notifications])
}

export default useLkNotifications
