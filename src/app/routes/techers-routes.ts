import ContactInfoActualizationPage from '@pages/contact-info-actualization'
import DataVerificationPage from '@pages/data-verification'
import DownloadAdminFilesPage from '@pages/download-admin-files'
import ElectronicInteractionAgreementPage from '@pages/electronic-interaction-agreement'
import PageIsNotReady from '@pages/page-is-not-ready'
import PaymentsPage from '@pages/payments'
import PersonalNotificationsPage from '@pages/personal-notifications'
import SchedulePage from '@pages/schedule'
import TeachersSchedule from '@pages/teachers-schedule'
import { IRoutes } from '@routes'
import {
    BiBookReader,
    BiCheckCircle,
    BiGroup,
    BiHeadphone,
    BiIdCard,
    BiMessageRounded,
    BiNotification,
    BiRuble,
    BiTimeFive,
    BiUserCircle,
} from 'react-icons/bi'
import { FaRegLightbulb } from 'react-icons/fa'
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
import { HiOutlineClipboardCheck, HiOutlineMenuAlt2, HiOutlineUserGroup } from 'react-icons/hi'
import { RiNotificationBadgeLine } from 'react-icons/ri'
import Home from '../../pages/home'
import LoginPage from '../../pages/login'
import TeachersApplicationsPage from '@pages/teachers-applications'
import IssuanceOfLicensesPage from '@pages/teachers-applications/pages/issuance-of-licenses'
import GettingComputerEquipmentPage from '@pages/teachers-applications/pages/getting-computer-equipment'
import QuestionSedPage from '@pages/teachers-applications/pages/question-sed'
import PrinterMaintenancePage from '@pages/teachers-applications/pages/printer-maintenance'
import ConnectingComputerPage from '@pages/teachers-applications/pages/connecting-computer'
import QuestionPersonalAccountPage from '@pages/teachers-applications/pages/question-personal-account'
import OtherItServicesPage from '@pages/teachers-applications/pages/other-it-services'
import CertificateFromPlaceOfWorkPage from '@pages/teachers-applications/pages/certificate-from-the-place-of-work'
import VisaCertificatePage from '@pages/teachers-applications/pages/visa-certificate'
import CertificateOfWorkExperiencePage from '@pages/teachers-applications/pages/certificate-of-work-experience'
import NumberOfUnusedVacationDaysPage from '@pages/teachers-applications/pages/number-of-unused-vacation-days'
import CopyOfEmploymentRecordPage from '@pages/teachers-applications/pages/copy-of-the-employment-record'
import CopiesOfDocumentsFromPersonalFilePage from '@pages/teachers-applications/pages/copies-of-documents-from-the-personal-file'
import WorkOnTermsOfExternalConcurrencyPage from '@pages/teachers-applications/pages/work-on-the-terms-of-external-concurrency'
import CertificateTimeParentalLeavePage from '@pages/teachers-applications/pages/certificate-time-parental-leave'
import ArbitraryRequestPage from '@pages/teachers-applications/pages/arbitrary-request'
import CourierPage from '@pages/teachers-applications/pages/courier'
import PersonaIncomeTaxReferencePage from '@pages/teachers-applications/pages/persona-income-tax-reference'
import PaymentOfChildBirthAllowancePage from '@pages/teachers-applications/pages/payment-of-child-birth-allowance'
import PaymentForChildCarePage from '@pages/teachers-applications/pages/payment-for-child-care'

export const LOGIN_ROUTE = '/login'

export const HOME_ROUTE = '/home'
export const MESSAGES_ROUTE = '/messages'
export const TEMPLATE_CHAT_ROUTE = '/messages/:chatId'
export const PROJECT_ACTIVITIES_ROUTE = '/proj_main'
export const DATA_VERIFICATION_ROUTE = '/data-verification'
export const PAYMENTS_ROUTE = '/payments'
export const APPLICATIONS_ROUTE = '/applications'
export const SCHEDULE_ROUTE = '/schedule'
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
export const ELECTRONIC_INTERACTION_AGREEMENT_ROUTE = '/electronic-interaction-agreement'
export const DOWNLOAD_ADMIN_FILES_ROUTE = '/download-agreements'
export const PERSONAL_NOTIFICATIONS = '/personal-notifications'
export const CONTACT_INFO_ACTUALIZATION = '/contact-info-actualization'

