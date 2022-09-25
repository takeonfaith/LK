/* eslint-disable no-console */
import AllStudentsPage from '@pages/all-students'
import AllTeachersPage from '@pages/all-teachers'
import DownloadAdminFilesPage from '@pages/download-admin-files'
import HelpfulInformation from '@pages/helpful-information'
import PageIsNotReady from '@pages/page-is-not-ready'
import PersonalNotificationsPage from '@pages/personal-notifications'
import TeachersApplicationsPage from '@pages/teachers-applications'
import ArbitraryRequestPage from '@pages/teachers-applications/pages/arbitrary-request'
import CertificateFromPlaceOfWorkPage from '@pages/teachers-applications/pages/certificate-from-the-place-of-work'
import CertificateOfWorkExperiencePage from '@pages/teachers-applications/pages/certificate-of-work-experience'
import CertificateTimeParentalLeavePage from '@pages/teachers-applications/pages/certificate-time-parental-leave'
import ConnectingComputerPage from '@pages/teachers-applications/pages/connecting-computer'
import CopiesOfDocumentsFromPersonalFilePage from '@pages/teachers-applications/pages/copies-of-documents-from-the-personal-file'
import CopyOfEmploymentRecordPage from '@pages/teachers-applications/pages/copy-of-the-employment-record'
import CourierPage from '@pages/teachers-applications/pages/courier'
import GettingComputerEquipmentPage from '@pages/teachers-applications/pages/getting-computer-equipment'
import IssuanceOfLicensesPage from '@pages/teachers-applications/pages/issuance-of-licenses'
import NumberOfUnusedVacationDaysPage from '@pages/teachers-applications/pages/number-of-unused-vacation-days'
import OtherItServicesPage from '@pages/teachers-applications/pages/other-it-services'
import PaymentForChildCarePage from '@pages/teachers-applications/pages/payment-for-child-care'
import PaymentOfChildBirthAllowancePage from '@pages/teachers-applications/pages/payment-of-child-birth-allowance'
import PersonaIncomeTaxReferencePage from '@pages/teachers-applications/pages/persona-income-tax-reference'
import PrinterMaintenancePage from '@pages/teachers-applications/pages/printer-maintenance'
import QuestionPersonalAccountPage from '@pages/teachers-applications/pages/question-personal-account'
import QuestionSedPage from '@pages/teachers-applications/pages/question-sed'
import VisaCertificatePage from '@pages/teachers-applications/pages/visa-certificate'
import WorkOnTermsOfExternalConcurrencyPage from '@pages/teachers-applications/pages/work-on-the-terms-of-external-concurrency'
import PartTimeEmployment from '@pages/teachers-applications/pages/part-time-deployment'
import HolidayPostponed from '@pages/teachers-applications/pages/holiday-postponed'
import Dismissal from '@pages/teachers-applications/pages/dismissal'
import VacationSchedule from '@pages/vacation-schedule'
import ExtraHolidayColl from '@pages/teachers-applications/pages/extra-holiday-coll'
import HolidayWork from '@pages/teachers-applications/pages/holiday-work'
import HolidayPlanning from '@pages/teachers-applications/pages/holiday-planning'
import WorkTransfer from '@pages/teachers-applications/pages/work-transfer'


import React from 'react'
import { BiBookReader, BiGroup, BiHeadphone, BiIdCard, BiNotification } from 'react-icons/bi'
import { FaRegLightbulb } from 'react-icons/fa'
import { FiArrowDownCircle, FiBell, FiCalendar, FiFileText, FiMonitor, FiStar } from 'react-icons/fi'
import { RiNotificationBadgeLine } from 'react-icons/ri'
import {
    ALL_STUDENTS_ROUTE,
    ALL_TEACHERS_ROUTE,
    generalHiddenRoutes,
    generalRoutes,
    IRoutes,
    PROJECT_ACTIVITIES_ROUTE,
} from './general-routes'
import useIsTestEnv from "@utils/hooks/use-is-test-env";

