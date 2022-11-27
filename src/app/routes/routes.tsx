import React from 'react'
import ArbitrayRequestPage from '@pages/applications/pages/other/arbitrary-request'
import ApplicationForCertificateOfAttendance from '@pages/applications/pages/multifunctional-center/certificate-of-attendance'
import ApplicationPaperCall from '@pages/applications/pages/multifunctional-center/paper-call'
import ApplicationSocialAgencies from '@pages/applications/pages/multifunctional-center/social-agencies'
import ApplicationForSocialScrollarship from '@pages/applications/pages/trade-union-organization/social-scollarship'
import PageIsNotReady from '@pages/page-is-not-ready'
import { BiCheckCircle, BiIdCard, BiInfoCircle } from 'react-icons/bi'
import { MdOutlineBedroomChild } from 'react-icons/md'
import { FiBriefcase, FiFileText } from 'react-icons/fi'
import AcadPerformance from '../../pages/acad-performance'
import { generalHiddenRoutes, generalRoutes, IRoutes, PROJECT_ACTIVITIES_ROUTE } from './general-routes'
import ApplicationsPage from '@pages/applications'
import { FaRegLightbulb } from 'react-icons/fa'
import RegularAccommodationPage from '@pages/applications/pages/campus-management/regular-accommodation'
import AccommodationCorrespondenceFormPage from '@pages/applications/pages/campus-management/accommodation-correspondence-form'
import AcademicLeaveAccommodationPage from '@pages/applications/pages/campus-management/academic-leave-accommodation'
import PreferentialAccommodationPage from '@pages/applications/pages/campus-management/preferential-accommodation'
import FamilyRoomPage from '@pages/applications/pages/campus-management/family-room'
import TerminationOfEmploymentContractPage from '@pages/applications/pages/campus-management/termination-of-employment-contract'
import RelocationInsideHostelPage from '@pages/applications/pages/campus-management/relocation-inside-hostel'
import RelocationToAnotherHostelPage from '@pages/applications/pages/campus-management/relocation-to-another-hostel'
import PaymentRecipient from '@pages/applications/pages/department-of-paid-services/paymnet-recipient'
import RestoringTheMagneticPass from '@pages/applications/pages/multifunctional-center/restoring-the-magnetic-pass'
import MilitaryRegistrationDocuments from '@pages/applications/pages/mobilization-department/military-registration-documents'
import IncreasedStateAcademicScholarship from '@pages/applications/pages/trade-union-organization/increased-state-academic-scholarship'
import RetakeForDiploma from '@pages/applications/pages/multifunctional-center/retake-for-diploma'
import FinancialSupport from '@pages/applications/pages/trade-union-organization/financial-support'
import FinancialAssistance from '@pages/applications/pages/trade-union-organization/financial-assistance'
import MilitaryRegistrationCard from '@pages/applications/pages/mobilization-department/military-registration-card'
import StateAccreditation from '@pages/applications/pages/multifunctional-center/state-accreditation'
import StudentStatus from '@pages/applications/pages/multifunctional-center/student-status'
import ChangingPersonalData from '@pages/applications/pages/multifunctional-center/changing-personal-data'
import HelpfulInformation from '@pages/helpful-information'
import ClarificationOfPassportDataApplication from '@pages/applications/pages/multifunctional-center/clarification-of-passport-data'
import ApplicationHolidaysAfterTraining from '@pages/applications/pages/multifunctional-center/holidays-after-training'
import ApplicationProvisionAcademicLeave from '@pages/applications/pages/multifunctional-center/provision-academic-leave'
import ApplicationIndependentlyDeduction from '@pages/applications/pages/multifunctional-center/independently-deducted'
import ApplicationExtensionAttestation from '@pages/applications/pages/multifunctional-center/extension-attestation'
import ApplicationForSuperiorRoom from '@pages/application-for-superior-room'
import DormitoryPage from '@pages/dormitory'
import FullTimePartTimeFormPage from '@pages/applications/pages/campus-management/full-time-part-time-form'
import useIsTestEnv from '@utils/hooks/use-is-test-env'

