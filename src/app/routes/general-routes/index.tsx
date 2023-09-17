import { IColors } from '@shared/constants'
import React, { LazyExoticComponent } from 'react'

import LoginPage from '@pages/login'
import PageIsNotReady from '@pages/page-is-not-ready'
import {
    BiBookReader,
    BiGroup,
    BiHeadphone,
    BiIdCard,
    BiMessageRounded,
    BiNews,
    BiPalette,
    BiTimeFive,
    BiUserCircle,
} from 'react-icons/bi'

import { HelpfulInformation } from '@app/routes/teacher-routes/pages'
import {
    Account,
    AlertsPage,
    AllPages,
    AllStudentsPage,
    AllTeachersPage,
    Appearance,
    CantAccessPage,
    DecreisDirectivesPage,
    ElectronicInteractionAgreementPage,
    FeedbackPage,
    ForgotPasswordPage,
    GetYourLoginPage,
    Home,
    // AllStudentsPage,
    // AllTeachersPage,
    InstructionsPage,
    MedicalCertificate,
    MemoFreshmenPage,
    MemoTeacherPage,
    ProfilePage,
    // ChatPage,
    SchedulePage,
    Security,
    SettingsPage,
    TeachersSchedule,
} from './pages'

import LkNotificationsPage from '@pages/lk-notifications'
import { BsFileMedical } from 'react-icons/bs'
import { FiBell, FiClipboard, FiFileText, FiHome, FiLock, FiMenu, FiSettings, FiUser, FiXCircle } from 'react-icons/fi'
import { HiOutlineClipboardCheck, HiOutlineViewGrid } from 'react-icons/hi'
import { DOCLIST_ROUTE } from '../teacher-routes'
import { Size } from '@shared/ui/types'

export const LOGIN_ROUTE = '/login'
export const FORGOT_PASSWORD_ROUTE = '/forgot-password'
export const MEDICAL_CERTIFICATE = '/medical-certificate'

export const ALL_ROUTE = '/all'
export const HOME_ROUTE = '/home'
export const PROFILE_ROUTE = '/profile'
export const CHAT_ROUTE = '/chat'
export const OLD_CHAT_ROUTE = '/messages'
export const TEMPLATE_CHAT_ROUTE = CHAT_ROUTE + '/:chatId'
export const ELECTRONIC_INTERACTION_AGREEMENT_ROUTE = '/electronic-interaction-agreement'
export const PAYMENTS_ROUTE = '/payments'
export const SCHEDULE_ROUTE = '/schedule'
export const ALL_STUDENTS_ROUTE = '/all-students'
export const FILTERED_ALL_STUDENTS_ROUTE = '/all-students/:filter'
export const FILTERED_ALL_TEACHERS_ROUTE = '/all-teachers/:filter'
export const ALL_TEACHERS_ROUTE = '/all-teachers'
export const PORTFOLIO_ROUTE = '/portfolio'
export const DECREIS_DIRECTIVES = '/decreis-directives'
export const FEEDBACK_ROUTE = '/feedback'
export const CANT_ACCESS_ROUTE = '/cant-access'
export const MEMO_FRESHMEN_ROUTE = '/memo-freshmen'
export const GET_YOUR_LOGIN_ROUTE = '/get-your-login'
export const MEMO_TEACHER_ROUTE = '/memo-teacher'
export const SETTINGS_ROUTE = '/settings'
export const TEMPLATE_SETTINGS_ROUTE = SETTINGS_ROUTE + '/:id'
export const SETTINGS_APPEARANCE_ROUTE = SETTINGS_ROUTE + '/appearance'
export const SETTINGS_PERSONAl_ROUTE = SETTINGS_ROUTE + '/personal'
export const SETTINGS_SECURITY_ROUTE = SETTINGS_ROUTE + '/security'
export const SETTINGS_HOME_PAGE_ROUTE = SETTINGS_ROUTE + '/home-page'
export const SETTINGS_CUSTOMIZE_MENU_PAGE_ROUTE = SETTINGS_ROUTE + '/customize-menu'
export const SETTINGS_NOTIFICATIONS = SETTINGS_ROUTE + '/notifications'
export const INSTRUCTIONS_ROUTE = '/instructions'
export const PROJECT_ACTIVITIES_ROUTE = '/project-activity'
export const ALERTS_ROUTE = '/alerts'
export const LK_NOTIFICATIONS_ROUTE = '/lk-notifications'
export const MILITARY_REGISTRATION_ROUTE = '/military-registration'

