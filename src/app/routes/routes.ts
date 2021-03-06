import ArbitrayRequestPage from '@pages/applications/pages/arbitrary-request'
import ApplicationForŠ”ertificateOfAttendance from '@pages/applications/pages/certificate-of-attendance'
import ClarificationOfPassportDataApplication from '@pages/applications/pages/clarification-of-passport-data/arbitrary-request'
import ApplicationPaperCall from '@pages/applications/pages/paper-call'
import ApplicationSocialAgencies from '@pages/applications/pages/social-agencies'
import ApplicationForSocialScrollarship from '@pages/applications/pages/social-scollarship'
import ElectronicInteractionAgreementPage from '@pages/electronic-interaction-agreement'
import InstructionsPage from '@pages/instructions'
import PageIsNotReady from '@pages/page-is-not-ready'
import PaymentsPage from '@pages/payments'
import TeachersSchedule from '@pages/teachers-schedule'
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
import { FiBriefcase, FiClipboard, FiFileText } from 'react-icons/fi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import { IconType } from 'react-icons/lib'
import AcadPerformance from '../../pages/acad-performance'
import Home from '../../pages/home'
import LoginPage from '../../pages/login'
import SchedulePage from '../../pages/schedule'

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
export const INSTRUCTIONS_ROUTE = '/instructions'

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
    Component: () => JSX.Element | string
    isTemplate: boolean
    isAdmin?: boolean
}

export interface IRoutes {
    [id: routeId]: IRoute
}

export const privateRoutes: IRoutes = {
    0: {
        id: 0,
        title: 'ŠŃŠ¾ŃŠøŠ»Ń',
        icon: BiUserCircle,
        path: HOME_ROUTE,
        Component: Home,
        isTemplate: false,
    },
    1: {
        id: 1,
        title: 'Š”Š¾Š³Š»Š°ŃŠµŠ½ŠøŠµ Š¾Š± ŃŠ»ŠµŠŗŃŃŠ¾Š½Š½Š¾Š¼ Š²Š·Š°ŠøŠ¼Š¾Š“ŠµŠ¹ŃŃŠ²ŠøŠø',
        icon: HiOutlineClipboardCheck,
        path: ELECTRONIC_INTERACTION_AGREEMENT_ROUTE,
        Component: ElectronicInteractionAgreementPage,
        isTemplate: false,
    },
    2: {
        //ChatPage
        id: 2,
        title: 'Š”Š¾Š¾Š±ŃŠµŠ½ŠøŃ',
        icon: BiMessageRounded,
        path: MESSAGES_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: MESSAGES_ROUTE }),
        isTemplate: true,
    },
    3: {
        id: 3,
        title: 'Š Š°ŃŠæŠøŃŠ°Š½ŠøŠµ',
        icon: BiTimeFive,
        path: SCHEDULE_ROUTE,
        Component: SchedulePage,
        isTemplate: false,
    },
    4: {
        id: 4,
        title: 'ŠŃŠ¾ŠµŠŗŃŠ½Š°Ń Š“ŠµŃŃŠµŠ»ŃŠ½Š¾ŃŃŃ',
        icon: FaRegLightbulb,
        path: PROJECT_ACTIVITIES_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: '/projects' }),
        isTemplate: false,
    },
    6: {
        id: 6,
        title: 'ŠŠæŠ»Š°ŃŠ°',
        icon: BiRuble,
        path: PAYMENTS_ROUTE,
        Component: PaymentsPage,
        isTemplate: false,
    },
    7: {
        id: 7,
        title: 'ŠŠ°ŃŠ²Š»ŠµŠ½ŠøŃ',
        icon: FiFileText,
        path: APPLICATIONS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: '/sprav' }),
        isTemplate: false,
    },
    8: {
        id: 8,
        title: 'ŠŃŠµŠæŠ¾Š“Š°Š²Š°ŃŠµŠ»Šø',
        icon: BiBookReader,
        path: ALL_TEACHERS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: '/teachers' }),
        isTemplate: false,
    },
    9: {
        id: 9,
        title: 'Š£ŃŠæŠµŠ²Š°ŠµŠ¼Š¾ŃŃŃ',
        icon: BiCheckCircle,
        path: '/performance',
        Component: AcadPerformance,
        isTemplate: false,
    },
    10: {
        id: 10,
        title: 'ŠŠ½ŃŃŃŃŠŗŃŠøŠø, ŠæŠ¾Š»Š¾Š¶ŠµŠ½ŠøŃ, ŠæŃŠ°Š²ŠøŠ»Š°',
        icon: FiClipboard,
        path: INSTRUCTIONS_ROUTE,
        Component: InstructionsPage,
        isTemplate: false,
    },
    11: {
        id: 11,
        title: 'ŠŠ±ŃŠ°ŃŠ½Š°Ń ŃŠ²ŃŠ·Ń',
        icon: BiHeadphone,
        path: '/feedback',
        Component: () => PageIsNotReady({ oldVersionUrl: '/contact' }),
        isTemplate: false,
    },
    12: {
        id: 12,
        title: 'Š”ŃŃŠ“ŠµŠ½ŃŃ',
        icon: BiGroup,
        path: ALL_STUDENTS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: '/stud_blanks' }),
        isTemplate: false,
    },
    13: {
        id: 13,
        title: 'Š Š°Š±Š¾ŃŠ°',
        icon: FiBriefcase,
        path: JOB_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: '/job' }),
        isTemplate: false,
    },
    14: {
        id: 14,
        title: 'ŠŠ¾ŃŃŃŠ¾Š»ŠøŠ¾',
        icon: BiIdCard,
        path: '/portfolio',
        Component: () => PageIsNotReady({ oldVersionUrl: '/myportfolio' }),
        isTemplate: false,
    },
}

