import PageIsNotReady from '@pages/page-is-not-ready'

import {
    HelpfulInformation,
    HrApplicationsPage,
    PartTimeEmployment,
    Dismissal,
    ExtraHolidayColl,
    HolidayWork,
    HolidayPlanning,
    IssuanceOfLicensesPage,
    GettingComputerEquipmentPage,
    ConnectingComputerPage,
    OtherItServicesPage,
    CertificateFromPlaceOfWorkPage,
    CertificateOfWorkExperiencePage,
    NumberOfUnusedVacationDaysPage,
    CopyOfEmploymentRecordPage,
    CopiesOfDocumentsFromPersonalFilePage,
    CertificateTimeParentalLeavePage,
    ArbitraryRequestPage,
    CourierPage,
    PaymentForChildCarePage,
    PaymentOfChildBirthAllowancePage,
    PersonaIncomeTaxReferencePage,
    ContactInfoActualizationPage,
    HolidayTransfer,
    DataVerificationPage,
    TeacherPhysicalEducation,
    PhysicalEducationStudent,
    MedicalExamination,
    WorkTransferChangeRate,
    PersonalNotificationsPage,
    PrinterMaintenancePage,
    QuestionPersonalAccountPage,
    QuestionSedPage,
    TeachersApplicationsPage,
    VacationSchedule,
    VisaCertificatePage,
    WorkOnTermsOfExternalConcurrencyPage,
    WorkTransfer,
} from './pages'

import { isProduction, OLD_LK_URL } from '@shared/constants'
import React from 'react'
import { BiBookReader, BiGroup, BiHeadphone, BiIdCard } from 'react-icons/bi'
import { FaRegLightbulb } from 'react-icons/fa'
import { FiArrowDownCircle, FiCalendar, FiFileText, FiMonitor, FiStar } from 'react-icons/fi'
import { RiNotificationBadgeLine } from 'react-icons/ri'
import { generalHiddenRoutes, generalRoutes, IRoutes, PROJECT_ACTIVITIES_ROUTE } from '../general-routes'
import DismissalBufferPage from '@pages/hr-applications/pages/buffer-dismissal'
import HolidayWorkBufferPage from '@pages/hr-applications/pages/buffer-holiday-work'
import HolidayPlanningBufferPage from '@pages/hr-applications/pages/buffer-holiday-planning'
import HolidayTransferBufferPage from '@pages/hr-applications/pages/buffer-holiday-transfer'
import MedicalExaminationBufferPage from '@pages/hr-applications/pages/buffer-medical-examination'
//import PartTimeEmploymentBufferPage from '@pages/hr-applications/pages/buffer-part-time-employment'
import WorkTransferBufferPage from '@pages/hr-applications/pages/buffer-work-transfer'
import DownloadAdminFilesPage from '@pages/download-admin-files'
import { Onboarding } from '../general-routes/pages'

export const APPLICATIONS_ROUTE = '/applications'
export const HR_APPLICATIONS_ROUTE = '/hr-applications'
export const JOB_ROUTE = '/job'
export const ORDERS_ROUTE = '/staff_orders'
export const DOCUMENT_BLANKS_ROUTE = '/staff_blanks'
export const STUDENTS_LOGINS_ROUTE = '/ad_logins'
export const VAX_ROUTE = '/vaccination'
export const DOCLIST_ROUTE = '/doclist'
export const PPS_VOTE_ROUTE = '/pps_vote2020'
export const CHILDREN_ROUTE = '/children'
export const PPS_CONTEST_ROUTE = '/pps_contest'
export const ElECTRONIC_STATEMENTS = '/electronic-statements'
export const ADDRESSES_AND_CONTACTS = '/addresses-and-contacts'
export const STRUCTURE_OF_THE_UNIVERSITY = '/structure-of-the-university'
export const ONBOARDING = '/onboarding'
export const VACATION_ROUTE = '/vacation'
export const KPI_PPS_ROUTE = '/kpi_pps'
export const KPI_ADMIN_ROUTE = '/kpi_admin'
export const SC_NEWS_ROUTE = '/sc_news'
export const OOP_ROUTE = '/oop'
export const CENTERS_ROUTE = '/centers'
export const PORTFOLIO_ROUTE = '/portfolio'
export const INFO_ROUTE = '/helpful-information'
export const HELP_SERVICE_ROUTE = '/help_service'
export const DOWNLOAD_AGREEMENTS_FILES_ROUTE = '/download-agreements'
export const PERSONAL_NOTIFICATIONS = '/personal-notifications'
export const PHYSICAL_EDUCATION = '/physical-education'

