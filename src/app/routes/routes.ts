import ApplicationsPage from '@pages/applications'
import ArbitrayRequestPage from '@pages/applications/pages/arbitrary-request'
import ApplicationForСertificateOfAttendance from '@pages/applications/pages/certificate-of-attendance'
import ClarificationOfPassportDataApplication from '@pages/applications/pages/clarification-of-passport-data/arbitrary-request'
import ApplicationPaperCall from '@pages/applications/pages/paper-call'
import ApplicationSocialAgencies from '@pages/applications/pages/social-agencies'
import ApplicationForSocialScrollarship from '@pages/applications/pages/social-scollarship'
import ChatPage from '@pages/chat'
import AllTeachersPage from '@pages/all-teachers'
import ElectronicInteractionAgreementPage from '@pages/electronic-interaction-agreement'
import PageIsNotReady from '@pages/page-is-not-ready'
import PaymentsPage from '@pages/payments'
import ProjectActivitiesPage from '@pages/project-activities'
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
import { FiBriefcase, FiFileText } from 'react-icons/fi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import { IconType } from 'react-icons/lib'
import AcadPerformance from '../../pages/acad-performance'
import Home from '../../pages/home'
import LoginPage from '../../pages/login'
import SchedulePage from '../../pages/schedule'
import RelocationInsideHostelPage from '@pages/applications/pages/relocation-inside-hostel'
import RegularAccommodationPage from '@pages/applications/pages/regular-accommodation'
import AccommodationCorrespondenceFormPage from '@pages/applications/pages/accommodation-correspondence-form'
import AcademicLeaveAccommodationPage from '@pages/applications/pages/academic-leave-accommodation'
import PreferentialAccommodationPage from '@pages/applications/pages/preferential-accommodation'
import FamilyRoomPage from '@pages/applications/pages/family-room'
import TerminationOfEmploymentContractPage from '@pages/applications/pages/termination-of-employment-contract'
import RelocationToAnotherHostelPage from '@pages/applications/pages/relocation-to-another-hostel'

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
export const REGULAR_ACCOMMODATION = APPLICATIONS_ROUTE + '/regular-accommodation'
export const ACCOMMODATION_CORRESPONDENCE_FORM = APPLICATIONS_ROUTE + '/accommodation-correspondence-form'
export const ACADEMIC_LEAVE_ACCOMMODATION = APPLICATIONS_ROUTE + '/academic-leave-accommodation'
export const PREFERENTIAL_ACCOMMODATION = APPLICATIONS_ROUTE + '/preferential-accommodation'
export const FAMILY_ROOM = APPLICATIONS_ROUTE + '/family-room'
export const TERMINATION_OF_EMPLOYMENT_CONTRACT = APPLICATIONS_ROUTE + '/termination-of-employment-contract'
export const RELOCATION_INSIDE_HOSTEL = APPLICATIONS_ROUTE + '/relocation-inside-hostel'
export const RELOCATION_TO_ANOTHER_HOSTEL = APPLICATIONS_ROUTE + '/relocation-to-another-hostel'

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
        Component: ChatPage,
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
        Component: ProjectActivitiesPage,
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
        Component: ApplicationsPage,
        isTemplate: false,
    },
    8: {
        id: 8,
        title: 'Преподаватели',
        icon: BiBookReader,
        path: ALL_TEACHERS_ROUTE,
        Component: AllTeachersPage,
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
    21: {
        id: 21,
        title: 'Предоставление права проживания (очная и очно-заочная форма)',
        icon: BiIdCard,
        path: REGULAR_ACCOMMODATION,
        Component: RegularAccommodationPage,
        isTemplate: false,
    },
    22: {
        id: 22,
        title: 'Предоставление права проживания (заочная форма)',
        icon: BiIdCard,
        path: ACCOMMODATION_CORRESPONDENCE_FORM,
        Component: AccommodationCorrespondenceFormPage,
        isTemplate: false,
    },
    23: {
        id: 23,
        title: 'Предоставление права проживания в период академического отпуска',
        icon: BiIdCard,
        path: ACADEMIC_LEAVE_ACCOMMODATION,
        Component: AcademicLeaveAccommodationPage,
        isTemplate: false,
    },
    24: {
        id: 24,
        title: 'Предоставление права льготного проживания',
        icon: BiIdCard,
        path: PREFERENTIAL_ACCOMMODATION,
        Component: PreferentialAccommodationPage,
        isTemplate: false,
    },
    25: {
        id: 25,
        title: 'Предоставление права проживания в семейной комнате',
        icon: BiIdCard,
        path: FAMILY_ROOM,
        Component: FamilyRoomPage,
        isTemplate: false,
    },
    26: {
        id: 26,
        title: 'Расторжение договора найма',
        icon: BiIdCard,
        path: TERMINATION_OF_EMPLOYMENT_CONTRACT,
        Component: TerminationOfEmploymentContractPage,
        isTemplate: false,
    },
    27: {
        id: 27,
        title: 'Переселение внутри общежития',
        icon: BiIdCard,
        path: RELOCATION_INSIDE_HOSTEL,
        Component: RelocationInsideHostelPage,
        isTemplate: false,
    },
    28: {
        id: 28,
        title: 'Переселение в другое общежитие',
        icon: BiIdCard,
        path: RELOCATION_TO_ANOTHER_HOSTEL,
        Component: RelocationToAnotherHostelPage,
        isTemplate: false,
    },
}