//hidden routes
export const TEACHER_SCHEDULE = SCHEDULE_ROUTE + '/:fio'
export const ISSUANCE_OF_LICENSES = APPLICATIONS_ROUTE + '/issuance-of-licenses'
export const GETTING_COMPUTER_EQUIPMENT = APPLICATIONS_ROUTE + '/getting-computer-equipment'
export const CONNECTING_COMPUTER = APPLICATIONS_ROUTE + '/connecting-computer'
export const PRINTER_MAINTENANCE = APPLICATIONS_ROUTE + '/printer-maintenance'
export const QUESTION_SED = APPLICATIONS_ROUTE + '/question-sed'
export const QUESTION_PERSONAL_ACCOUNT = APPLICATIONS_ROUTE + '/question-personal-account'
export const OTHER_IT_SERVICES = APPLICATIONS_ROUTE + '/other-it-services'
export const CERTIFICATE_FROM_PLACE_OF_WORK = APPLICATIONS_ROUTE + '/certificate-from-the-place-of-work'
export const VISA_CERTIFICATE = APPLICATIONS_ROUTE + '/visa-certificate'
export const CERTIFICATE_OF_WORK_EXPERIENCE = APPLICATIONS_ROUTE + '/certificate-of-work-experience'
export const NUMBER_OF_UNUSED_VACATION_DAYS = APPLICATIONS_ROUTE + '/number-of-unused-vacation-days'
export const COPY_OF_EMPLOYMENT_RECORD = APPLICATIONS_ROUTE + '/copy-of-the-employment-record'
export const COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE = APPLICATIONS_ROUTE + '/copies-of-documents-from-the-personal-file'
export const WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY = APPLICATIONS_ROUTE + '/work-on-the-terms-of-external-concurrency'
export const CERTIFICATE_TIME_PARENTAL_LEAVE = APPLICATIONS_ROUTE + '/certificate-time-parental-leave'
export const ARBITRARY_REQUEST = APPLICATIONS_ROUTE + '/arbitrary-request'
export const COURIER = APPLICATIONS_ROUTE + '/courier'
export const PERSONA_INCOME_TAX_REFERENCE = APPLICATIONS_ROUTE + '/persona-income-tax-reference'
export const PAYMENT_OF_CHILD_BIRTH_ALLOWANCE = APPLICATIONS_ROUTE + '/payment-of-child-birth-allowance'
export const PAYMENT_FOR_CHILD_CARE = APPLICATIONS_ROUTE + '/payment-for-child-care'

export const publicRoutes = [
    {
        id: 0,
        title: '',
        icon: '',
        path: LOGIN_ROUTE,
        Component: LoginPage,
    },
]

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
        title: 'Соглашение об электронном взаимодействии',
        icon: HiOutlineClipboardCheck,
        path: ELECTRONIC_INTERACTION_AGREEMENT_ROUTE,
        Component: () => ElectronicInteractionAgreementPage(),
        isTemplate: false,
    },
    7: {
        id: 7,
        title: 'Скачать отчеты',
        icon: FiArrowDownCircle,
        path: DOWNLOAD_ADMIN_FILES_ROUTE,
        Component: DownloadAdminFilesPage,
        isTemplate: false,
        isAdmin: true,
    },
    2: {
        id: 2,
        title: 'Расписание',
        icon: BiTimeFive,
        path: SCHEDULE_ROUTE,
        Component: SchedulePage,
        isTemplate: false,
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
    100: {
        id: 100,
        title: 'Логины студентов',
        icon: BiGroup,
        path: STUDENTS_LOGINS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: STUDENTS_LOGINS_ROUTE }),
        isTemplate: false,
    },
    8: {
        id: 8,
        title: 'Актуализация контактных данных',
        icon: FiCheckSquare,
        path: CONTACT_INFO_ACTUALIZATION,
        Component: ContactInfoActualizationPage,
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
        title: 'Сообщения',
        icon: BiMessageRounded,
        path: MESSAGES_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: MESSAGES_ROUTE }),
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
        icon: FiStar,
        path: KPI_PPS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: KPI_PPS_ROUTE }),
        isTemplate: false,
    },
    14: {
        id: 14,
        title: 'Экспертиза рейтинговой системы ППС',
        icon: FiMonitor,
        path: KPI_ADMIN_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: KPI_ADMIN_ROUTE }),
        isTemplate: false,
    },
    15: {
        id: 15,
        title: 'Анонсы научных мероприятий',
        icon: RiNotificationBadgeLine,
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
        title: 'Оплата',
        icon: BiRuble,
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
        id: 31,
        title: 'Вакцинация',
        icon: FiBriefcase,
        path: VAX_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: VAX_ROUTE }),
        isTemplate: false,
    },
    32: {
        id: 32,
        title: 'Конкурс ППС',
        icon: BiIdCard,
        path: PPS_CONTEST_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: PPS_CONTEST_ROUTE }),
        isTemplate: false,
    },
    34: {
        id: 34,
        title: 'Кадровые уведомления',
        icon: BiNotification,
        path: PERSONAL_NOTIFICATIONS,
        Component: PersonalNotificationsPage,
        isTemplate: false,
    },
    35: {
        id: 35,
        title: 'Опрос для проверки уровня цифровой грамотности',
        icon: BiBookReader,
        path: PPS_VOTE_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: PPS_VOTE_ROUTE }),
        isTemplate: false,
    },
    36: {
        id: 36,
        title: 'Заявления',
        icon: FiFileText,
        path: APPLICATIONS_ROUTE,
        Component: TeachersApplicationsPage,
        isTemplate: false,
    },
}

