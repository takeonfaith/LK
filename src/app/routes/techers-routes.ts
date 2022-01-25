import DataVerificationPage from '@pages/data-verification'
import PageIsNotReady from '@pages/page-is-not-ready'
import PaymentsPage from '@pages/payments'
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
import { FiBell, FiBriefcase, FiCalendar, FiClipboard, FiFileText } from 'react-icons/fi'
import { HiOutlineMenuAlt2, HiOutlineUserGroup } from 'react-icons/hi'
import { IconType } from 'react-icons/lib'
import Home from '../../pages/home'
import LoginPage from '../../pages/login'

export const LOGIN_ROUTE = '/login'

export const HOME_ROUTE = '/home'
export const MESSAGES_ROUTE = '/messages'
export const TEMPLATE_CHAT_ROUTE = '/messages/:chatId'
export const PROJECT_ACTIVITIES_ROUTE = '/proj_main'
export const DATA_VERIFICATION_ROUTE = '/data-verification'
export const PAYMENTS_ROUTE = '/payments'
export const APPLICATIONS_ROUTE = '/applications'
export const SCHEDULE_ROUTE = '/rasp_teachers'
export const JOB_ROUTE = '/job'
export const ORDERS_ROUTE = '/staff_orders'
export const ALL_STUDENTS_ROUTE = '/students'
export const ALL_TEACHERS_ROUTE = '/teachers'
export const DOCUMENT_BLANKS_ROUTE = '/staff_blanks'
export const STUDENTS_LOGINS_ROUTE = '/ad_logins'
export const FEEDBACK_ROUTE = '/contact'
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

