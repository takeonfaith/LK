import { IColors } from '@consts'
import AllPages from '@pages/all-pages'
import CantAccessPage from '@pages/cant-access'
import FeedbackPage from '@pages/feedback'
import GetYourLoginPage from '@pages/get-your-login'
import MemoFreshmenPage from '@pages/memo-freshmen'
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
import CustomizeMenu from '@pages/settings/pages/customize-menu'
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
import { FiClipboard, FiHome, FiLayers, FiLock, FiMenu, FiSettings, FiUser, FiXCircle } from 'react-icons/fi'
import { HiOutlineViewGrid } from 'react-icons/hi'

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
export const MEMO_FRESHMEN_ROUTE = '/memo-freshmen'
export const GET_YOUR_LOGIN_ROUTE = '/GET-YOUR-LOGIN'
export const SETTINGS_ROUTE = '/settings'
export const TEMPLATE_SETTINGS_ROUTE = SETTINGS_ROUTE + '/:id'
export const SETTINGS_APPEARANCE_ROUTE = SETTINGS_ROUTE + '/appearance'
export const SETTINGS_PERSONAl_ROUTE = SETTINGS_ROUTE + '/personal'
export const SETTINGS_SECURITY_ROUTE = SETTINGS_ROUTE + '/security'
export const SETTINGS_HOME_PAGE_ROUTE = SETTINGS_ROUTE + '/home'
export const SETTINGS_CUSTOMIZE_MENU_PAGE_ROUTE = SETTINGS_ROUTE + '/customize-menu'
export const INSTRUCTIONS_ROUTE = '/instructions'
export const PROJECT_ACTIVITIES_ROUTE = '/project-activities'

// hidden
export const TEACHER_SCHEDULE = SCHEDULE_ROUTE + '/:fio'

export interface IRoutes {
    [id: string]: IRoute
}

export enum Groups {
    GENERAL = 'Основное',
    FINANCES_DOCS = 'Финансы и документы',
    LEARNING_ACTIVITIES = 'Учебная деятельность',
    OTHER = 'Находится в разработке',
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
    group?: keyof typeof Groups
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
    home: {
        id: 'home',
        title: 'Главная',
        icon: <FiHome />,
        path: HOME_ROUTE,
        Component: Home,
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',
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
    },
    chat: {
        //ChatPage
        id: 'chat',
        title: 'Сообщения',
        icon: <BiMessageRounded />,
        path: CHAT_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: CHAT_ROUTE }),
        color: 'red',
        isTemplate: true,
        group: 'OTHER',
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
    },
    payments: {
        id: 'payments',
        title: 'Договоры и оплаты',
        icon: <BiRuble />,
        path: PAYMENTS_ROUTE,
        Component: PaymentsPage,
        color: 'lightGreen',
        isTemplate: false,
        group: 'FINANCES_DOCS',
    },
    'all-students': {
        id: 'all-students',
        title: 'Одногруппники',
        icon: <BiGroup />,
        path: ALL_STUDENTS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: ALL_STUDENTS_ROUTE }),
        color: 'darkBlue',
        isTemplate: false,
        group: 'OTHER',
    },
    'all-teachers': {
        id: 'all-teachers',
        title: 'Преподаватели',
        icon: <BiBookReader />,
        path: ALL_TEACHERS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: ALL_TEACHERS_ROUTE }),
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
    },
    portfolio: {
        id: 'portfolio',
        title: 'Портфолио',
        icon: <BiIdCard />,
        path: PORTFOLIO_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: PORTFOLIO_ROUTE }),
        color: 'blue',
        isTemplate: true,
        group: 'OTHER',
    },
    feedback: {
        id: 'feedback',
        title: 'Обратная связь',
        icon: <BiHeadphone />,
        path: FEEDBACK_ROUTE,
        Component: FeedbackPage,
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
    },
    instructions: {
        id: 'instructions',
        title: 'Инструкции, положения, правила',
        icon: <FiClipboard />,
        path: INSTRUCTIONS_ROUTE,
        Component: InstructionsPage,
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',
        show: false,
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
        group: 'OTHER',
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
        group: 'OTHER',
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
        group: 'OTHER',
    },
    'settings-customize-menu': {
        id: 'settings-customize-menu',
        title: 'Настройки. Меню',
        icon: <FiMenu />,
        path: SETTINGS_CUSTOMIZE_MENU_PAGE_ROUTE,
        Component: CustomizeMenu,
        color: 'red',
        isTemplate: true,
        show: true,
    },
}