export const hiddenTeacherRoutes = {
    33: {
        id: 33,
        title: 'Расписание преподавателя',
        icon: BiIdCard,
        path: TEACHER_SCHEDULE,
        Component: TeachersSchedule,
        isTemplate: false,
    },
    37: {
        id: 37,
        title: 'Выдача лицензий',
        path: ISSUANCE_OF_LICENSES,
        Component: IssuanceOfLicensesPage,
        isTemplate: false,
    },
    38: {
        id: 38,
        title: 'Получение нового компьютерного оборудования',
        path: GETTING_COMPUTER_EQUIPMENT,
        Component: GettingComputerEquipmentPage,
        isTemplate: false,
    },
    39: {
        id: 39,
        title: 'Подключение компьютера, МФУ, телефона, WiFi',
        path: CONNECTING_COMPUTER,
        Component: ConnectingComputerPage,
        isTemplate: false,
    },
    40: {
        id: 40,
        title: 'Обслуживание принтеров, МФУ',
        path: PRINTER_MAINTENANCE,
        Component: PrinterMaintenancePage,
        isTemplate: false,
    },
    41: {
        id: 41,
        title: 'Вопрос по СЭД Directum и 1С',
        path: QUESTION_SED,
        Component: QuestionSedPage,
        isTemplate: false,
    },
    42: {
        id: 42,
        title: 'Вопрос по Личному кабинету',
        path: QUESTION_PERSONAL_ACCOUNT,
        Component: QuestionPersonalAccountPage,
        isTemplate: false,
    },
    43: {
        id: 43,
        title: 'Прочее ИТ-обслуживание',
        path: OTHER_IT_SERVICES,
        Component: OtherItServicesPage,
        isTemplate: false,
    },
    44: {
        id: 44,
        title: 'Справка с места работы',
        path: CERTIFICATE_FROM_PLACE_OF_WORK,
        Component: CertificateFromPlaceOfWorkPage,
        isTemplate: false,
    },
    45: {
        id: 45,
        title: 'Справка на визу',
        path: VISA_CERTIFICATE,
        Component: VisaCertificatePage,
        isTemplate: false,
    },
    46: {
        id: 46,
        title: 'Справка о стаже работы',
        path: CERTIFICATE_OF_WORK_EXPERIENCE,
        Component: CertificateOfWorkExperiencePage,
        isTemplate: false,
    },
    47: {
        id: 47,
        title: 'Справка о количестве неиспользованных дней отпуска',
        path: NUMBER_OF_UNUSED_VACATION_DAYS,
        Component: NumberOfUnusedVacationDaysPage,
        isTemplate: false,
    },
    48: {
        id: 48,
        title: 'Копия трудовой книжки',
        path: COPY_OF_EMPLOYMENT_RECORD,
        Component: CopyOfEmploymentRecordPage,
        isTemplate: false,
    },
    49: {
        id: 49,
        title: 'Копии документов из личного дела',
        path: COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE,
        Component: CopiesOfDocumentsFromPersonalFilePage,
        isTemplate: false,
    },
    50: {
        id: 50,
        title: 'Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку',
        path: WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY,
        Component: WorkOnTermsOfExternalConcurrencyPage,
        isTemplate: false,
    },
    51: {
        id: 51,
        title: 'Справка об отпуске по уходу за ребенком до 1,5 и 3 лет',
        path: CERTIFICATE_TIME_PARENTAL_LEAVE,
        Component: CertificateTimeParentalLeavePage,
        isTemplate: false,
    },
    52: {
        id: 52,
        title: 'Произвольный запрос',
        path: ARBITRARY_REQUEST,
        Component: ArbitraryRequestPage,
        isTemplate: false,
    },
    53: {
        id: 53,
        title: 'Курьер',
        path: COURIER,
        Component: CourierPage,
        isTemplate: false,
    },
    54: {
        id: 54,
        title: 'Справка по форме 2-НДФЛ',
        path: PERSONA_INCOME_TAX_REFERENCE,
        Component: PersonaIncomeTaxReferencePage,
        isTemplate: false,
    },
    55: {
        id: 55,
        title: 'Справка о выплате (не выплате) единовременного пособия на рождение ребенка',
        path: PAYMENT_OF_CHILD_BIRTH_ALLOWANCE,
        Component: PaymentOfChildBirthAllowancePage,
        isTemplate: false,
    },
    56: {
        id: 56,
        title: 'Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)',
        path: PAYMENT_FOR_CHILD_CARE,
        Component: PaymentForChildCarePage,
        isTemplate: false,
    },
}