export const USEFUL_INFO_ROUTE = '/helpful-information'

// hidden
export const FILTER_SCHEDULE = SCHEDULE_ROUTE + '/:filter'
export const TEMPLATE_USEFUL_INFO_ROUTE = USEFUL_INFO_ROUTE + '/:infoType'

export interface IRoutes {
    [id: string]: IRoute
}

export enum Groups {
    GENERAL = 'Основное',
    FINANCES_DOCS = 'Кадровая среда',
    LEARNING_ACTIVITIES = 'Учебная деятельность',
    OTHER = 'Находится в разработке',
    COMMUNICATION = 'Коммуникация',
}
export interface IRoute {
    id: string
    title: string
    icon: ChildrenType
    path: string
    Component: (() => JSX.Element | null) | LazyExoticComponent<() => JSX.Element | null>
    color: keyof IColors
    isTemplate: boolean
    shortTitle?: string
    isAdmin?: boolean
    isNew?: boolean
    show?: boolean
    notifications?: number
    group?: keyof typeof Groups
    keywords?: string[]
    withoutHeader?: boolean
    withoutBackButton?: boolean
    isSubPage?: boolean
    backButtonText?: string
    subPageHeaderTitle?: string
    fallbackPrevPage?: string
    planeHeader?: boolean
    pageSize?: Size
}

export const publicRoutes = [
    {
        id: 0,
        title: '',
        icon: '',
        path: LOGIN_ROUTE,
        Component: LoginPage,
    },
    {
        id: 1,
        title: '',
        icon: '',
        path: FORGOT_PASSWORD_ROUTE,
        Component: ForgotPasswordPage,
    },
    {
        id: 2,
        title: 'Обратная связь',
        icon: <BiHeadphone />,
        path: FEEDBACK_ROUTE,
        Component: FeedbackPage,
    },
    {
        id: 3,
        title: 'Не получается войти в Личный кабинет',
        icon: <FiXCircle />,
        path: CANT_ACCESS_ROUTE,
        Component: CantAccessPage,
    },
    {
        id: 4,
        title: 'Узнать свой логин ЕУЗ',
        icon: '',
        path: GET_YOUR_LOGIN_ROUTE,
        Component: GetYourLoginPage,
    },
    {
        id: 5,
        title: 'Вниманию студентов 1 курса!',
        icon: '',
        path: MEMO_FRESHMEN_ROUTE,
        Component: MemoFreshmenPage,
    },
    {
        id: 6,
        title: 'Вниманию сотрудников!',
        icon: '',
        path: MEMO_TEACHER_ROUTE,
        Component: MemoTeacherPage,
    },
]

