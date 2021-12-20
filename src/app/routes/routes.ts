import {
    BiBookReader,
    BiCheckCircle,
    BiGroup,
    BiHeadphone,
    BiIdCard,
    BiMessageRounded,
    BiTimeFive,
    BiUserCircle,
} from 'react-icons/bi'
import { FaRegLightbulb } from 'react-icons/fa'
import { FiBriefcase, FiDollarSign, FiFileText } from 'react-icons/fi'

import Home from '../../pages/home'
import LoginPage from '../../pages/login'
import MessagesPage from '../../pages/all-messages'
import ProjectActivitiesPage from '../../pages/project-activities'
import JobPage from '../../pages/job'
import SchedulePage from '../../pages/schedule'
import ApplicationsPage from '../../pages/applications'
import PaymentsPage from '../../pages/payments'
import AllTeachersPage from '../../pages/all-teachers'
import AllStudentsPage from '../../pages/all-students'
import AcadPerformance from '../../pages/acad-performance'
import FeedbackPage from '../../pages/feedback'
import PortfolioPage from '../../pages/portfolio'
import { IconType } from 'react-icons/lib'
import PageIsNotReady from '@pages/page-is-not-ready'

export const HOME_ROUTE = '/home'
export const MESSAGES_ROUTE = '/messages'
export const TEMPLATE_CHAT_ROUTE = '/messages/:chatId'
export const PROJECT_ACTIVITIES_ROUTE = '/project-activities'
export const PAYMENTS_ROUTE = '/payments'
export const APPLICATIONS_ROUTE = '/applications'
export const SCHEDULE_ROUTE = '/schedule'
export const JOB_ROUTE = '/job'
export const ALL_STUDENTS_ROUTE = '/students'
export const ALL_TEACHERS_ROUTE = '/teachers'
export const LOGIN_ROUTE = '/login'

export const publicRoutes = [
    {
        id: 0,
        title: '',
        icon: '',
        path: LOGIN_ROUTE,
        Component: LoginPage,
    },
]

type routeId = number

export interface IRoute {
    id: routeId
    title: string
    icon: IconType
    path: string
    Component: () => JSX.Element
    isTemplate: boolean
}

export interface IRoutes {
    [id: routeId]: IRoute
}

export const privateRoutes: IRoutes = {
    0: {
        id: 0,
        title: 'Профиль',
        icon: BiUserCircle,
        path: HOME_ROUTE,
        Component: Home,
        isTemplate: false,
    },
    1: {
        id: 1,
        title: 'Сообщения',
        icon: BiMessageRounded,
        path: MESSAGES_ROUTE,
        Component: PageIsNotReady,
        isTemplate: false,
    },
    2: {
        id: 2,
        title: 'Расписание',
        icon: BiTimeFive,
        path: SCHEDULE_ROUTE,
        Component: SchedulePage,
        isTemplate: true,
    },
    3: {
        id: 3,
        title: 'ПД',
        icon: FaRegLightbulb,
        path: PROJECT_ACTIVITIES_ROUTE,
        Component: PageIsNotReady,
        isTemplate: false,
    },
    4: {
        id: 4,
        title: 'Работа',
        icon: FiBriefcase,
        path: JOB_ROUTE,
        Component: PageIsNotReady,
        isTemplate: false,
    },
    5: {
        id: 5,
        title: 'Оплата',
        icon: FiDollarSign,
        path: PAYMENTS_ROUTE,
        Component: PaymentsPage,
        isTemplate: false,
    },
    6: {
        id: 6,
        title: 'Заявления',
        icon: FiFileText,
        path: APPLICATIONS_ROUTE,
        Component: PageIsNotReady,
        isTemplate: false,
    },
    7: {
        id: 7,
        title: 'Студенты',
        icon: BiGroup,
        path: ALL_STUDENTS_ROUTE,
        Component: PageIsNotReady,
        isTemplate: false,
    },
    8: {
        id: 8,
        title: 'Преподаватели',
        icon: BiBookReader,
        path: ALL_TEACHERS_ROUTE,
        Component: PageIsNotReady,
        isTemplate: false,
    },
    9: {
        id: 9,
        title: 'Успеваемость',
        icon: BiCheckCircle,
        path: '/performance',
        Component: AcadPerformance,
        isTemplate: false,
    },
    10: {
        id: 10,
        title: 'Портфолио',
        icon: BiIdCard,
        path: '/portfolio',
        Component: PageIsNotReady,
        isTemplate: false,
    },
    11: {
        id: 11,
        title: 'Обратная связь',
        icon: BiHeadphone,
        path: '/feedback',
        Component: PageIsNotReady,
        isTemplate: false,
    },
}
