import { NotificationsSettingsType } from '@entities/settings/lib/get-default-settings'
import { NotificationsResponse } from '@shared/api/lk-notification-api'

const typeSettingsDictionary: Record<string, keyof NotificationsSettingsType> = {
    message: 'messages',
    'doc-for-review': 'doclist',
    'version-update': 'newVersion',
    'digital-services': 'applications',
    alert: 'news',
    schedule: 'schedule',
}

export const filterNotificationsViaSettings = (settings: NotificationsSettingsType, data: NotificationsResponse) =>
    data.filter(({ type }) => settings[typeSettingsDictionary[type]])
