import {
    ALERTS_ROUTE,
    CHAT_ROUTE,
    ELECTRONIC_INTERACTION_AGREEMENT_ROUTE,
    PAYMENTS_ROUTE,
    SCHEDULE_ROUTE,
} from '@app/routes/general-routes'
import { APPLICATIONS_ROUTE } from '@app/routes/routes'
import { DOCLIST_ROUTE, HR_APPLICATIONS_ROUTE, PPS_CONTEST_ROUTE } from '@app/routes/teacher-routes'
import { NotificationType, TNotification } from '../types'

const createNotification = (type: NotificationType, id: string, title?: string, text?: string) => {
    const notifs: Record<NotificationType, TNotification> = {
        alert: {
            id,
            title: title ?? 'Новости',
            text: 'Вам пришло оповещение!',
            type: 'alert',
            goTo: ALERTS_ROUTE,
            duration: 10000,
            pageId: 'alerts',
        },
        schedule: {
            id,
            type: 'schedule',
            title: title ?? 'Скоро начнется пара',
            text: text ?? '',
            goTo: SCHEDULE_ROUTE,
            pageId: 'schedule',
        },
        info: {
            id,
            title: title ?? 'Важная информация!',
            text: text ?? '',
            type: 'info',
        },
        'payment-dorm': {
            id,
            title: title ?? `Долг по общежитию`,
            text: text ?? 'Вам необходимо внести платеж ',
            type: 'payment-dorm',
            goTo: PAYMENTS_ROUTE,
            canClose: false,
            pageId: 'payments',
        },
        'payment-ed': {
            id,
            title: title ?? `Долг по образованию`,
            text: text ?? 'Вам необходимо внести платеж',
            type: 'payment-ed',
            goTo: PAYMENTS_ROUTE,
            canClose: false,
            pageId: 'payments',
        },
        message: {
            id,
            title: title ?? 'Сообщения',
            text: text ?? 'Посмотрите сообщения',
            type: 'message',
            goTo: CHAT_ROUTE,
            pageId: 'chat',
            canClose: false,
        },
        'hr-applications': {
            id,
            title: title ?? '',
            text: text ?? 'У вашей заявки изменился статус',
            type: 'hr-applications',
            goTo: HR_APPLICATIONS_ROUTE,
            pageId: 'hr-applications',
        },
        'kpi-pps': {
            id,
            title: title ?? '',
            text: text ?? 'У вашей заявки изменился статус',
            type: 'kpi-pps',
            goTo: PPS_CONTEST_ROUTE,
            pageId: 'kpi-pps',
        },
        'doc-for-review': {
            id,
            title: title ?? 'Документ для ознакомления',
            text: text ?? '',
            type: 'doc-for-review',
            goTo: DOCLIST_ROUTE,
            pageId: 'doclist',
        },
        'digital-services': {
            id,
            title: title ?? 'Статус заявки изменен',
            text: text ?? '',
            type: 'digital-services',
            goTo: APPLICATIONS_ROUTE,
            pageId: 'applications',
        },
        'version-update': {
            id,
            title: title ?? 'Вышла новая версия',
            text: 'Посмотрите изменения',
            type: 'version-update',
        },
        'electronic-interaction': {
            id,
            title: title ?? 'Документ для подписания',
            text: 'Об электронном взаимодействии',
            type: 'electronic-interaction',
            goTo: ELECTRONIC_INTERACTION_AGREEMENT_ROUTE,
            pageId: 'electronic-interaction-agreement',
        },
    }

    return notifs[type] ?? notifs.info
}

export default createNotification