export const hiddenRoutes: IRoutes = {
    15: {
        id: 15,
        title: 'ŠŃŠ¾ŠøŠ·Š²Š¾Š»ŃŠ½ŃŠ¹ Š·Š°ŠæŃŠ¾Ń',
        icon: FiBriefcase,
        path: ARBITRARY_REQUEST_ROUTE,
        Component: ArbitrayRequestPage,
        isTemplate: false,
    },
    16: {
        id: 16,
        title: 'Š Š°ŃŠæŠøŃŠ°Š½ŠøŠµ ŠæŃŠµŠæŠ¾Š“Š°Š²Š°ŃŠµŠ»Ń',
        icon: BiIdCard,
        path: TEACHER_SCHEDULE,
        Component: TeachersSchedule,
        isTemplate: false,
    },
    17: {
        id: 17,
        title: 'Š”Š¾ŃŠøŠ°Š»ŃŠ½Š°Ń ŃŃŠøŠæŠµŠ½Š“ŠøŃ',
        icon: BiIdCard,
        path: SOCIAL_SCROLLARSHIP,
        Component: ApplicationForSocialScrollarship,
        isTemplate: false,
    },
    18: {
        id: 18,
        title: 'Š”ŠµŃŃŠøŃŠøŠŗŠ°Ń Š¾Š± Š¾Š±ŃŃŠµŠ½ŠøŠø',
        icon: BiIdCard,
        path: CERTIFICATE_OF_ATTENDANCE,
        Component: ApplicationForŠ”ertificateOfAttendance,
        isTemplate: false,
    },
    19: {
        id: 19,
        title: 'Š”ŠæŃŠ°Š²ŠŗŠ° Š² ŃŠ¾Ń.ŃŃŃŠµŠ¶Š“ŠµŠ½ŠøŃ',
        icon: BiIdCard,
        path: SOCIAL_AGENCIES,
        Component: ApplicationSocialAgencies,
        isTemplate: false,
    },
    20: {
        id: 20,
        title: 'Š”ŠæŃŠ°Š²ŠŗŠ°-Š²ŃŠ·Š¾Š²',
        icon: BiIdCard,
        path: PAPER_CALL,
        Component: ApplicationPaperCall,
        isTemplate: false,
    },
    21: {
        id: 21,
        title: 'Š£ŃŠ¾ŃŠ½ŠµŠ½ŠøŠµ ŠæŠ°ŃŠæŠ¾ŃŃŠ½ŃŃ Š“Š°Š½Š½ŃŃ',
        icon: FiBriefcase,
        path: CLARIFICATION_OF_PASSPORT_DATA_ROUTE,
        Component: ClarificationOfPassportDataApplication,
        isTemplate: false,
    },
}