export const generalRoutes: IRoutes = {
    all: {
        id: 'all',
        title: 'Все разделы',
        icon: <HiOutlineViewGrid />,
        path: ALL_ROUTE,
        Component: AllPages,
        color: 'lightGreen',
        isTemplate: false,
        show: false,
        group: 'GENERAL',
        withoutBackButton: true,
        pageSize: 'large',
    },
    settings: {
        id: 'settings',
        title: 'Настройки',
        icon: <FiSettings />,
        path: SETTINGS_ROUTE,
        Component: SettingsPage,
        color: 'grey',
        isTemplate: true,
        show: true,
        group: 'GENERAL',
    },
    doclist: {
        id: 'doclist',
        title: 'Ознакомление с документами',
        shortTitle: 'Ознакомление с док...',
        icon: <FiFileText />,
        path: DOCLIST_ROUTE,
        Component: () => <DecreisDirectivesPage />,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
    },
    alerts: {
        id: 'alerts',
        title: 'Новости',
        icon: <BiNews />,
        path: ALERTS_ROUTE,
        Component: AlertsPage,
        color: 'purple',
        isTemplate: false,
        group: 'COMMUNICATION',
        keywords: ['Оповещения'],
    },
    home: {
        id: 'home',
        title: 'Главная',
        icon: <FiHome />,
        path: HOME_ROUTE,
        Component: Home,
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',
        keywords: ['домой'],
        withoutHeader: true,
    },
    profile: {
        id: 'profile',
        title: 'Профиль',
        icon: <BiUserCircle />,
        path: PROFILE_ROUTE,
        Component: ProfilePage,
        color: 'purple',
        isTemplate: false,
        group: 'GENERAL',
        withoutHeader: true,
    },
    'lk-notifications': {
        id: 'lk-notifications',
        title: 'Уведомления',
        icon: <FiBell />,
        path: LK_NOTIFICATIONS_ROUTE,
        Component: LkNotificationsPage,
        color: 'orange',
        isTemplate: false,
        group: 'GENERAL',
        keywords: ['Оповещения'],
        isNew: true,
    },
    'electronic-interaction-agreement': {
        id: 'electronic-interaction-agreement',
        title: 'Соглашение об электронном взаимодействии',
        shortTitle: 'Соглашение об электр...',
        icon: <HiOutlineClipboardCheck />,
        path: ELECTRONIC_INTERACTION_AGREEMENT_ROUTE,
        Component: ElectronicInteractionAgreementPage,
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',
        pageSize: 'small',
    },
    chat: {
        //ChatPage
        id: 'chat',
        title: 'Сообщения',
        icon: <BiMessageRounded />,
        path: CHAT_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: OLD_CHAT_ROUTE }),
        color: 'red',
        isTemplate: true,
        group: 'OTHER',
        keywords: ['чат'],
        planeHeader: true,
    },
    schedule: {
        id: 'schedule',
        title: 'Расписание',
        icon: <BiTimeFive />,
        path: SCHEDULE_ROUTE,
        Component: SchedulePage,
        color: 'pink',
        isTemplate: false,
        group: 'LEARNING_ACTIVITIES',
        keywords: ['экзамены', 'зачеты', 'сессия', 'пересдача'],
        planeHeader: true,
    },
    'all-students': {
        id: 'all-students',
        title: 'Студенты',
        icon: <BiGroup />,
        path: ALL_STUDENTS_ROUTE,
        Component: AllStudentsPage,
        color: 'lightBlue',
        isTemplate: false,
        group: 'COMMUNICATION',
        keywords: ['одногруппники', 'ученики'],
    },
    'all-teachers': {
        id: 'all-teachers',
        title: 'Сотрудники',
        icon: <BiBookReader />,
        path: ALL_TEACHERS_ROUTE,
        Component: AllTeachersPage,
        color: 'orange',
        isTemplate: false,
        group: 'COMMUNICATION',
        keywords: ['преподаватели', 'преподы'],
    },
    // portfolio: {
    //     id: 'portfolio',
    //     title: 'Портфолио',
    //     icon: <BiIdCard />,
    //     path: PORTFOLIO_ROUTE,
    //     Component: () => PageIsNotReady({ oldVersionUrl: PORTFOLIO_ROUTE }),
    //     color: 'blue',
    //     isTemplate: true,
    //     group: 'COMMUNICATION',
    // },
    feedback: {
        id: 'feedback',
        title: 'Обратная связь',
        icon: <BiHeadphone />,
        path: FEEDBACK_ROUTE,
        Component: FeedbackPage,
        color: 'blue',
        isTemplate: false,
        group: 'COMMUNICATION',
    },
    instructions: {
        id: 'instructions',
        title: 'Полезная информация',
        icon: <FiClipboard />,
        path: INSTRUCTIONS_ROUTE,
        Component: InstructionsPage,
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',
        show: false,
    },
    'medical-certificate': {
        id: 'medical-certificate',
        title: 'Предоставление медицинских справок',
        icon: <BsFileMedical />,
        path: MEDICAL_CERTIFICATE,
        Component: MedicalCertificate,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
    },
}