export const DATA_VERIFICATION_ROUTE = '/data-verification'
export const APPLICATIONS_ROUTE = '/applications'
export const JOB_ROUTE = '/job'
export const ORDERS_ROUTE = '/staff_orders'
export const DOCUMENT_BLANKS_ROUTE = '/staff_blanks'
export const STUDENTS_LOGINS_ROUTE = '/ad_logins'
export const ALERTS_ROUTE = '/alerts'
export const VAX_ROUTE = '/vaccination'
export const DOCLIST_ROUTE = '/doclist'
export const PPS_VOTE_ROUTE = '/pps_vote2020'
export const CHILDREN_ROUTE = '/children'
export const PPS_CONTEST_ROUTE = '/pps_contest'
export const ElECTRONIC_STATEMENTS = '/electronic-statements'
export const VACATION_ROUTE = '/vacation'
export const KPI_PPS_ROUTE = '/kpi_pss'
export const KPI_ADMIN_ROUTE = '/kpi_admin'
export const SC_NEWS_ROUTE = '/sc_news'
export const OOP_ROUTE = '/oop'
export const CENTERS_ROUTE = '/centers'
export const PORTFOLIO_ROUTE = '/portfolio'
export const INFO_ROUTE = '/info'
export const HELP_SERVICE_ROUTE = '/help_service'
export const DOWNLOAD_AGREEMENTS_FILES_ROUTE = '/download-agreements'
export const PERSONAL_NOTIFICATIONS = '/personal-notifications'
export const CONTACT_INFO_ACTUALIZATION = '/contact-info-actualization'

//hidden routes
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
export const PARTTIME_EMPLOYMENT = APPLICATIONS_ROUTE + '/part-time-deployment'
export const HOLIDAY_POSTPONED = APPLICATIONS_ROUTE + '/holiday-postponed'
export const DISMISSAL = APPLICATIONS_ROUTE + '/dismissal'
export const WORK_TRANSFER = APPLICATIONS_ROUTE + '/work-transfer'
export const EXTRA_HOLIDAY_COLL = APPLICATIONS_ROUTE + '/extra-holiday-coll'
export const HOLIDAY_PLANNING = APPLICATIONS_ROUTE + '/holiday-planning'
export const HOLIDAY_WORK = APPLICATIONS_ROUTE + '/holiday-work'

const isProdEnv = !useIsTestEnv()
const ApplicationRedirect = () => PageIsNotReady({ oldVersionUrl: '/sprav' })

