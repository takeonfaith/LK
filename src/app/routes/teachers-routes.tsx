/* eslint-disable no-console */
import React from 'react'
import ContactInfoActualizationPage from '@pages/contact-info-actualization'
import DataVerificationPage from '@pages/data-verification'
import DownloadAdminFilesPage from '@pages/download-admin-files'
import PageIsNotReady from '@pages/page-is-not-ready'
import PersonalNotificationsPage from '@pages/personal-notifications'
import { BiBookReader, BiGroup, BiHeadphone, BiIdCard, BiNotification } from 'react-icons/bi'
import {
    FiArrowDownCircle,
    FiBell,
    FiBriefcase,
    FiCalendar,
    FiCheckSquare,
    FiClipboard,
    FiFileText,
    FiMonitor,
    FiStar,
} from 'react-icons/fi'
import { HiOutlineMenuAlt2, HiOutlineUserGroup } from 'react-icons/hi'
import { RiNotificationBadgeLine } from 'react-icons/ri'
import LoginPage from '../../pages/login'
import { generalHiddenRoutes, generalRoutes, IRoutes } from './general-routes'

export const LOGIN_ROUTE = '/login'

export const DATA_VERIFICATION_ROUTE = '/data-verification'
export const APPLICATIONS_ROUTE = '/applications'
export const JOB_ROUTE = '/job'
export const ORDERS_ROUTE = '/staff_orders'
export const DOCUMENT_BLANKS_ROUTE = '/staff_blanks'
export const STUDENTS_LOGINS_ROUTE = '/ad_logins'
export const ALERTS_ROUTE = '/alerts'
export const VAX_ROUTE = '/vaccination'
export const INSTRUCTIONS_ROUTE = '/instructions'
export const DOCLIST_ROUTE = '/doclist'
export const PPS_VOTE_ROUTE = '/pps_vote2020'
export const CHILDREN_ROUTE = '/children'
export const PPS_CONTEST_ROUTE = '/pps_contest'
export const VACATION_ROUTE = '/vacation'
export const KPI_PPS_ROUTE = '/kpi_pss'
export const KPI_ADMIN_ROUTE = '/kpi_admin'
export const SC_NEWS_ROUTE = '/sc_news'
export const OOP_ROUTE = '/oop'
export const CENTERS_ROUTE = '/centers'
export const PORTFOLIO_ROUTE = '/portfolio'
export const INFO_ROUTE = '/info'
export const HELP_SERVICE_ROUTE = '/help_service'
export const DOWNLOAD_AGREEMENTS_FILES_ROUTE = '/download-agreements'
export const PERSONAL_NOTIFICATIONS = '/personal-notifications'
export const CONTACT_INFO_ACTUALIZATION = '/contact-info-actualization'

export const publicRoutes = [
    {
        id: 0,
        title: '',
        icon: '',
        path: LOGIN_ROUTE,
        Component: LoginPage,
    },
]