export const teachersPrivateRoutes: IRoutes = {
    0: {
        id: 0,
        title: 'Профиль',
        icon: BiUserCircle,
        path: HOME_ROUTE,
        Component: () => Home(),
        isTemplate: false,
    },
    1: {
        id: 1,
        title: 'Сообщения',
        icon: BiMessageRounded,
        path: MESSAGES_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: MESSAGES_ROUTE }),
        isTemplate: false,
    },
    2: {
        id: 2,
        title: 'Расписание',
        icon: BiTimeFive,
        path: SCHEDULE_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: SCHEDULE_ROUTE }),
        isTemplate: true,
    },
    3: {
        id: 3,
        title: 'Оповещения',
        icon: FiBell,
        path: ALERTS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: ALERTS_ROUTE }),
        isTemplate: false,
    },
    4: {
        id: 4,
        title: 'Анкета для сверки данных',
        icon: HiOutlineMenuAlt2,
        path: DATA_VERIFICATION_ROUTE,
        Component: DataVerificationPage,
        isTemplate: false,
    },
    5: {
        id: 5,
        title: 'Инструкции, положения, правила',
        icon: FiClipboard,
        path: INSTRUCTIONS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: INSTRUCTIONS_ROUTE }),
        isTemplate: false,
    },
    6: {
        id: 6,
        title: 'Ознакомление с документами',
        icon: FiFileText,
        path: DOCLIST_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: DOCLIST_ROUTE }),
        isTemplate: false,
    },
    7: {
        id: 7,
        title: 'Логины студентов',
        icon: BiGroup,
        path: STUDENTS_LOGINS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: STUDENTS_LOGINS_ROUTE }),
        isTemplate: false,
    },
    8: {
        id: 8,
        title: 'Опрос для проверки уровня цифровой грамотности',
        icon: BiBookReader,
        path: PPS_VOTE_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: PPS_VOTE_ROUTE }),
        isTemplate: false,
    },
    9: {
        id: 9,
        title: 'Дети и внуки',
        icon: HiOutlineUserGroup,
        path: CHILDREN_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: CHILDREN_ROUTE }),
        isTemplate: false,
    },
    10: {
        id: 10,
        title: 'Конкурс ППС',
        icon: BiIdCard,
        path: PPS_CONTEST_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: PPS_CONTEST_ROUTE }),
        isTemplate: false,
    },
    12: {
        id: 12,
        title: 'График отпусков',
        icon: FiCalendar,
        path: VACATION_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: VACATION_ROUTE }),
        isTemplate: false,
    },
    13: {
        id: 13,
        title: 'Рейтинговая система ППС',
        icon: BiUserCircle,
        path: KPI_PPS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: KPI_PPS_ROUTE }),
        isTemplate: false,
    },
    14: {
        id: 14,
        title: 'Экспертиза рейтинговой системы ППС',
        icon: BiMessageRounded,
        path: KPI_ADMIN_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: KPI_ADMIN_ROUTE }),
        isTemplate: false,
    },
    15: {
        id: 15,
        title: 'Анонсы научных мероприятий',
        icon: FaRegLightbulb,
        path: SC_NEWS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: SC_NEWS_ROUTE }),
        isTemplate: false,
    },
    16: {
        id: 16,
        title: 'Цифровые сервисы',
        icon: FiBriefcase,
        path: HELP_SERVICE_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: HELP_SERVICE_ROUTE }),
        isTemplate: false,
    },
    17: {
        id: 17,
        title: 'Проектная деятельность',
        icon: FaRegLightbulb,
        path: PROJECT_ACTIVITIES_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: PROJECT_ACTIVITIES_ROUTE }),
        isTemplate: false,
    },
    18: {
        id: 18,
        title: 'Приказы',
        icon: FiFileText,
        path: ORDERS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: ORDERS_ROUTE }),
        isTemplate: false,
    },
    19: {
        id: 19,
        title: 'Бланки документов',
        icon: BiGroup,
        path: DOCUMENT_BLANKS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: DOCUMENT_BLANKS_ROUTE }),
        isTemplate: false,
    },
    20: {
        id: 20,
        title: 'Студенты',
        icon: BiBookReader,
        path: ALL_STUDENTS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: ALL_STUDENTS_ROUTE }),
        isTemplate: false,
    },
    21: {
        id: 21,
        title: 'Преподаватели, сотрудники',
        icon: BiCheckCircle,
        path: ALL_TEACHERS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: ALL_TEACHERS_ROUTE }),
        isTemplate: false,
    },
    22: {
        id: 22,
        title: 'Сведения об оплатах',
        icon: BiIdCard,
        path: PAYMENTS_ROUTE,
        Component: PaymentsPage,
        isTemplate: false,
    },
    23: {
        id: 23,
        title: 'Образовательные программы',
        icon: BiHeadphone,
        path: OOP_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: OOP_ROUTE }),
        isTemplate: false,
    },
    24: {
        id: 24,
        title: 'Многофункциональный центр',
        icon: BiHeadphone,
        path: CENTERS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: CENTERS_ROUTE }),
        isTemplate: false,
    },
    25: {
        id: 25,
        title: 'Электронные портфолио',
        icon: BiTimeFive,
        path: PORTFOLIO_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: PORTFOLIO_ROUTE }),
        isTemplate: true,
    },
    // 26: {
    //     id: 26,
    //     title: 'Электронная библиотека Московского Политеха',
    //     icon: FaRegLightbulb,
    //     path: PROJECT_ACTIVITIES_ROUTE,
    //     Component: () => PageIsNotReady({ oldVersionUrl: 'projects' }),
    //     isTemplate: false,
    // },
    // 27: {
    //     id: 27,
    //     title: 'Библиотечно-информационный центр',
    //     icon: FiBriefcase,
    //     path: JOB_ROUTE,
    //     Component: () => PageIsNotReady({ oldVersionUrl: 'job' }),
    //     isTemplate: false,
    // },
    // 28: {
    //     id: 28,
    //     title: 'Электронный каталог библиотеки Электростальского института',
    //     icon: FiDollarSign,
    //     path: PAYMENTS_ROUTE,
    //     Component: () => PageIsNotReady({ oldVersionUrl: 'messages' }),
    //     isTemplate: false,
    // },
    29: {
        id: 29,
        title: 'Полезная информация',
        icon: FiFileText,
        path: INFO_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: INFO_ROUTE }),
        isTemplate: false,
    },
    30: {
        id: 30,
        title: 'Обратная связь',
        icon: BiGroup,
        path: FEEDBACK_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: FEEDBACK_ROUTE }),
        isTemplate: false,
    },
    31: {
        id: 4,
        title: 'Вакцинация',
        icon: FiBriefcase,
        path: VAX_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: VAX_ROUTE }),
        isTemplate: false,
    },
}