export const APPLICATIONS_ROUTE = '/applications'
export const JOB_ROUTE = '/job'
export const APPLICATION_FOR_SUPERIOR_ROOM_ROUTE = '/application-for-superior-room'
export const ACAD_PERFORMANCE_ROUTE = '/acad-performance'
export const HELPFUL_INFORMATION = '/helpful-information'
export const DORMITORY = '/dormitory'

//hidden routes
export const CLARIFICATION_OF_PASSPORT_DATA_ROUTE = APPLICATIONS_ROUTE + '/clarification-of-passport-data'
export const ARBITRARY_REQUEST_ROUTE = APPLICATIONS_ROUTE + '/arbitrary-request'
export const SOCIAL_SCOLLARSHIP = APPLICATIONS_ROUTE + '/social-scollarship'
export const CERTIFICATE_OF_ATTENDANCE = APPLICATIONS_ROUTE + '/certificate-of-attendance'
export const SOCIAL_AGENCIES = APPLICATIONS_ROUTE + '/social-agencies'
export const PAPER_CALL = APPLICATIONS_ROUTE + '/paper-call'
export const REGULAR_ACCOMMODATION = APPLICATIONS_ROUTE + '/regular-accommodation'
export const FULL_TIME_PART_TIME_FORM = APPLICATIONS_ROUTE + '/full-time-part-time-form'
export const ACCOMMODATION_CORRESPONDENCE_FORM = APPLICATIONS_ROUTE + '/accommodation-correspondence-form'
export const ACADEMIC_LEAVE_ACCOMMODATION = APPLICATIONS_ROUTE + '/academic-leave-accommodation'
export const PREFERENTIAL_ACCOMMODATION = APPLICATIONS_ROUTE + '/preferential-accommodation'
export const FAMILY_ROOM = APPLICATIONS_ROUTE + '/family-room'
export const TERMINATION_OF_EMPLOYMENT_CONTRACT = APPLICATIONS_ROUTE + '/termination-of-employment-contract'
export const RELOCATION_INSIDE_HOSTEL = APPLICATIONS_ROUTE + '/relocation-inside-hostel'
export const RELOCATION_TO_ANOTHER_HOSTEL = APPLICATIONS_ROUTE + '/relocation-to-another-hostel'
export const PAYMENT_RECIPIENT = APPLICATIONS_ROUTE + '/payment-recipient'
export const RESTORING_THE_MAGNETIC_PASS = APPLICATIONS_ROUTE + '/restoring-the-magnetic-pass'
export const RETAKE_FOR_DIPLOMA = APPLICATIONS_ROUTE + '/retake-for-diploma'
export const MILITARY_REGISTRATION_DOCUMENTS = APPLICATIONS_ROUTE + '/military-registration-documents'
export const FINANCIAL_SUPPORT = APPLICATIONS_ROUTE + '/financial-support'
export const FINANCIAL_ASSISTANCE = APPLICATIONS_ROUTE + '/financial-assistance'
export const INCREASED_STATE_ACADEMIC_SCHOLARSHIP = APPLICATIONS_ROUTE + '/increased-state-academic-scholarship'
export const CHANGING_PERSONAL_DATA = APPLICATIONS_ROUTE + '/changing-personal-data'
export const STUDENT_STATUS = APPLICATIONS_ROUTE + '/student-status'
export const STATE_ACCREDITATION = APPLICATIONS_ROUTE + '/state-accreditation'
export const MILITARY_REGISTRATION_CARD = APPLICATIONS_ROUTE + '/military-registration-card'
export const HOLIDAYS_AFTER_TRAINING = APPLICATIONS_ROUTE + '/holidays-after-training'
export const PROVISION_ACADEMIC_LEAVE = APPLICATIONS_ROUTE + '/provision-academic-leave'
export const INDEPENDENTLY_DEDUCTED = APPLICATIONS_ROUTE + '/independently-deducted'
export const EXTENSION_ATTESTATION = APPLICATIONS_ROUTE + '/extension-attestation'