//hidden routes
export const PHYSICAL_EDUCATION_STUDENT = '/physical-education/student/:studentId'
export const CONTACT_INFO_ACTUALIZATION = APPLICATIONS_ROUTE + '/contact-info-actualization'
export const DATA_VERIFICATION_ROUTE = APPLICATIONS_ROUTE + '/data-verification'
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
export const PARTTIME_EMPLOYMENT = HR_APPLICATIONS_ROUTE + '/part-time-employment/'
export const HOLIDAY_POSTPONED = HR_APPLICATIONS_ROUTE + '/holiday-postponed'
export const DISMISSAL = HR_APPLICATIONS_ROUTE + '/dismissal/:id'
export const WORK_TRANSFER = HR_APPLICATIONS_ROUTE + '/work-transfer/:id'
export const EXTRA_HOLIDAY_COLL = HR_APPLICATIONS_ROUTE + '/extra-holiday-coll'
export const HOLIDAY_PLANNING = HR_APPLICATIONS_ROUTE + '/holiday-planning/:id'
export const HOLIDAY_TRANSFER = HR_APPLICATIONS_ROUTE + '/holiday-transfer/:id'
export const HOLIDAY_WORK = HR_APPLICATIONS_ROUTE + '/holiday-work/:id'
export const WORK_TRANSFER_CHANGE_RATE = HR_APPLICATIONS_ROUTE + '/work-transfer-change-rate/:id'
export const MEDICAL_EXAMINATION = HR_APPLICATIONS_ROUTE + '/medical-examination/:id'
export const BUFFER_DISMISSAL = HR_APPLICATIONS_ROUTE + '/buffer-dismissal'
// export const BUFFER_EXTRA_HOLIDAY_COLL = HR_APPLICATIONS_ROUTE + '/buffer-extra-holiday-coll'
export const BUFFER_HOLIDAY_PLANNING = HR_APPLICATIONS_ROUTE + '/buffer-holiday-planning'
export const BUFFER_HOLIDAY_TRANSFER = HR_APPLICATIONS_ROUTE + '/buffer-holiday-transfer'
export const BUFFER_HOLIDAY_WORK = HR_APPLICATIONS_ROUTE + '/buffer-holiday-work'
export const BUFFER_MEDICAL_EXAMINATION = HR_APPLICATIONS_ROUTE + '/buffer-medical-examination'
export const BUFFER_WORK_TRANSFER = HR_APPLICATIONS_ROUTE + '/buffer-work-transfer'
// export const BUFFER_HOLIDAY_POSTPONED = HR_APPLICATIONS_ROUTE + '/buffer-holiday-postponed'
export const BUFFER_PARTTIME_EMPLOYMENT = HR_APPLICATIONS_ROUTE + '/buffer-part-time-deployment'
export const BUFFER_HOLIDAY_POSTPONED = HR_APPLICATIONS_ROUTE + '/buffer-holiday-postponed'
// export const GENERATE_SCHEDULE = '/generate-schedule'

const ApplicationRedirect = () => PageIsNotReady({ oldVersionUrl: '/sprav' })