export const teachersPrivateRoutes: () => IRoutes = () => ({
    ...generalRoutes,
    doclist: {
        id: 'doclist',
        title: 'Ознакомление с документами',
        icon: <FiFileText />,
        path: DOCLIST_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: DOCLIST_ROUTE }),
        color: '',
        isTemplate: false,
    },
    'download-agreements': {
        id: 'download-agreements',
        title: 'Скачать отчеты',
        icon: <FiArrowDownCircle />,
        path: DOWNLOAD_AGREEMENTS_FILES_ROUTE,
        Component: DownloadAdminFilesPage,
        color: '',
        isTemplate: false,
        isAdmin: true,
    },
    alerts: {
        id: 'alerts',
        title: 'Оповещения',
        icon: <FiBell />,
        path: ALERTS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: ALERTS_ROUTE }),
        color: '',
        isTemplate: false,
    },
    'data-verification': {
        id: 'data-verification',
        title: 'Анкета для сверки данных',
        icon: <HiOutlineMenuAlt2 />,
        path: DATA_VERIFICATION_ROUTE,
        Component: DataVerificationPage,
        color: '',
        isTemplate: false,
    },
    instructions: {
        id: 'instructions',
        title: 'Инструкции, положения, правила',
        icon: <FiClipboard />,
        path: INSTRUCTIONS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: INSTRUCTIONS_ROUTE }),
        color: '',
        isTemplate: false,
    },
    'students-logins': {
        id: 'students-logins',
        title: 'Логины студентов',
        icon: <BiGroup />,
        path: STUDENTS_LOGINS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: STUDENTS_LOGINS_ROUTE }),
        color: '',
        isTemplate: false,
    },
    'contact-info-actualization': {
        id: 'contact-info-actualization',
        title: 'Актуализация контактных данных',
        icon: <FiCheckSquare />,
        path: CONTACT_INFO_ACTUALIZATION,
        Component: ContactInfoActualizationPage,
        color: 'orange',
        isTemplate: false,
    },
    'children-route': {
        id: 'children-route',
        title: 'Дети и внуки',
        icon: <HiOutlineUserGroup />,
        path: CHILDREN_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: CHILDREN_ROUTE }),
        color: 'green',
        isTemplate: false,
    },
    calendar: {
        id: 'calendar',
        title: 'График отпусков',
        icon: <FiCalendar />,
        path: VACATION_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: VACATION_ROUTE }),
        color: 'purple',
        isTemplate: false,
    },
    'kpi-pps': {
        id: 'kpi-pps',
        title: 'Рейтинговая система ППС',
        icon: <FiStar />,
        path: KPI_PPS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: KPI_PPS_ROUTE }),
        color: 'pink',
        isTemplate: false,
    },
    'kpi-admin': {
        id: 'kpi-admin',
        title: 'Экспертиза рейтинговой системы ППС',
        icon: <FiMonitor />,
        path: KPI_ADMIN_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: KPI_ADMIN_ROUTE }),
        color: 'darkBlue',
        isTemplate: false,
    },
    'sc-news': {
        id: 'sc-news',
        title: 'Анонсы научных мероприятий',
        icon: <RiNotificationBadgeLine />,
        path: SC_NEWS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: SC_NEWS_ROUTE }),
        color: 'orange',
        isTemplate: false,
    },
    'help-service': {
        id: 'help-service',
        title: 'Цифровые сервисы',
        icon: <FiBriefcase />,
        path: HELP_SERVICE_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: HELP_SERVICE_ROUTE }),
        color: '',
        isTemplate: false,
    },
    orders: {
        id: 'orders',
        title: 'Приказы',
        icon: <FiFileText />,
        path: ORDERS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: ORDERS_ROUTE }),
        color: '',
        isTemplate: false,
    },
    'document-blanks': {
        id: 'document-blanks',
        title: 'Бланки документов',
        icon: <BiGroup />,
        path: DOCUMENT_BLANKS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: DOCUMENT_BLANKS_ROUTE }),
        color: '',
        isTemplate: false,
    },
    'personal-notifications': {
        id: 'personal-notifications',
        title: 'Кадровые уведомления',
        icon: <BiNotification />,
        path: PERSONAL_NOTIFICATIONS,
        Component: PersonalNotificationsPage,
        color: '',
        isNew: true,
        isTemplate: false,
    },
    oop: {
        id: 'oop',
        title: 'Образовательные программы',
        icon: <BiHeadphone />,
        path: OOP_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: OOP_ROUTE }),
        color: '',
        isTemplate: false,
    },
    centers: {
        id: 'centers',
        title: 'Многофункциональный центр',
        icon: <BiHeadphone />,
        path: CENTERS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: CENTERS_ROUTE }),
        color: '',
        isTemplate: false,
    },
    info: {
        id: 'info',
        title: 'Полезная информация',
        icon: <FiFileText />,
        path: INFO_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: INFO_ROUTE }),
        color: '',
        isTemplate: false,
    },
    vax: {
        id: 'vax',
        title: 'Вакцинация',
        icon: <FiBriefcase />,
        path: VAX_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: VAX_ROUTE }),
        color: '',
        isTemplate: false,
    },
    'pps-contest': {
        id: 'pps-contest',
        title: 'Конкурс ППС',
        icon: <BiIdCard />,
        path: PPS_CONTEST_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: PPS_CONTEST_ROUTE }),
        color: '',
        isTemplate: false,
    },
    'pps-vote': {
        id: 'pps-vote',
        title: 'Опрос для проверки уровня цифровой грамотности',
        icon: <BiBookReader />,
        path: PPS_VOTE_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: PPS_VOTE_ROUTE }),
        color: '',
        isTemplate: false,
    },
})

export const teachersHiddenRoutes: () => IRoutes = () => ({ ...generalHiddenRoutes })
