import { isProduction } from '@consts'
import PageIsNotReady from '@pages/page-is-not-ready'
import { LazyExoticComponent } from 'react'
import {
    BiBookReader,
    BiCheckCircle,
    BiGroup,
    BiHeadphone,
    BiIdCard,
    BiMessageRounded,
    BiRuble,
    BiTimeFive,
    BiUserCircle,
} from 'react-icons/bi'
import { FaRegLightbulb } from 'react-icons/fa'
import { FiBriefcase, FiFileText } from 'react-icons/fi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import { IconType } from 'react-icons/lib'

import {
    AcadPerformance,
    ApplicationForSocialScrollarship,
    ApplicationForСertificateOfAttendance,
    ApplicationPaperCall,
    ApplicationSocialAgencies,
    ArbitrayRequestPage,
    ClarificationOfPassportDataApplication,
    ElectronicInteractionAgreementPage,
    Home,
    LoginPage,
    PaymentsPage,
    SchedulePage,
    TeachersSchedule,
} from './pages'

export const HOME_ROUTE = '/home'
export const MESSAGES_ROUTE = '/messages'
export const TEMPLATE_CHAT_ROUTE = '/messages/:chatId'
export const PROJECT_ACTIVITIES_ROUTE = '/project-activities'
export const ELECTRONIC_INTERACTION_AGREEMENT_ROUTE = '/electronic-interaction-agreement'
export const PAYMENTS_ROUTE = '/payments'
export const APPLICATIONS_ROUTE = '/applications'
export const SCHEDULE_ROUTE = '/schedule'
export const JOB_ROUTE = '/job'
export const ALL_STUDENTS_ROUTE = '/students'
export const ALL_TEACHERS_ROUTE = '/teachers'
export const LOGIN_ROUTE = '/login'
export const APPLICATION_FOR_SUPERIOR_ROOM_ROUTE = '/application-for-superior-room'

//hidden routes
export const CLARIFICATION_OF_PASSPORT_DATA_ROUTE = APPLICATIONS_ROUTE + '/clarification-of-passport-data'
export const ARBITRARY_REQUEST_ROUTE = APPLICATIONS_ROUTE + '/arbitrary-request'
export const SOCIAL_SCROLLARSHIP = APPLICATIONS_ROUTE + '/social-scollarship'
export const CERTIFICATE_OF_ATTENDANCE = APPLICATIONS_ROUTE + '/certificate-of-attendance'
export const SOCIAL_AGENCIES = APPLICATIONS_ROUTE + '/social-agencies'
export const PAPER_CALL = APPLICATIONS_ROUTE + '/paper-call'
export const TEACHER_SCHEDULE = SCHEDULE_ROUTE + '/:fio'

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
    Component: (() => JSX.Element | string) | LazyExoticComponent<() => JSX.Element>
    isTemplate: boolean
    isAdmin?: boolean
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
        title: 'Соглашение об электронном взаимодействии',
        icon: HiOutlineClipboardCheck,
        path: ELECTRONIC_INTERACTION_AGREEMENT_ROUTE,
        Component: ElectronicInteractionAgreementPage,
        isTemplate: false,
    },
    2: {
        //ChatPage
        id: 2,
        title: 'Сообщения',
        icon: BiMessageRounded,
        path: MESSAGES_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: MESSAGES_ROUTE }),
        isTemplate: true,
    },
    3: {
        id: 3,
        title: 'Расписание',
        icon: BiTimeFive,
        path: SCHEDULE_ROUTE,
        Component: SchedulePage,
        isTemplate: false,
    },
    4: {
        id: 4,
        title: 'Проектная деятельность',
        icon: FaRegLightbulb,
        path: PROJECT_ACTIVITIES_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: '/projects' }),
        isTemplate: false,
    },
    6: {
        id: 6,
        title: 'Оплата',
        icon: BiRuble,
        path: PAYMENTS_ROUTE,
        Component: PaymentsPage,
        isTemplate: false,
    },
    7: {
        id: 7,
        title: 'Заявления',
        icon: FiFileText,
        path: APPLICATIONS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: '/sprav' }),
        isTemplate: false,
    },
    8: {
        id: 8,
        title: 'Преподаватели',
        icon: BiBookReader,
        path: ALL_TEACHERS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: '/teachers' }),
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
        Component: () => PageIsNotReady({ oldVersionUrl: '/myportfolio' }),
        isTemplate: false,
    },
    11: {
        id: 11,
        title: 'Обратная связь',
        icon: BiHeadphone,
        path: '/feedback',
        Component: () => PageIsNotReady({ oldVersionUrl: '/contact' }),
        isTemplate: false,
    },
    12: {
        id: 12,
        title: 'Студенты',
        icon: BiGroup,
        path: ALL_STUDENTS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: '/stud_blanks' }),
        isTemplate: false,
    },
    13: {
        id: 13,
        title: 'Работа',
        icon: FiBriefcase,
        path: JOB_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: '/job' }),
        isTemplate: false,
    },
}

export const hiddenRoutes: IRoutes = {
    14: {
        id: 14,
        title: 'Уточнение паспортных данных',
        icon: FiBriefcase,
        path: CLARIFICATION_OF_PASSPORT_DATA_ROUTE,
        Component: ClarificationOfPassportDataApplication,
        isTemplate: false,
    },
    15: {
        id: 15,
        title: 'Произвольный запрос',
        icon: FiBriefcase,
        path: ARBITRARY_REQUEST_ROUTE,
        Component: ArbitrayRequestPage,
        isTemplate: false,
    },
    16: {
        id: 16,
        title: 'Расписание преподавателя',
        icon: BiIdCard,
        path: TEACHER_SCHEDULE,
        Component: TeachersSchedule,
        isTemplate: false,
    },
    17: {
        id: 17,
        title: 'Социальная стипендия',
        icon: BiIdCard,
        path: SOCIAL_SCROLLARSHIP,
        Component: ApplicationForSocialScrollarship,
        isTemplate: false,
    },
    18: {
        id: 18,
        title: 'Сертификат об обучении',
        icon: BiIdCard,
        path: CERTIFICATE_OF_ATTENDANCE,
        Component: ApplicationForСertificateOfAttendance,
        isTemplate: false,
    },
    19: {
        id: 19,
        title: 'Справка в соц.учреждения',
        icon: BiIdCard,
        path: SOCIAL_AGENCIES,
        Component: ApplicationSocialAgencies,
        isTemplate: false,
    },
    20: {
        id: 20,
        title: 'Справка-вызов',
        icon: BiIdCard,
        path: PAPER_CALL,
        Component: ApplicationPaperCall,
        isTemplate: false,
    },
}