export const teachersPrivateRoutes: () => IRoutes = () => ({
    ...generalRoutes,
    doclist: {
        id: 'doclist',
        title: 'Ознакомление с документами',
        icon: <FiFileText />,
        path: DOCLIST_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: DOCLIST_ROUTE }),
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
    },
    applications: {
        id: 'applications',
        title: 'Цифровые сервисы',
        icon: <FiFileText />,
        path: APPLICATIONS_ROUTE,
        Component: isProdEnv ? ApplicationRedirect : TeachersApplicationsPage,
        color: 'red',
        isTemplate: false,
        group: 'GENERAL',
    },
    'download-agreements': {
        id: 'download-agreements',
        title: 'Административная панель',
        icon: <FiArrowDownCircle />,
        path: DOWNLOAD_AGREEMENTS_FILES_ROUTE,
        Component: DownloadAdminFilesPage,
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',

        isAdmin: true,
    },
    alerts: {
        id: 'alerts',
        title: 'Оповещения',
        icon: <FiBell />,
        path: ALERTS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: ALERTS_ROUTE }),
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
    },
    calendar: {
        id: 'calendar',
        title: 'График отпусков',
        icon: <FiCalendar />,
        path: VACATION_ROUTE,
        Component: VacationSchedule,
        color: 'purple',
        isTemplate: false,
        group: 'OTHER',
    },
    'kpi-pps': {
        id: 'kpi-pps',
        title: 'Рейтинговая система ППС',
        icon: <FiStar />,
        path: KPI_PPS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: KPI_PPS_ROUTE }),
        color: 'pink',
        isTemplate: false,
        group: 'OTHER',
    },
    'kpi-admin': {
        id: 'kpi-admin',
        title: 'Экспертиза рейтинговой системы ППС',
        icon: <FiMonitor />,
        path: KPI_ADMIN_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: KPI_ADMIN_ROUTE }),
        color: 'darkBlue',
        isTemplate: false,
        group: 'OTHER',
    },
    'sc-news': {
        id: 'sc-news',
        title: 'Анонсы научных мероприятий',
        icon: <RiNotificationBadgeLine />,
        path: SC_NEWS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: SC_NEWS_ROUTE }),
        color: 'orange',
        isTemplate: false,
        group: 'OTHER',
        show: false,
    },
    orders: {
        id: 'orders',
        title: 'Приказы',
        icon: <FiFileText />,
        path: ORDERS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: ORDERS_ROUTE }),
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
        show: false,
    },
    'all-students': {
        id: 'all-students',
        title: 'Студенты',
        icon: <BiGroup />,
        path: ALL_STUDENTS_ROUTE,
        Component: AllStudentsPage,
        color: 'darkBlue',
        isTemplate: false,
        group: 'OTHER',
        show: false,
    },
    'all-teachers': {
        id: 'all-teachers',
        title: 'Сотрудники',
        icon: <BiBookReader />,
        path: ALL_TEACHERS_ROUTE,
        Component: AllTeachersPage,
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
        show: false,
    },
    'document-blanks': {
        id: 'document-blanks',
        title: 'Бланки документов',
        icon: <BiGroup />,
        path: DOCUMENT_BLANKS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: DOCUMENT_BLANKS_ROUTE }),
        color: 'blue',
        isTemplate: false,
        show: false,
        group: 'OTHER',
    },
    'personal-notifications': {
        id: 'personal-notifications',
        title: 'Кадровые уведомления',
        icon: <BiNotification />,
        path: PERSONAL_NOTIFICATIONS,
        Component: PersonalNotificationsPage,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
    },
    oop: {
        id: 'oop',
        title: 'Образовательные программы',
        icon: <BiHeadphone />,
        path: OOP_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: OOP_ROUTE }),
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
        show: false,
    },
    centers: {
        id: 'centers',
        title: 'Многофункциональный центр',
        icon: <BiHeadphone />,
        path: CENTERS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: CENTERS_ROUTE }),
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
        show: false,
    },
    info: {
        id: 'info',
        title: 'Полезная информация',
        icon: <FiFileText />,
        path: INFO_ROUTE,
        Component: HelpfulInformation,
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',
    },
    'pps-contest': {
        id: 'pps-contest',
        title: 'Конкурс ППС',
        icon: <BiIdCard />,
        path: PPS_CONTEST_ROUTE,
        Component: () => {
            React.useEffect(() => {
                window.location.replace('https://mospolytech.ru/contest-pps/')
            }, [])

            return null
        },
        color: 'blue',
        isTemplate: false,
        group: 'LEARNING_ACTIVITIES',
    },
    'electronic-statements': {
        id: 'electronic-statements',
        title: 'Электронные ведомости',
        icon: <BiIdCard />,
        path: ElECTRONIC_STATEMENTS,
        Component: () => {
            React.useEffect(() => {
                window.location.replace(' https://e.mospolytech.ru/old/stats.php?m=items&act=st_list')
            }, [])

            return null
        },
        color: 'blue',
        isTemplate: false,
        group: 'LEARNING_ACTIVITIES',
    },
    'pps-vote': {
        id: 'pps-vote',
        title: 'Опрос для проверки уровня цифровой грамотности',
        icon: <BiBookReader />,
        path: PPS_VOTE_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: PPS_VOTE_ROUTE }),
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
        show: false,
    },
    'project-activity': {
        id: 'project-activity',
        title: 'Проектная деятельность',
        icon: <FaRegLightbulb />,
        path: PROJECT_ACTIVITIES_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: '/projects' }),
        color: 'yellow',
        isTemplate: false,
        group: 'OTHER',
    },
})

