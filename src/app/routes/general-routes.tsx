import { IColors } from '@consts'
import AllPages from '@pages/all-pages'
import AllStudentsPage from '@pages/all-students'
import AllTeachersPage from '@pages/all-teachers'
import CantAccessPage from '@pages/cant-access'
import ChatPage from '@pages/chat'
import ElectronicInteractionAgreementPage from '@pages/electronic-interaction-agreement'
import FeedbackPage from '@pages/feedback'
import ForgotPasswordPage from '@pages/forgot-password'
import Home from '@pages/home'
import InstructionsPage from '@pages/instructions'
import LoginPage from '@pages/login'
import PageIsNotReady from '@pages/page-is-not-ready'
import PaymentsPage from '@pages/payments'
import ProfilePage from '@pages/profile'
import SchedulePage from '@pages/schedule'
import SettingsPage from '@pages/settings'
import Account from '@pages/settings/pages/account'
import Appearance from '@pages/settings/pages/appearance'
import HomeSettings from '@pages/settings/pages/home'
import Security from '@pages/settings/pages/security'
import TeachersSchedule from '@pages/teachers-schedule'
import React from 'react'
import {
    BiBookReader,
    BiGroup,
    BiHeadphone,
    BiIdCard,
    BiMessageRounded,
    BiRuble,
    BiTimeFive,
    BiUserCircle,
} from 'react-icons/bi'
import { FiClipboard, FiHome, FiLayers, FiLock, FiSettings, FiUser, FiXCircle } from 'react-icons/fi'
import { HiOutlineClipboardCheck, HiOutlineViewGrid } from 'react-icons/hi'

export const LOGIN_ROUTE = '/login'
export const FORGOT_PASSWORD_ROUTE = '/forgot-password'

export const ALL_ROUTE = '/all'
export const HOME_ROUTE = '/home'
export const PROFILE_ROUTE = '/profile'
export const CHAT_ROUTE = '/chat'
export const TEMPLATE_CHAT_ROUTE = CHAT_ROUTE + '/:chatId'
export const ELECTRONIC_INTERACTION_AGREEMENT_ROUTE = '/electronic-interaction-agreement'
export const PAYMENTS_ROUTE = '/payments'
export const SCHEDULE_ROUTE = '/schedule'
export const ALL_STUDENTS_ROUTE = '/students'
export const ALL_TEACHERS_ROUTE = '/teachers'
export const PORTFOLIO_ROUTE = '/portfolio'
export const FEEDBACK_ROUTE = '/feedback'
export const CANT_ACCESS_ROUTE = '/cant-access'
export const SETTINGS_ROUTE = '/settings'
export const TEMPLATE_SETTINGS_ROUTE = SETTINGS_ROUTE + '/:id'
export const SETTINGS_APPEARANCE_ROUTE = SETTINGS_ROUTE + '/appearance'
export const SETTINGS_PERSONAl_ROUTE = SETTINGS_ROUTE + '/personal'
export const SETTINGS_SECURITY_ROUTE = SETTINGS_ROUTE + '/security'
export const SETTINGS_HOME_PAGE_ROUTE = SETTINGS_ROUTE + '/home'
export const INSTRUCTIONS_ROUTE = '/instructions'
export const PROJECT_ACTIVITIES_ROUTE = '/project-activities'
export const HELP_ROUTE = '/help'
// hidden
export const TEACHER_SCHEDULE = SCHEDULE_ROUTE + '/:fio'

export interface IRoutes {
    [id: string]: IRoute
}

export interface IRoute {
    id: string
    title: string
    icon: ChildrenType
    path: string
    Component: () => JSX.Element | null
    color: keyof IColors
    isTemplate: boolean
    isAdmin?: boolean
    isNew?: boolean
    show?: boolean
    notifications?: number
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
    },
    home: {
        id: 'home',
        title: 'Домой',
        icon: <FiHome />,
        path: HOME_ROUTE,
        Component: Home,
        color: 'blue',
        isTemplate: false,
    },
    profile: {
        id: 'profile',
        title: 'Профиль',
        icon: <BiUserCircle />,
        path: PROFILE_ROUTE,
        Component: ProfilePage,
        color: 'purple',
        isTemplate: false,
        notifications: 2,
    },
    chat: {
        //ChatPage
        id: 'chat',
        title: 'Сообщения',
        icon: <BiMessageRounded />,
        path: CHAT_ROUTE,
        Component: ChatPage,
        color: 'red',
        isTemplate: true,
        notifications: 4,
    },
    schedule: {
        id: 'schedule',
        title: 'Расписание',
        icon: <BiTimeFive />,
        path: SCHEDULE_ROUTE,
        Component: SchedulePage,
        color: 'pink',
        isTemplate: false,
    },
    payments: {
        id: 'payments',
        title: 'Оплата',
        icon: <BiRuble />,
        path: PAYMENTS_ROUTE,
        Component: PaymentsPage,
        color: 'lightGreen',
        isTemplate: false,
    },
    'electronic-interaction-agreement': {
        id: 'electronic-interaction-agreement',
        title: 'Соглашение об электронном взаимодействии',
        icon: <HiOutlineClipboardCheck />,
        path: ELECTRONIC_INTERACTION_AGREEMENT_ROUTE,
        Component: ElectronicInteractionAgreementPage,
        color: 'blue',
        isTemplate: false,
    },
    'all-students': {
        id: 'all-students',
        title: 'Студенты',
        icon: <BiGroup />,
        path: ALL_STUDENTS_ROUTE,
        Component: AllStudentsPage,
        color: 'darkBlue',
        isTemplate: false,
    },
    'all-teachers': {
        id: 'all-teachers',
        title: 'Преподаватели, сотрудники',
        icon: <BiBookReader />,
        path: ALL_TEACHERS_ROUTE,
        Component: AllTeachersPage,
        color: 'blue',
        isTemplate: false,
    },
    portfolio: {
        id: 'portfolio',
        title: 'Портфолио',
        icon: <BiIdCard />,
        path: PORTFOLIO_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: PORTFOLIO_ROUTE }),
        color: 'blue',
        isTemplate: true,
    },
    feedback: {
        id: 'feedback',
        title: 'Обратная связь',
        icon: <BiHeadphone />,
        path: FEEDBACK_ROUTE,
        Component: FeedbackPage,
        color: 'blue',
        isTemplate: false,
    },
    instructions: {
        id: 'instructions',
        title: 'Инструкции, положения, правила',
        icon: <FiClipboard />,
        path: INSTRUCTIONS_ROUTE,
        Component: InstructionsPage,
        color: 'blue',
        isTemplate: false,
    },
}

export const generalHiddenRoutes: IRoutes = {
    'teachers-schedule': {
        id: 'teachers-schedule',
        title: 'Расписание преподавателя',
        icon: <BiIdCard />,
        path: TEACHER_SCHEDULE,
        Component: TeachersSchedule,
        color: 'blue',
        isTemplate: false,
        show: false,
    },
    'settings-appearance': {
        id: 'settings-appearance',
        title: 'Настройки. Внешний вид',
        icon: <FiLayers />,
        path: SETTINGS_APPEARANCE_ROUTE,
        Component: Appearance,
        color: 'purple',
        isTemplate: true,
        show: true,
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
    },
    'settings-home-page': {
        id: 'settings-home-page',
        title: 'Настройки. Домашний экран',
        icon: <FiHome />,
        path: SETTINGS_HOME_PAGE_ROUTE,
        Component: HomeSettings,
        color: 'blue',
        isTemplate: true,
        show: true,
    },
}