const isProdEnv = !useIsTestEnv()
const ApplicationRedirect = () => PageIsNotReady({ oldVersionUrl: '/sprav' })

export const privateRoutes: () => IRoutes = () => ({
    ...generalRoutes,
    applications: {
        id: 'applications',
        title: 'Цифровые сервисы',
        icon: <FiFileText />,
        path: APPLICATIONS_ROUTE,
        Component: ApplicationsPage,
        color: 'red',
        isTemplate: false,
        group: 'GENERAL',
    },
    'project-activity': {
        id: 'project-activity',
        title: 'Проектная деятельность',
        icon: <FaRegLightbulb />,
        path: PROJECT_ACTIVITIES_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: PROJECT_ACTIVITIES_ROUTE }),
        color: 'yellow',
        isTemplate: false,
        group: 'OTHER',
    },
    'acad-performance': {
        id: 'acad-performance',
        title: 'Успеваемость',
        icon: <BiCheckCircle />,
        path: ACAD_PERFORMANCE_ROUTE,
        Component: AcadPerformance,
        color: 'green',
        isTemplate: false,
        group: 'LEARNING_ACTIVITIES',
    },
    job: {
        id: 'job',
        title: 'Работа',
        icon: <FiBriefcase />,
        path: JOB_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: '/job' }),
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
    },
    'helpful-information': {
        id: 'helpful-information',
        title: 'Полезная информация',
        icon: <BiInfoCircle />,
        path: HELPFUL_INFORMATION,
        Component: HelpfulInformation,
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',
    },
    'application-for-superior-room': {
        id: 'application-for-superior-room',
        title: 'Заявка на комнату повышенной комфортности',
        icon: <MdOutlineBedroomChild />,
        path: APPLICATION_FOR_SUPERIOR_ROOM_ROUTE,
        Component: ApplicationForSuperiorRoom,
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',
        show: false,
    },
    dormitory: {
        id: 'dormitory',
        title: 'Общежитие',
        icon: <MdOutlineBedroomChild />,
        path: DORMITORY,
        Component: DormitoryPage,
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',
        show: true,
    },
})

