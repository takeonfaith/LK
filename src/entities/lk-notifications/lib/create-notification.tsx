import {
    ALERTS_ROUTE,
    CHAT_ROUTE,
    ELECTRONIC_INTERACTION_AGREEMENT_ROUTE,
    PAYMENTS_ROUTE,
    SCHEDULE_ROUTE,
} from '@app/routes/general-routes'
import { DOCLIST_ROUTE, HR_APPLICATIONS_ROUTE, PPS_CONTEST_ROUTE } from '@app/routes/teacher-routes'
import Avatar from '@features/home/ui/molecules/avatar'
import React from 'react'
import { NotificationType, TNotification } from '../types'
import { APPLICATIONS_ROUTE } from '@app/routes/routes'

const createNotification = <T extends NotificationType>(type: T, prop?: string) => {
    const notifs: Record<NotificationType, TNotification> = {
        alert: {
            id: 'alert',
            title: 'Новости',
            text: 'Вам пришло оповещение!',
            type: 'alert',
            goTo: ALERTS_ROUTE,
            duration: 10000,
            pageId: 'alerts',
        },
        'schedule-session': {
            id: 'schedule-session',
            title: 'Скоро экзамен',
            text: prop ?? '',
            type: 'schedule-session',
            goTo: SCHEDULE_ROUTE,
            pageId: 'schedule',
        },
        schedule: {
            id: 'schedule',
            type: 'schedule',
            title: 'Скоро начнется пара',
            text: prop ?? '',
            goTo: SCHEDULE_ROUTE,
            pageId: 'schedule',
        },
        info: {
            id: 'info',
            title: 'Важная информация!',
            text: prop ?? '',
            type: 'info',
        },
        'payment-dorm': {
            id: 'payment-dormitory',
            title: `Долг ${prop} руб. по общежитию`,
            text: `Вам необходимо внести платеж `,
            type: 'payment-dorm',
            goTo: PAYMENTS_ROUTE,
            canClose: false,
            pageId: 'payments',
        },
        'payment-ed': {
            id: 'payment-ed',
            title: `Долг ${prop} руб. по образованию`,
            text: `Вам необходимо внести платеж `,
            type: 'payment-ed',
            goTo: PAYMENTS_ROUTE,
            canClose: false,
            pageId: 'payments',
        },
        message: {
            id: crypto.randomUUID(),
            title: prop ?? 'Пользователь',
            text: 'Новое сообщение',
            type: 'message',
            icon: <Avatar avatar="" name={prop ?? 'Пользователь'} />,
            goTo: CHAT_ROUTE,
            pageId: 'chat',
        },
        'hr-applications': {
            id: crypto.randomUUID(),
            title: prop ?? '',
            text: 'У вашей заявки изменился статус',
            type: 'hr-applications',
            goTo: HR_APPLICATIONS_ROUTE,
            pageId: 'hr-applications',
        },
        'kpi-pps': {
            id: crypto.randomUUID(),
            title: prop ?? '',
            text: 'У вашей заявки изменился статус',
            type: 'kpi-pps',
            goTo: PPS_CONTEST_ROUTE,
            pageId: 'kpi-pps',
        },
        'doc-for-review': {
            id: crypto.randomUUID(),
            title: 'Документ для ознакомления',
            text: prop ?? '',
            type: 'doc-for-review',
            goTo: DOCLIST_ROUTE,
            pageId: 'doclist',
        },
        'digital-services': {
            id: crypto.randomUUID(),
            title: 'Статус заявки изменен',
            text: prop ?? '',
            type: 'digital-services',
            goTo: APPLICATIONS_ROUTE,
            pageId: 'applications',
        },
        'version-update': {
            id: 'new-version',
            title: 'Вышла новая версия',
            text: 'Посмотрите изменения',
            type: 'version-update',
        },
        'electronic-interaction': {
            id: 'electronic-interaction',
            title: 'Документ для подписания',
            text: 'Об электронном взаимодействии',
            type: 'electronic-interaction',
            goTo: ELECTRONIC_INTERACTION_AGREEMENT_ROUTE,
            pageId: 'electronic-interaction-agreement',
        },
    }

    return notifs[type]
}

export default createNotification
