import { electronicInteractionModel } from '@entities/electronic-interaction'
import { paymentsModel } from '@entities/payments'
import { useEffect } from 'react'
import { TNotification, lkNotificationModel } from '..'
import createNotification from '../lib/create-notification'
import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'

const useLkNotifications = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { notifications } = lkNotificationModel.selectors.useLkNotifications()
    const { data: paymentsData } = paymentsModel.selectors.usePayments()
    const { data: electionicAgreement } = electronicInteractionModel.selectors.useElectronicInteraction()

    useEffect(() => {
        if (paymentsData && user && electionicAgreement) {
            const notifications = [] as TNotification[]

            if (!electionicAgreement?.status) {
                const notification = createNotification('electronic-interaction')
                notifications.push(notification)
            }

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
                const pps = createNotification('kpi-pps', 'Одобрена активность')
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
    }, [user, paymentsData, electionicAgreement])

    useEffect(() => {
        menuModel.events.changeNotifications({ page: 'lk-notifications', notifications: notifications.length })
    }, [notifications])
}

export default useLkNotifications