export const generalHiddenRoutes: IRoutes = {
    'teachers-schedule': {
        id: 'teachers-schedule',
        title: 'Расписание преподавателя',
        icon: <BiIdCard />,
        path: FILTER_SCHEDULE,
        Component: TeachersSchedule,
        color: 'blue',
        isTemplate: false,
        show: false,
        group: 'OTHER',
        planeHeader: true,
    },
    'filtered-all-students': {
        id: 'filtered-all-students',
        title: 'Все студенты',
        icon: <BiGroup />,
        path: FILTERED_ALL_STUDENTS_ROUTE,
        Component: AllStudentsPage,
        color: 'blue',
        isTemplate: false,
        show: false,
        group: 'OTHER',
    },
    'filtered-all-teachers': {
        id: 'filtered-all-teachers',
        title: 'Все сотрудники',
        icon: <BiGroup />,
        path: FILTERED_ALL_TEACHERS_ROUTE,
        Component: AllTeachersPage,
        color: 'blue',
        isTemplate: false,
        show: false,
        group: 'OTHER',
    },
    'settings-appearance': {
        id: 'settings-appearance',
        title: 'Настройки. Внешний вид',
        icon: <BiPalette />,
        path: SETTINGS_APPEARANCE_ROUTE,
        Component: Appearance,
        color: 'purple',
        isTemplate: true,
        show: true,
        group: 'OTHER',
        isSubPage: true,
        subPageHeaderTitle: 'Внешний вид',
        fallbackPrevPage: SETTINGS_ROUTE,

        backButtonText: 'Настройки',
    },
    'settings-personal': {
        id: 'settings-personal',
        title: 'Настройки. Аккаунт',
        icon: <FiUser />,
        path: SETTINGS_PERSONAl_ROUTE,
        Component: Account,
        color: 'pink',
        isTemplate: true,
        show: true,
        group: 'OTHER',
        isSubPage: true,
        subPageHeaderTitle: 'Аккаунт',
        fallbackPrevPage: SETTINGS_ROUTE,

        backButtonText: 'Настройки',
    },
    'settings-security': {
        id: 'settings-security',
        title: 'Настройки. Безопасность',
        icon: <FiLock />,
        path: SETTINGS_SECURITY_ROUTE,
        Component: Security,
        color: 'green',
        isTemplate: true,
        show: true,
        group: 'OTHER',
        isSubPage: true,
        subPageHeaderTitle: 'Безопасность',
        fallbackPrevPage: SETTINGS_ROUTE,
        backButtonText: 'Настройки',
    },
    'settings-home-page': {
        id: 'settings-home-page',
        title: 'Настройки. Главная',
        icon: <FiHome />,
        path: SETTINGS_HOME_PAGE_ROUTE,
        Component: () => <></>,
        color: 'blue',
        isTemplate: true,
        show: true,
        group: 'OTHER',
        isSubPage: true,
        subPageHeaderTitle: 'Главная',
        fallbackPrevPage: SETTINGS_ROUTE,

        backButtonText: 'Настройки',
    },
    'settings-customize-menu': {
        id: 'settings-customize-menu',
        title: 'Настройки. Меню',
        icon: <FiMenu />,
        path: SETTINGS_CUSTOMIZE_MENU_PAGE_ROUTE,
        Component: () => <></>,
        color: 'red',
        isTemplate: true,
        show: true,
        isSubPage: true,
        subPageHeaderTitle: 'Меню',
        fallbackPrevPage: SETTINGS_ROUTE,

        backButtonText: 'Настройки',
    },
    'settings-notifications': {
        id: 'settings-notifications',
        title: 'Настройки. Уведомления',
        icon: <FiBell />,
        path: SETTINGS_NOTIFICATIONS,
        Component: () => <></>,
        color: 'orange',
        isTemplate: true,
        show: true,
        isSubPage: true,
        subPageHeaderTitle: 'Уведомления',
        fallbackPrevPage: SETTINGS_ROUTE,

        backButtonText: 'Настройки',
    },
    'useful-info-template': {
        id: `useful-info-template`,
        title: `Полезная информация`,
        icon: '',
        path: TEMPLATE_USEFUL_INFO_ROUTE,
        Component: HelpfulInformation,
        color: 'grey',
        isTemplate: true,
        show: false,
    },
}