export const teachersHiddenRoutes: () => IRoutes = () => ({
    ...generalHiddenRoutes,
    'issuance-of-licenses-page': {
        id: 'issuance-of-licenses-page',
        title: 'Выдача лицензий',
        path: ISSUANCE_OF_LICENSES,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProdEnv ? ApplicationRedirect : IssuanceOfLicensesPage,
        isTemplate: false,
        group: 'OTHER',
    },
    'part-time-deployment': {
        id: 'part-time-deployment',
        title: 'Заявление на трудоустройство по совместительству',
        path: PARTTIME_EMPLOYMENT,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProdEnv ? ApplicationRedirect : PartTimeEmployment,
        isTemplate: false,
        group: 'OTHER',
    },
    'holiday-postponed': {
        id: 'holiday-postponed',
        title: 'Заявление на перенос отпуска',
        path: HOLIDAY_POSTPONED,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProdEnv ? ApplicationRedirect : HolidayPostponed,
        isTemplate: false,
        group: 'OTHER',
    },
    dismissal: {
        id: 'dismissal',
        title: 'Заявление на увольнение',
        path: DISMISSAL,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProdEnv ? ApplicationRedirect : Dismissal,
        isTemplate: false,
        group: 'OTHER',
    },
    'holiday-work': {
        id: 'part-time-deployment',
        title: 'Заявление о привлечении к работе в выходной день',
        path: HOLIDAY_WORK,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProdEnv ? ApplicationRedirect : HolidayWork,
        isTemplate: false,
        group: 'OTHER',
    },
    'holiday-planning': {
        id: 'holiday-postponed',
        title: 'Заявление о предоставлении отпуска',
        path: HOLIDAY_PLANNING,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProdEnv ? ApplicationRedirect : HolidayPlanning,
        isTemplate: false,
        group: 'OTHER',
    },
    'extra-holiday-coll': {
        id: 'dismissal',
        title: 'Заявление о предоставлении дополнительного отпуска по коллективному договору',
        path: EXTRA_HOLIDAY_COLL,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProdEnv ? ApplicationRedirect : ExtraHolidayColl,
        isTemplate: false,
        group: 'OTHER',
    },
    'work-transfer': {
        id: 'dismissal',
        title: 'Заявление на перевод',
        path: WORK_TRANSFER,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProdEnv ? ApplicationRedirect : WorkTransfer,
        isTemplate: false,
        group: 'OTHER',
    },
    'getting-computer-equipment': {
        id: 'getting-computer-equipment',
        title: 'Получение нового компьютерного оборудования',
        icon: <FiFileText />,
        color: 'blue',
        path: GETTING_COMPUTER_EQUIPMENT,
        Component: isProdEnv ? ApplicationRedirect : GettingComputerEquipmentPage,
        isTemplate: false,
        group: 'OTHER',
    },
    'connecting-computer': {
        id: 'connecting-computer',
        title: 'Подключение компьютера, МФУ, телефона, WiFi',
        icon: <FiFileText />,
        color: 'blue',
        path: CONNECTING_COMPUTER,
        Component: isProdEnv ? ApplicationRedirect : ConnectingComputerPage,
        isTemplate: false,
        group: 'OTHER',
    },
    'printer-maintenance': {
        id: 'printer-maintenance',
        title: 'Обслуживание принтеров, МФУ',
        icon: <FiFileText />,
        color: 'blue',
        path: PRINTER_MAINTENANCE,
        Component: isProdEnv ? ApplicationRedirect : PrinterMaintenancePage,
        isTemplate: false,
        group: 'OTHER',
    },
    'question-sed': {
        id: 'question-sed',
        title: 'Вопрос по СЭД Directum и 1С',
        icon: <FiFileText />,
        color: 'blue',
        path: QUESTION_SED,
        Component: isProdEnv ? ApplicationRedirect : QuestionSedPage,
        isTemplate: false,
        group: 'OTHER',
    },
    'question-personal-account': {
        id: 'question-personal-account',
        title: 'Вопрос по Личному кабинету',
        icon: <FiFileText />,
        color: 'blue',
        path: QUESTION_PERSONAL_ACCOUNT,
        Component: isProdEnv ? ApplicationRedirect : QuestionPersonalAccountPage,
        isTemplate: false,
        group: 'OTHER',
    },
    'other-it-services': {
        id: 'other-it-services',
        title: 'Прочее ИТ-обслуживание',
        icon: <FiFileText />,
        color: 'blue',
        path: OTHER_IT_SERVICES,
        Component: isProdEnv ? ApplicationRedirect : OtherItServicesPage,
        isTemplate: false,
        group: 'OTHER',
    },
    'certificate-form-place-of-work': {
        id: 'certificate-form-place-of-work',
        title: 'Справка с места работы',
        icon: <FiFileText />,
        color: 'blue',
        path: CERTIFICATE_FROM_PLACE_OF_WORK,
        Component: isProdEnv ? ApplicationRedirect : CertificateFromPlaceOfWorkPage,
        isTemplate: false,
        group: 'OTHER',
    },
    'visa-certificate': {
        id: 'visa-certificate',
        title: 'Справка на визу',
        icon: <FiFileText />,
        color: 'blue',
        path: VISA_CERTIFICATE,
        Component: isProdEnv ? ApplicationRedirect : VisaCertificatePage,
        isTemplate: false,
        group: 'OTHER',
    },
    'certificate-of-work-experience': {
        id: 'certificate-of-work-experience',
        title: 'Справка о стаже работы',
        icon: <FiFileText />,
        color: 'blue',
        path: CERTIFICATE_OF_WORK_EXPERIENCE,
        Component: isProdEnv ? ApplicationRedirect : CertificateOfWorkExperiencePage,
        isTemplate: false,
        group: 'OTHER',
    },
    'number-of-unused-vacation-days': {
        id: 'number-of-unused-vacation-days',
        title: 'Справка о количестве неиспользованных дней отпуска',
        icon: <FiFileText />,
        color: 'blue',
        path: NUMBER_OF_UNUSED_VACATION_DAYS,
        Component: isProdEnv ? ApplicationRedirect : NumberOfUnusedVacationDaysPage,
        isTemplate: false,
        group: 'OTHER',
    },
    'copy-of-employment-record': {
        id: 'copy-of-employment-record',
        title: 'Копия трудовой книжки',
        icon: <FiFileText />,
        color: 'blue',
        path: COPY_OF_EMPLOYMENT_RECORD,
        Component: isProdEnv ? ApplicationRedirect : CopyOfEmploymentRecordPage,
        isTemplate: false,
        group: 'OTHER',
    },
    'copies-of-documents-from-personal-file': {
        id: 'copies-of-documents-from-personal-file',
        title: 'Копии документов из личного дела',
        icon: <FiFileText />,
        color: 'blue',
        path: COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE,
        Component: isProdEnv ? ApplicationRedirect : CopiesOfDocumentsFromPersonalFilePage,
        isTemplate: false,
        group: 'OTHER',
    },
    'work-on-terms-of-external-concurrency': {
        id: 'work-on-terms-of-external-concurrency',
        title: 'Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку',
        icon: <FiFileText />,
        color: 'blue',
        path: WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY,
        Component: isProdEnv ? ApplicationRedirect : WorkOnTermsOfExternalConcurrencyPage,
        isTemplate: false,
        group: 'OTHER',
    },
    'certificate-time-parental-leave': {
        id: 'certificate-time-parental-leave',
        title: 'Справка об отпуске по уходу за ребенком до 1,5 и 3 лет',
        icon: <FiFileText />,
        color: 'blue',
        path: CERTIFICATE_TIME_PARENTAL_LEAVE,
        Component: isProdEnv ? ApplicationRedirect : CertificateTimeParentalLeavePage,
        isTemplate: false,
        group: 'OTHER',
    },
    'arbitrary-request': {
        id: 'arbitrary-request',
        title: 'Произвольный запрос',
        icon: <FiFileText />,
        color: 'blue',
        path: ARBITRARY_REQUEST,
        Component: isProdEnv ? ApplicationRedirect : ArbitraryRequestPage,
        isTemplate: false,
        group: 'OTHER',
    },
    courier: {
        id: 'courier',
        title: 'Курьер',
        icon: <FiFileText />,
        color: 'blue',
        path: COURIER,
        Component: isProdEnv ? ApplicationRedirect : CourierPage,
        isTemplate: false,
        group: 'OTHER',
    },
    'personal-income-tax-reference': {
        id: 'personal-income-tax-reference',
        title: 'Справка по форме 2-НДФЛ',
        icon: <FiFileText />,
        color: 'blue',
        path: PERSONA_INCOME_TAX_REFERENCE,
        Component: isProdEnv ? ApplicationRedirect : PersonaIncomeTaxReferencePage,
        isTemplate: false,
        group: 'OTHER',
    },
    'payment-of-child-birth-allowance': {
        id: 'payment-of-child-birth-allowance',
        title: 'Справка о выплате (не выплате) единовременного пособия на рождение ребенка',
        icon: <FiFileText />,
        color: 'blue',
        path: PAYMENT_OF_CHILD_BIRTH_ALLOWANCE,
        Component: isProdEnv ? ApplicationRedirect : PaymentOfChildBirthAllowancePage,
        isTemplate: false,
        group: 'OTHER',
    },
    'payment-for-child-care': {
        id: 'payment-for-child-care',
        title: 'Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)',
        icon: <FiFileText />,
        color: 'blue',
        path: PAYMENT_FOR_CHILD_CARE,
        Component: isProdEnv ? ApplicationRedirect : PaymentForChildCarePage,
        isTemplate: false,
        group: 'OTHER',
    },
})
