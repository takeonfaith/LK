import { ALERTS_ROUTE, CHAT_ROUTE, PAYMENTS_ROUTE, SCHEDULE_ROUTE } from '@app/routes/general-routes'
import { DOCLIST_ROUTE, HR_APPLICATIONS_ROUTE, PPS_CONTEST_ROUTE } from '@app/routes/teacher-routes'
import Avatar from '@features/home/ui/molecules/avatar'
import React from 'react'
import { NotificationType, TNotification } from '../types'
import { APPLICATIONS_ROUTE } from '@app/routes/routes'

const createNotification = <T extends NotificationType>(type: T, prop?: string) => {
    const notifs: Record<NotificationType, TNotification> = {
        alert: {
            id: 'alert',
            title: 'У вас новые оповещения',
            text: 'Вам пришло уведомление!',
            type: 'alert',
            goTo: ALERTS_ROUTE,
            duration: 10000,
        },
        'schedule-session': {
            id: 'schedule-session',
            title: 'Скоро экзамен',
            text: prop ?? '',
            type: 'schedule-session',
            goTo: SCHEDULE_ROUTE,
        },
        schedule: {
            id: 'schedule',
            type: 'schedule',
            title: 'Скоро начнется пара',
            text: prop ?? '',
            goTo: SCHEDULE_ROUTE,
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
        },
        'payment-ed': {
            id: 'payment-ed',
            title: `Долг ${prop} руб. по образованию`,
            text: `Вам необходимо внести платеж `,
            type: 'payment-ed',
            goTo: PAYMENTS_ROUTE,
            canClose: false,
        },
        message: {
            id: crypto.randomUUID(),
            title: prop ?? 'Пользователь',
            text: 'Новое сообщение',
            type: 'message',
            icon: <Avatar avatar="" name={prop ?? 'Пользователь'} />,
            goTo: CHAT_ROUTE,
        },
        'hr-applications': {
            id: crypto.randomUUID(),
            title: prop ?? '',
            text: 'У вашей заявки изменился статус',
            type: 'hr-applications',
            goTo: HR_APPLICATIONS_ROUTE,
        },
        'pps-contest': {
            id: crypto.randomUUID(),
            title: prop ?? '',
            text: 'У вашей заявки изменился статус',
            type: 'pps-contest',
            goTo: PPS_CONTEST_ROUTE,
        },
        'doc-for-review': {
            id: crypto.randomUUID(),
            title: 'Документ для ознакомления',
            text: prop ?? '',
            type: 'doc-for-review',
            goTo: DOCLIST_ROUTE,
        },
        'digital-services': {
            id: crypto.randomUUID(),
            title: 'Статус заявки изменен',
            text: prop ?? '',
            type: 'digital-services',
            goTo: APPLICATIONS_ROUTE,
        },
        'version-update': {
            id: 'new-version',
            title: 'Вышла новая версия',
            text: 'Посмотрите изменения',
            type: 'version-update',
        },
    }

    return notifs[type]
}

export default createNotification
