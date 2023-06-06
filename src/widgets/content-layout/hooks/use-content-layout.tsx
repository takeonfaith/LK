import { lkNotificationModel } from '@entities/lk-notifications'
import createNotification from '@entities/lk-notifications/lib/create-notification'
import { TNotification } from '@entities/lk-notifications'
import { menuModel } from '@entities/menu'
import { paymentsModel } from '@entities/payments'
import { settingsModel } from '@entities/settings'
import { userModel } from '@entities/user'
import useIsShowNotification from '@shared/lib/hooks/use-is-show-notification'
import useTheme from '@shared/lib/hooks/use-theme'
import React, { useEffect } from 'react'
import { WhatsNew } from 'widgets'
import useModal from 'widgets/modal'

const useContentLayout = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { notifications } = lkNotificationModel.selectors.useLkNotifications()
    const { data: paymentsData } = paymentsModel.selectors.usePayments()
    const { open } = useModal()
    const isShowNotification = useIsShowNotification()
    // const { seen } = useShowTutorial()

    useEffect(() => {
        if (user) settingsModel.effects.getLocalSettingsFx(user.id)
    }, [user])

    useTheme()
    useEffect(() => {
        if (paymentsData && user) {
            const notifications = [] as TNotification[]
            if (user?.hasAlerts) {
                const notification = createNotification('alert')
                notifications.push(notification)
            }

            if (+paymentsData.dormitory[0]?.balance_currdate > 0) {
                const notification = createNotification('payment-dorm', paymentsData.dormitory[0]?.balance_currdate)

                notifications.push(notification)
            }

            if (+paymentsData.education[0]?.balance_currdate > 0) {
                const notification = createNotification('payment-ed', paymentsData.education[0]?.balance_currdate)

                notifications.push(notification)
            }
            // message test notification
            // eslint-disable-next-line prettier/prettier
            if (true) {
                const chatNotification = createNotification('message', 'Петров Иван Васильевич')
                // const digitalsNotification = createNotification(
                //     'digital-services',
                //     'Справка об обучении по месту требования',
                // )
                const scheduleNotification = createNotification('schedule-session', 'Сегодня предзащита!')
                const pps = createNotification('pps-contest', 'Одобрена активность')
                const version = createNotification('version-update')
                const cadri = createNotification('hr-applications', 'Отпуск успешно перенесен')
                user.user_status === 'staff' && notifications.push(pps)
                user.user_status === 'staff' && notifications.push(cadri)
                notifications.push(scheduleNotification)
                notifications.push(chatNotification)
                notifications.push(version)
            }

            lkNotificationModel.events.initialize(notifications)
        }
        // InstallApp()
    }, [user, paymentsData])

    useEffect(() => {
        menuModel.events.changeNotifications({ page: 'lk-notifications', notifications: notifications.length })
    }, [notifications])

    useEffect(() => {
        if (isShowNotification) {
            isShowNotification && open(<WhatsNew />)
        }
    }, [isShowNotification])
}

export default useContentLayout