export const teachersPrivateRoutes: () => IRoutes = () => ({
    // On this position just to make necessary order
    applications: {
        id: 'applications',
        title: 'Цифровые сервисы',
        icon: <FiFileText />,
        path: APPLICATIONS_ROUTE,
        Component: isProduction ? ApplicationRedirect : TeachersApplicationsPage,
        color: 'red',
        isTemplate: false,
        group: 'OTHER',
        keywords: ['заявления', 'справки', 'заявление', 'справка'],
    },
    ...generalRoutes,
    'hr-applications': {
        id: 'hr-applications',
        title: 'Кадровые заявления',
        icon: <FiFileText />,
        path: HR_APPLICATIONS_ROUTE,
        Component: isProduction ? ApplicationRedirect : HrApplicationsPage,
        color: 'green',
        isTemplate: false,
        group: 'OTHER',
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
    'project-activity': {
        id: 'project-activity',
        title: 'Проектная деятельность',
        icon: <FaRegLightbulb />,
        path: PROJECT_ACTIVITIES_ROUTE,
        Component: () => {
            React.useEffect(() => {
                window.location.replace(`${OLD_LK_URL}/?p=proj_main`)
            }, [])

            return null
        },
        color: 'orange',
        isTemplate: false,
        group: 'LEARNING_ACTIVITIES',
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
        group: 'FINANCES_DOCS',
    },
    'kpi-pps': {
        id: 'kpi-pps',
        title: 'Рейтинговая система ППС',
        icon: <FiStar />,
        path: KPI_PPS_ROUTE,
        Component: () => {
            React.useEffect(() => {
                window.location.replace(`${OLD_LK_URL}/?p=${KPI_PPS_ROUTE?.slice(1, KPI_PPS_ROUTE.length)}`)
            }, [])

            return null
        },
        color: 'pink',
        isTemplate: false,
        group: 'LEARNING_ACTIVITIES',
    },
    'kpi-admin': {
        id: 'kpi-admin',
        // title: 'Экспертиза рейтинговой системы ППС',
        title: 'Экспертиза рейтинго...',
        icon: <FiMonitor />,
        path: KPI_ADMIN_ROUTE,
        Component: () => {
            React.useEffect(() => {
                window.location.replace(`${OLD_LK_URL}/?p=${KPI_ADMIN_ROUTE?.slice(1, KPI_ADMIN_ROUTE.length)}`)
            }, [])

            return null
        },
        color: 'lightBlue',
        isTemplate: false,
        group: 'LEARNING_ACTIVITIES',
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
    doclist: {
        id: 'doclist',
        title: 'Ознакомление с документами',
        shortTitle: 'Ознакомление с док...',
        icon: <FiFileText />,
        path: DOCLIST_ROUTE,
        Component: PersonalNotificationsPage,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
    },
    calendar: {
        id: 'calendar',
        title: 'График отпусков',
        icon: <FiCalendar />,
        path: VACATION_ROUTE,
        Component: VacationSchedule,
        color: 'purple',
        isTemplate: false,
        group: 'FINANCES_DOCS',
    },
    'physical-education': {
        id: 'physical-education',
        title: 'Физическая культура',
        icon: <FiFileText />,
        color: 'lightGreen',
        path: PHYSICAL_EDUCATION,
        show: !isProduction,
        Component: TeacherPhysicalEducation,
        isTemplate: false,
        group: 'OTHER',
    },
    'physical-education-student': {
        id: 'physical-education-student',
        title: 'Физическая культура',
        icon: <FiFileText />,
        color: 'pink',
        path: PHYSICAL_EDUCATION_STUDENT,
        Component: PhysicalEducationStudent,
        isTemplate: false,
        group: 'OTHER',
        show: false,
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
    'addresses-and-contacts': {
        id: 'addresses-and-contacts',
        title: 'Адреса и контакты',
        icon: <BiIdCard />,
        path: ADDRESSES_AND_CONTACTS,
        Component: () => {
            React.useEffect(() => {
                window.location.replace('https://mospolytech.ru/ob-universitete/adresa-i-kontakty/')
            }, [])

            return null
        },
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
    },
    'structure-of-the-university': {
        id: 'structure-of-the-university',
        title: 'Структура университета',
        icon: <BiIdCard />,
        path: STRUCTURE_OF_THE_UNIVERSITY,
        Component: () => {
            React.useEffect(() => {
                window.location.replace(
                    'https://mospolytech.ru/ob-universitete/rukovodstvo-i-struktura/strukturnye-podrazdeleniya/',
                )
            }, [])

            return null
        },
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
    },
    onboarding: {
        id: 'onboarding',
        title: 'Новому работнику',
        icon: <BiIdCard />,
        path: ONBOARDING,
        Component: Onboarding,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
    },
    // 'generate-schedule': {
    //     id: 'generate-schedule',
    //     title: 'Генерация пересдач',
    //     icon: <HiOutlineSparkles />,
    //     path: GENERATE_SCHEDULE,
    //     Component: GenerateSchedule,
    //     color: 'pink',
    //     isTemplate: false,
    //     group: 'OTHER',
    //     isAdmin: true,
    // },
})

export const teachersHiddenRoutes: () => IRoutes = () => ({
    ...generalHiddenRoutes,
    'issuance-of-licenses-page': {
        id: 'issuance-of-licenses-page',
        title: 'Выдача лицензий',
        path: ISSUANCE_OF_LICENSES,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : IssuanceOfLicensesPage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    dismissal: {
        id: 'dismissal2',
        title: 'Заявление на увольнение',
        path: BUFFER_DISMISSAL,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : DismissalBufferPage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к кадровым заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: HR_APPLICATIONS_ROUTE,
    },
    'holiday-work': {
        id: 'part-time-employment',
        title: 'Заявление о привлечении к работе в выходной день',
        path: BUFFER_HOLIDAY_WORK,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : HolidayWorkBufferPage,
        isTemplate: false,
        group: 'OTHER',
    },
    'medical-examination': {
        id: 'part-time-employment',
        title: 'Заявление о диспансеризации',
        path: BUFFER_MEDICAL_EXAMINATION,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : MedicalExaminationBufferPage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к кадровым заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: HR_APPLICATIONS_ROUTE,
    },
    'holiday-planning': {
        id: 'holiday-postponed',
        title: 'Заявление о предоставлении отпуска',
        path: BUFFER_HOLIDAY_PLANNING,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : HolidayPlanningBufferPage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к кадровым заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: HR_APPLICATIONS_ROUTE,
    },
    'holiday-transfer': {
        id: 'holiday-transfer',
        title: 'Заявление о переносе отпуска',
        path: BUFFER_HOLIDAY_TRANSFER,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : HolidayTransferBufferPage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к кадровым заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: HR_APPLICATIONS_ROUTE,
    },

    'work-transfer': {
        id: 'dismissal',
        title: 'Заявление на перевод',
        path: BUFFER_WORK_TRANSFER,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : WorkTransferBufferPage,
        isTemplate: false,
        group: 'OTHER',
    },

    'part-time-employment': {
        id: 'part-time-employment',
        title: 'Заявление на трудоустройство по совместительству',
        path: PARTTIME_EMPLOYMENT,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : PartTimeEmployment,
        isTemplate: false,
        group: 'OTHER',
    },
    'holiday-work-form': {
        id: 'part-time-employment',
        title: 'Заявление о привлечении к работе в выходной день',
        path: HOLIDAY_WORK,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : HolidayWork,
        isTemplate: false,
        group: 'OTHER',
    },
    'medical-examination-form': {
        id: 'part-time-employment',
        title: 'Заявление о диспансеризации',
        path: MEDICAL_EXAMINATION,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : MedicalExamination,
        isTemplate: false,
        group: 'OTHER',
    },
    'holiday-planning-form': {
        id: 'holiday-postponed',
        title: 'Заявление о предоставлении отпуска',
        path: HOLIDAY_PLANNING,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : HolidayPlanning,
        isTemplate: false,
        group: 'OTHER',
    },
    'holiday-transfer-form': {
        id: 'holiday-transfer',
        title: 'Заявление о переносе отпуска',
        path: HOLIDAY_TRANSFER,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : HolidayTransfer,
        isTemplate: false,
        group: 'OTHER',
    },
    'work-transfer-form': {
        id: 'work-transfer-form',
        title: 'Заявление на перевод',
        path: WORK_TRANSFER,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : WorkTransfer,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к кадровым заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: HR_APPLICATIONS_ROUTE,
    },
    'work-transfer-change-rate-form': {
        id: 'work-transfer-form',
        title: 'Заявление на перевод',
        path: WORK_TRANSFER_CHANGE_RATE,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : WorkTransferChangeRate,
        isTemplate: false,
        group: 'OTHER',
    },
    'extra-holiday-coll': {
        id: 'dismissal',
        title: 'Заявление о предоставлении дополнительного отпуска по коллективному договору',
        path: EXTRA_HOLIDAY_COLL,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : ExtraHolidayColl,
        isTemplate: false,
        group: 'OTHER',
    },
    dismissal_form: {
        id: 'dismissal',
        title: 'Заявление на увольнение',
        path: DISMISSAL,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : Dismissal,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к кадровым заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: HR_APPLICATIONS_ROUTE,
    },
    'getting-computer-equipment': {
        id: 'getting-computer-equipment',
        title: 'Получение нового компьютерного оборудования',
        icon: <FiFileText />,
        color: 'blue',
        path: GETTING_COMPUTER_EQUIPMENT,
        Component: isProduction ? ApplicationRedirect : GettingComputerEquipmentPage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'connecting-computer': {
        id: 'connecting-computer',
        title: 'Подключение компьютера, МФУ, телефона, WiFi',
        icon: <FiFileText />,
        color: 'blue',
        path: CONNECTING_COMPUTER,
        Component: isProduction ? ApplicationRedirect : ConnectingComputerPage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'printer-maintenance': {
        id: 'printer-maintenance',
        title: 'Обслуживание принтеров, МФУ',
        icon: <FiFileText />,
        color: 'blue',
        path: PRINTER_MAINTENANCE,
        Component: isProduction ? ApplicationRedirect : PrinterMaintenancePage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'question-sed': {
        id: 'question-sed',
        title: 'Вопрос по СЭД Directum и 1С',
        icon: <FiFileText />,
        color: 'blue',
        path: QUESTION_SED,
        Component: isProduction ? ApplicationRedirect : QuestionSedPage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'question-personal-account': {
        id: 'question-personal-account',
        title: 'Вопрос по Личному кабинету',
        icon: <FiFileText />,
        color: 'blue',
        path: QUESTION_PERSONAL_ACCOUNT,
        Component: isProduction ? ApplicationRedirect : QuestionPersonalAccountPage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'other-it-services': {
        id: 'other-it-services',
        title: 'Прочее ИТ-обслуживание',
        icon: <FiFileText />,
        color: 'blue',
        path: OTHER_IT_SERVICES,
        Component: isProduction ? ApplicationRedirect : OtherItServicesPage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'certificate-form-place-of-work': {
        id: 'certificate-form-place-of-work',
        title: 'Справка с места работы',
        icon: <FiFileText />,
        color: 'blue',
        path: CERTIFICATE_FROM_PLACE_OF_WORK,
        Component: isProduction ? ApplicationRedirect : CertificateFromPlaceOfWorkPage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'visa-certificate': {
        id: 'visa-certificate',
        title: 'Справка на визу',
        icon: <FiFileText />,
        color: 'blue',
        path: VISA_CERTIFICATE,
        Component: isProduction ? ApplicationRedirect : VisaCertificatePage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'certificate-of-work-experience': {
        id: 'certificate-of-work-experience',
        title: 'Справка о стаже работы',
        icon: <FiFileText />,
        color: 'blue',
        path: CERTIFICATE_OF_WORK_EXPERIENCE,
        Component: isProduction ? ApplicationRedirect : CertificateOfWorkExperiencePage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'number-of-unused-vacation-days': {
        id: 'number-of-unused-vacation-days',
        title: 'Справка о количестве неиспользованных дней отпуска',
        icon: <FiFileText />,
        color: 'blue',
        path: NUMBER_OF_UNUSED_VACATION_DAYS,
        Component: isProduction ? ApplicationRedirect : NumberOfUnusedVacationDaysPage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'copy-of-employment-record': {
        id: 'copy-of-employment-record',
        title: 'Копия трудовой книжки',
        icon: <FiFileText />,
        color: 'blue',
        path: COPY_OF_EMPLOYMENT_RECORD,
        Component: isProduction ? ApplicationRedirect : CopyOfEmploymentRecordPage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'copies-of-documents-from-personal-file': {
        id: 'copies-of-documents-from-personal-file',
        title: 'Копии документов из личного дела',
        icon: <FiFileText />,
        color: 'blue',
        path: COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE,
        Component: isProduction ? ApplicationRedirect : CopiesOfDocumentsFromPersonalFilePage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'work-on-terms-of-external-concurrency': {
        id: 'work-on-terms-of-external-concurrency',
        title: 'Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку',
        icon: <FiFileText />,
        color: 'blue',
        path: WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY,
        Component: isProduction ? ApplicationRedirect : WorkOnTermsOfExternalConcurrencyPage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'certificate-time-parental-leave': {
        id: 'certificate-time-parental-leave',
        title: 'Справка об отпуске по уходу за ребенком до 1,5 и 3 лет',
        icon: <FiFileText />,
        color: 'blue',
        path: CERTIFICATE_TIME_PARENTAL_LEAVE,
        Component: isProduction ? ApplicationRedirect : CertificateTimeParentalLeavePage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'arbitrary-request': {
        id: 'arbitrary-request',
        title: 'Произвольный запрос',
        icon: <FiFileText />,
        color: 'blue',
        path: ARBITRARY_REQUEST,
        Component: isProduction ? ApplicationRedirect : ArbitraryRequestPage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    courier: {
        id: 'courier',
        title: 'Курьер',
        icon: <FiFileText />,
        color: 'blue',
        path: COURIER,
        Component: isProduction ? ApplicationRedirect : CourierPage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },

    'personal-income-tax-reference': {
        id: 'personal-income-tax-reference',
        title: 'Справка по форме 2-НДФЛ',
        icon: <FiFileText />,
        color: 'blue',
        path: PERSONA_INCOME_TAX_REFERENCE,
        Component: isProduction ? ApplicationRedirect : PersonaIncomeTaxReferencePage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'payment-of-child-birth-allowance': {
        id: 'payment-of-child-birth-allowance',
        title: 'Справка о выплате (не выплате) единовременного пособия на рождение ребенка',
        icon: <FiFileText />,
        color: 'blue',
        path: PAYMENT_OF_CHILD_BIRTH_ALLOWANCE,
        Component: isProduction ? ApplicationRedirect : PaymentOfChildBirthAllowancePage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'payment-for-child-care': {
        id: 'payment-for-child-care',
        title: 'Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)',
        icon: <FiFileText />,
        color: 'blue',
        path: PAYMENT_FOR_CHILD_CARE,
        Component: isProduction ? ApplicationRedirect : PaymentForChildCarePage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'contact-info-actualization': {
        id: 'contact-info-actualization',
        title: 'Актуализация контактных данных',
        icon: <FiFileText />,
        color: 'blue',
        path: CONTACT_INFO_ACTUALIZATION,
        Component: ContactInfoActualizationPage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'data-verification': {
        id: 'data-verification',
        title: 'Анкета для сверки данных',
        icon: <FiFileText />,
        color: 'blue',
        path: DATA_VERIFICATION_ROUTE,
        Component: DataVerificationPage,
        isTemplate: false,
        group: 'OTHER',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
})