export const hiddenRoutes: () => IRoutes = () => ({
    ...generalHiddenRoutes,
    'clarification-of-passport-data': {
        id: 'clarification-of-passport-data',
        title: 'Уточнение паспортных данных',
        icon: <FiBriefcase />,
        path: CLARIFICATION_OF_PASSPORT_DATA_ROUTE,
        Component: isProdEnv ? ApplicationRedirect : ClarificationOfPassportDataApplication,
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
    },
    'arbitrary-request': {
        id: 'arbitrary-request',
        title: 'Произвольный запрос',
        icon: <FiBriefcase />,
        path: ARBITRARY_REQUEST_ROUTE,
        Component: isProdEnv ? ApplicationRedirect : ArbitrayRequestPage,
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
    },

    'social-scollarship': {
        id: 'social-scollarship',
        title: 'Социальная стипендия',
        icon: <BiIdCard />,
        path: SOCIAL_SCOLLARSHIP,
        Component: isProdEnv ? ApplicationRedirect : ApplicationForSocialScrollarship,
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
    },
    'certificate-of-attendance': {
        id: 'certificate-of-attendance',
        title: 'Сертификат об обучении',
        icon: <BiIdCard />,
        path: CERTIFICATE_OF_ATTENDANCE,
        Component: isProdEnv ? ApplicationRedirect : ApplicationForCertificateOfAttendance,
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
    },
    'social-agencies': {
        id: 'social-agencies',
        title: 'Справка в социальные учреждения',
        icon: <BiIdCard />,
        path: SOCIAL_AGENCIES,
        Component: isProdEnv ? ApplicationRedirect : ApplicationSocialAgencies,
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
    },
    'paper-call': {
        id: 'paper-call',
        title: 'Справка-вызов',
        icon: <BiIdCard />,
        path: PAPER_CALL,
        Component: isProdEnv ? ApplicationRedirect : ApplicationPaperCall,
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
    },
    'regular-accommodation': {
        id: 'regular-accommodation',
        title: 'Предоставление права проживания (очная форма)',
        icon: BiIdCard,
        path: REGULAR_ACCOMMODATION,
        Component: RegularAccommodationPage,
        color: 'blue',
        isTemplate: false,
    },
    'full-time-part-time-form': {
        id: 'full-time-part-time-form',
        title: 'Предоставление права проживания (очно-заочная форма)',
        icon: BiIdCard,
        path: FULL_TIME_PART_TIME_FORM,
        Component: FullTimePartTimeFormPage,
        color: 'blue',
        isTemplate: false,
    },
    'accommodation-correspondence-form': {
        id: 'accommodation-correspondence-form',
        title: 'Предоставление права проживания (заочная форма)',
        icon: BiIdCard,
        path: ACCOMMODATION_CORRESPONDENCE_FORM,
        Component: AccommodationCorrespondenceFormPage,
        color: 'blue',
        isTemplate: false,
    },
    'academic-leave-accommodation': {
        id: 'academic-leave-accommodation',
        title: 'Предоставление права проживания в период академического отпуска',
        icon: BiIdCard,
        path: ACADEMIC_LEAVE_ACCOMMODATION,
        Component: isProdEnv ? ApplicationRedirect : AcademicLeaveAccommodationPage,
        color: 'blue',
        isTemplate: false,
    },
    'preferential-accommodation': {
        id: 'preferential-accommodation',
        title: 'Предоставление права проживания льготной категории граждан',
        icon: BiIdCard,
        path: PREFERENTIAL_ACCOMMODATION,
        Component: isProdEnv ? ApplicationRedirect : PreferentialAccommodationPage,
        color: 'blue',
        isTemplate: false,
    },
    'family-room': {
        id: 'family-room',
        title: 'Предоставление права проживания в семейной комнате',
        icon: BiIdCard,
        path: FAMILY_ROOM,
        Component: isProdEnv ? ApplicationRedirect : FamilyRoomPage,
        color: 'blue',
        isTemplate: false,
    },
    'termination-of-employment-contract': {
        id: 'termination-of-employment-contract',
        title: 'Расторжение договора найма',
        icon: BiIdCard,
        path: TERMINATION_OF_EMPLOYMENT_CONTRACT,
        Component: isProdEnv ? ApplicationRedirect : TerminationOfEmploymentContractPage,
        color: 'blue',
        isTemplate: false,
    },
    'relocation-inside-hostel': {
        id: 'relocation-inside-hostel',
        title: 'Переселение внутри общежития',
        icon: BiIdCard,
        path: RELOCATION_INSIDE_HOSTEL,
        Component: isProdEnv ? ApplicationRedirect : RelocationInsideHostelPage,
        color: 'blue',
        isTemplate: false,
    },
    'relocation-to-another-hostel': {
        id: 'relocation-to-another-hostel',
        title: 'Переселение в другое общежитие',
        icon: BiIdCard,
        path: RELOCATION_TO_ANOTHER_HOSTEL,
        Component: isProdEnv ? ApplicationRedirect : RelocationToAnotherHostelPage,
        color: 'blue',
        isTemplate: false,
    },
    'payment-recipient': {
        id: 'payment-recipient',
        title: 'Отправка квитанции об оплате',
        icon: BiIdCard,
        path: PAYMENT_RECIPIENT,
        Component: PaymentRecipient,
        color: 'blue',
        isTemplate: false,
    },
    'restoring-the-magnetic-pass': {
        id: 'restoring-the-magnetic-pass',
        title: 'Запрос на восстановление магнитного пропуска',
        icon: BiIdCard,
        path: RESTORING_THE_MAGNETIC_PASS,
        Component: isProdEnv ? ApplicationRedirect : RestoringTheMagneticPass,
        color: 'blue',
        isTemplate: false,
    },
    'military-registration-documents': {
        id: 'military-registration-documents',
        title: 'Отправить документы воинского учета',
        icon: BiIdCard,
        path: MILITARY_REGISTRATION_DOCUMENTS,
        Component: isProdEnv ? ApplicationRedirect : MilitaryRegistrationDocuments,
        color: 'blue',
        isTemplate: false,
    },
    'retake-for-diploma': {
        id: 'retake-for-diploma',
        title: 'Заявление на пересдачу для получения диплома с отличием',
        icon: BiIdCard,
        path: RETAKE_FOR_DIPLOMA,
        Component: isProdEnv ? ApplicationRedirect : RetakeForDiploma,
        color: 'blue',
        isTemplate: false,
    },
    'increased-state-academic-scholarship': {
        id: 'increased-state-academic-scholarship',
        title: 'Получение повышенной государственной академической стипендии',
        icon: BiIdCard,
        path: INCREASED_STATE_ACADEMIC_SCHOLARSHIP,
        Component: isProdEnv ? ApplicationRedirect : IncreasedStateAcademicScholarship,
        color: 'blue',
        isTemplate: false,
    },
    'financial-support': {
        id: 'financial-support',
        title: 'Оформить материальную поддержку остронуждающимся студентам (Дотацию)',
        icon: BiIdCard,
        path: FINANCIAL_SUPPORT,
        Component: isProdEnv ? ApplicationRedirect : FinancialSupport,
        color: 'blue',
        isTemplate: false,
    },
    'financial-assistance': {
        id: 'financial-assistance',
        title: 'Финансовая поддержка',
        icon: BiIdCard,
        path: FINANCIAL_ASSISTANCE,
        Component: isProdEnv ? ApplicationRedirect : FinancialAssistance,
        color: 'blue',
        isTemplate: false,
    },
    'changing-personal-data': {
        id: 'changing-personal-data',
        title: 'Запрос на изменение персональных данных',
        icon: BiIdCard,
        path: CHANGING_PERSONAL_DATA,
        Component: isProdEnv ? ApplicationRedirect : ChangingPersonalData,
        color: 'blue',
        isTemplate: false,
    },
    'student-status': {
        id: 'student-status',
        title: 'Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования',
        icon: BiIdCard,
        path: STUDENT_STATUS,
        Component: isProdEnv ? ApplicationRedirect : StudentStatus,
        color: 'blue',
        isTemplate: false,
    },
    'state-accreditation': {
        id: 'state-accreditation',
        title: 'Выдача лицензий и свидетельств о государственной аккредитации',
        icon: BiIdCard,
        path: STATE_ACCREDITATION,
        Component: isProdEnv ? ApplicationRedirect : StateAccreditation,
        color: 'blue',
        isTemplate: false,
    },
    'holidays-after-training': {
        id: 'holidays-after-training',
        title: 'Предоставление каникул',
        icon: <BiIdCard />,
        path: HOLIDAYS_AFTER_TRAINING,
        Component: isProdEnv ? ApplicationRedirect : ApplicationHolidaysAfterTraining,
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
    },
    'provision-academic-leave': {
        id: 'provision-academic-leave',
        title: 'Предоставление академического отпуска',
        icon: <BiIdCard />,
        path: PROVISION_ACADEMIC_LEAVE,
        Component: isProdEnv ? ApplicationRedirect : ApplicationProvisionAcademicLeave,
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
    },
    'independently-deducted': {
        id: 'independently-deducted',
        title: 'Отчисление по инициативе обучающегося',
        icon: <BiIdCard />,
        path: INDEPENDENTLY_DEDUCTED,
        Component: isProdEnv ? ApplicationRedirect : ApplicationIndependentlyDeduction,
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
    },
    'extension-attestation': {
        id: 'extension-attestation',
        title: 'Продление промежуточной аттестации ',
        icon: <BiIdCard />,
        path: EXTENSION_ATTESTATION,
        Component: isProdEnv ? ApplicationRedirect : ApplicationExtensionAttestation,
        color: 'blue',
        isTemplate: false,
        group: 'OTHER',
    },
    'military-registration-card': {
        id: 'military-registration-card',
        title: 'Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу',
        icon: BiIdCard,
        path: MILITARY_REGISTRATION_CARD,
        Component: isProdEnv ? ApplicationRedirect : MilitaryRegistrationCard,
        color: 'blue',
        isTemplate: false,
    },
})
