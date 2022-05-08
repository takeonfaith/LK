import AllPages from '@pages/all-pages'
import ElectronicInteractionAgreementPage from '@pages/electronic-interaction-agreement'
import Home from '@pages/home'
import LoginPage from '@pages/login'
import PageIsNotReady from '@pages/page-is-not-ready'
import PaymentsPage from '@pages/payments'
import ProfilePage from '@pages/profile'
import SchedulePage from '@pages/schedule'
import SettingsPage from '@pages/settings'
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
import { FaRegLightbulb } from 'react-icons/fa'
import { FiHome, FiSettings } from 'react-icons/fi'
import { HiOutlineClipboardCheck, HiOutlineViewGrid } from 'react-icons/hi'

export const LOGIN_ROUTE = '/login'

export const ALL_ROUTE = '/all'
export const HOME_ROUTE = '/home'
export const PROFILE_ROUTE = '/profile'
export const CHAT_ROUTE = '/chat'
export const TEMPLATE_CHAT_ROUTE = CHAT_ROUTE + '/:chatId'
export const ELECTRONIC_INTERACTION_AGREEMENT_ROUTE = '/electronic-interaction-agreement'
export const PAYMENTS_ROUTE = '/payments'
export const SCHEDULE_ROUTE = '/schedule'
export const PROJECT_ACTIVITIES_ROUTE = '/project-activities'
export const ALL_STUDENTS_ROUTE = '/students'
export const ALL_TEACHERS_ROUTE = '/teachers'
export const PORTFOLIO_ROUTE = '/portfolio'
export const FEEDBACK_ROUTE = '/feedback'
export const SETTINGS_ROUTE = '/settings'

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
    color: string
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
        Component: () => SettingsPage({ currentPage: 0 }),
        color: 'grey',
        isTemplate: false,
        show: true,
    },
    home: {
        id: 'home',
        title: 'Главная',
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
    'project-activity': {
        id: 'project-activity',
        title: 'Проектная деятельность',
        icon: <FaRegLightbulb />,
        path: PROJECT_ACTIVITIES_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: '/projects' }),
        color: 'yellow',
        isTemplate: false,
    },
    'all-students': {
        id: 'all-students',
        title: 'Студенты',
        icon: <BiGroup />,
        path: ALL_STUDENTS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: ALL_STUDENTS_ROUTE }),
        color: 'darkBlue',
        isTemplate: false,
    },
    'all-teachers': {
        id: 'all-teachers',
        title: 'Преподаватели, сотрудники',
        icon: <BiBookReader />,
        path: ALL_TEACHERS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: ALL_TEACHERS_ROUTE }),
        color: '',
        isTemplate: false,
    },
    portfolio: {
        id: 'portfolio',
        title: 'Портфолио',
        icon: <BiIdCard />,
        path: PORTFOLIO_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: PORTFOLIO_ROUTE }),
        color: '',
        isTemplate: true,
    },
    feedback: {
        id: 'feedback',
        title: 'Обратная связь',
        icon: <BiHeadphone />,
        path: FEEDBACK_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: '/contact' }),
        color: '',
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
        color: '',
        isTemplate: false,
    },
}
