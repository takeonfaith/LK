import React from 'react'
import { isProduction } from '@shared/constants'
import FullTimePartTimeFormPage from '@pages/applications/pages/campus-management/full-time-part-time-form'
import PageIsNotReady from '@pages/page-is-not-ready'
import { BiCheckCircle, BiIdCard, BiInfoCircle, BiRuble, BiStar } from 'react-icons/bi'
import { FaRegLightbulb } from 'react-icons/fa'
import { FiBriefcase, FiFileText } from 'react-icons/fi'
import { MdOutlineBedroomChild } from 'react-icons/md'
import {
    generalHiddenRoutes,
    generalRoutes,
    IRoutes,
    PAYMENTS_ROUTE,
    PROJECT_ACTIVITIES_ROUTE,
    USEFUL_INFO_ROUTE,
} from './general-routes'
import {
    AcademicLeaveAccommodationPage,
    AcadPerformance,
    AccommodationCorrespondenceFormPage,
    ApplicationExtensionAttestation,
    ApplicationForCertificateOfAttendance,
    ApplicationForFinancialAssistance,
    ApplicationForSocialScrollarship,
    ApplicationForSuperiorRoom,
    ApplicationHolidaysAfterTraining,
    ApplicationIndependentlyDeduction,
    ApplicationPaperCall,
    ApplicationProvisionAcademicLeave,
    ApplicationSocialAgencies,
    ApplicationsPage,
    ChangingPersonalData,
    ClarificationOfPassportDataApplication,
    DormitoryPage,
    FamilyRoomPage,
    FinancialSupport,
    IncreasedStateAcademicScholarship,
    MilitaryRegistrationCard,
    PaymentRecipient,
    PreferentialAccommodationPage,
    ProjectActivitiesPage,
    RegularAccommodationPage,
    RelocationInsideHostelPage,
    RelocationToAnotherHostelPage,
    AccommodationForGraduatesPage,
    RestoringTheMagneticPass,
    RetakeForDiploma,
    StateAccreditation,
    StudentStatus,
    TerminationOfEmploymentContractPage,
    ArbitraryRequestPage,
    MilitaryRegistrationDocuments,
    StudentEmploymentPage,
} from './other-routes/pages'
import { HelpfulInformation } from './teacher-routes/pages'
import { User } from '@shared/api/model'
import PaymentsPage from '@pages/payments'
import { EndDateSuperiorRoom } from '@pages/application-for-superior-room/lib/get-status'
import MilitaryRegistration from '@pages/applications/pages/mobilization-department/military-registration'

export const APPLICATIONS_ROUTE = '/applications'
export const JOB_ROUTE = '/job'
export const APPLICATION_FOR_SUPERIOR_ROOM_ROUTE = '/application-for-superior-room'
export const ACAD_PERFORMANCE_ROUTE = '/acad-performance'
export const DORMITORY = '/dormitory'

//hidden routes
export const CLARIFICATION_OF_PASSPORT_DATA_ROUTE = APPLICATIONS_ROUTE + '/clarification-of-passport-data'
export const ARBITRARY_REQUEST_ROUTE = APPLICATIONS_ROUTE + '/arbitrary-request'
export const STUDENT_EMPLOYMENT_ROUTE = APPLICATIONS_ROUTE + '/student-employment'
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
export const ACCOMMODATION_FOR_GRADUATES = APPLICATIONS_ROUTE + '/accommodation-for-graduates'
export const PAYMENT_RECIPIENT = APPLICATIONS_ROUTE + '/payment-recipient'
export const RESTORING_THE_MAGNETIC_PASS = APPLICATIONS_ROUTE + '/restoring-the-magnetic-pass'
export const RETAKE_FOR_DIPLOMA = APPLICATIONS_ROUTE + '/retake-for-diploma'
export const MILITARY_REGISTRATION_DOCUMENTS = APPLICATIONS_ROUTE + '/military-registration-documents'
export const MILITARY_REGISTRATION = APPLICATIONS_ROUTE + '/military-registration'
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

const ApplicationRedirect = () => PageIsNotReady({ oldVersionUrl: '/sprav' })

export const privateRoutes: () => IRoutes = () => ({
    // On this position just to make necessary order
    applications: {
        id: 'applications',
        title: 'Цифровые сервисы',
        icon: <FiFileText />,
        path: APPLICATIONS_ROUTE,
        Component: ApplicationsPage,
        color: 'red',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        pageSize: 'big',
        keywords: ['справки', 'справка', 'заявления', 'заявление'],
    },
    ...generalRoutes,
    payments: {
        id: 'payments',
        title: 'Договоры и оплаты',
        icon: <BiRuble />,
        path: PAYMENTS_ROUTE,
        Component: PaymentsPage,
        color: 'green',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        keywords: ['оплата'],
    },
    dormitory: {
        id: 'dormitory',
        title: 'Список ожидания на заселение в общежитие',
        icon: <MdOutlineBedroomChild />,
        path: DORMITORY,
        Component: DormitoryPage,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        show: true,
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
        keywords: ['оценки', 'экзамены', 'зачеты'],
    },
    'project-activity': {
        id: 'project-activity',
        title: 'Проектная деятельность',
        icon: <FaRegLightbulb />,
        path: PROJECT_ACTIVITIES_ROUTE,
        Component: ProjectActivitiesPage,
        color: 'orange',
        isTemplate: false,
        group: 'LEARNING_ACTIVITIES',
        keywords: ['пд'],
    },

    'helpful-information': {
        id: 'helpful-information',
        title: 'Полезная информация',
        icon: <BiInfoCircle />,
        path: USEFUL_INFO_ROUTE,
        Component: HelpfulInformation,
        color: 'blue',
        isTemplate: true,
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
        show: new Date() > new Date(EndDateSuperiorRoom) ? false : true,
    },
})

export const hiddenRoutes: (user: User | null) => IRoutes = (user) => ({
    ...generalHiddenRoutes,
    'clarification-of-passport-data': {
        id: 'clarification-of-passport-data',
        title: 'Уточнение паспортных данных',
        icon: <FiBriefcase />,
        path: CLARIFICATION_OF_PASSPORT_DATA_ROUTE,
        Component: ClarificationOfPassportDataApplication,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'arbitrary-request': {
        id: 'arbitrary-request',
        title: 'Произвольный запрос',
        icon: <FiBriefcase />,
        path: ARBITRARY_REQUEST_ROUTE,
        Component: ArbitraryRequestPage,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'student-employment': {
        id: 'student-employment',
        title: 'Трудоустройство студентов',
        icon: <FiBriefcase />,
        path: STUDENT_EMPLOYMENT_ROUTE,
        Component: isProduction ? ApplicationRedirect : StudentEmploymentPage,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'social-scollarship': {
        id: 'social-scollarship',
        title: 'Социальная стипендия',
        icon: <BiIdCard />,
        path: SOCIAL_SCOLLARSHIP,
        Component: isProduction ? ApplicationRedirect : ApplicationForSocialScrollarship,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'certificate-of-attendance': {
        id: 'certificate-of-attendance',
        title: 'Сертификат об обучении',
        icon: <BiIdCard />,
        path: CERTIFICATE_OF_ATTENDANCE,
        Component: ApplicationForCertificateOfAttendance,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'social-agencies': {
        id: 'social-agencies',
        title: 'Справка в социальные учреждения',
        icon: <BiIdCard />,
        path: SOCIAL_AGENCIES,
        Component: ApplicationSocialAgencies,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'paper-call': {
        id: 'paper-call',
        title: 'Справка-вызов',
        icon: <BiIdCard />,
        path: PAPER_CALL,
        Component: ApplicationPaperCall,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'regular-accommodation': {
        id: 'regular-accommodation',
        title: 'Предоставление права проживания (очная форма)',
        icon: <BiIdCard />,
        path: REGULAR_ACCOMMODATION,
        Component: RegularAccommodationPage,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'full-time-part-time-form': {
        id: 'full-time-part-time-form',
        title: 'Предоставление права проживания (очно-заочная форма)',
        icon: <BiIdCard />,
        path: FULL_TIME_PART_TIME_FORM,
        Component: FullTimePartTimeFormPage,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'accommodation-correspondence-form': {
        id: 'accommodation-correspondence-form',
        title: 'Предоставление права проживания (заочная форма)',
        icon: <BiIdCard />,
        path: ACCOMMODATION_CORRESPONDENCE_FORM,
        Component: AccommodationCorrespondenceFormPage,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'academic-leave-accommodation': {
        id: 'academic-leave-accommodation',
        title: 'Предоставление права проживания в период академического отпуска',
        icon: <BiIdCard />,
        path: ACADEMIC_LEAVE_ACCOMMODATION,
        Component: AcademicLeaveAccommodationPage,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'preferential-accommodation': {
        id: 'preferential-accommodation',
        title: 'Предоставление права проживания льготной категории граждан',
        icon: <BiIdCard />,
        path: PREFERENTIAL_ACCOMMODATION,
        Component: PreferentialAccommodationPage,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'family-room': {
        id: 'family-room',
        title: 'Предоставление права проживания в семейной комнате',
        icon: <BiIdCard />,
        path: FAMILY_ROOM,
        Component: FamilyRoomPage,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'termination-of-employment-contract': {
        id: 'termination-of-employment-contract',
        title: 'Расторжение договора найма',
        icon: <BiIdCard />,
        path: TERMINATION_OF_EMPLOYMENT_CONTRACT,
        Component: TerminationOfEmploymentContractPage,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'relocation-inside-hostel': {
        id: 'relocation-inside-hostel',
        title: 'Переселение внутри общежития',
        icon: <BiIdCard />,
        path: RELOCATION_INSIDE_HOSTEL,
        Component: isProduction
            ? () => (
                  <PageIsNotReady
                      isRedirectButtonVisible={false}
                      errorText="Прием заявок на переселение внутри общежития будет осуществляться с 01.10.2023"
                  />
              )
            : RelocationInsideHostelPage,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'relocation-to-another-hostel': {
        id: 'relocation-to-another-hostel',
        title: 'Переселение в другое общежитие',
        icon: <BiIdCard />,
        path: RELOCATION_TO_ANOTHER_HOSTEL,
        Component: isProduction
            ? () => (
                  <PageIsNotReady
                      isRedirectButtonVisible={false}
                      errorText="Прием заявок на переселение в другое общежитие завершен 15.06.2023"
                  />
              )
            : RelocationToAnotherHostelPage,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'accommodation-for-graduates': {
        id: 'accommodation-for-graduates',
        title: 'Предоставление права проживания в каникулярный период',
        icon: BiIdCard,
        path: ACCOMMODATION_FOR_GRADUATES,
        Component:
            ['4', '5', '6'].includes(user?.course ?? '') ||
            user?.status?.toLocaleLowerCase()?.includes('окончил') ||
            (user?.degreeLevel?.toLocaleLowerCase() === 'магистратура' && user?.course === '2')
                ? AccommodationForGraduatesPage
                : () => (
                      <PageIsNotReady
                          isRedirectButtonVisible={false}
                          errorText={'Сервис доступен только выпускникам университета, проживающих в общежитии'}
                      />
                  ),
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'payment-recipient': {
        id: 'payment-recipient',
        title: 'Отправка квитанции об оплате',
        icon: <BiIdCard />,
        path: PAYMENT_RECIPIENT,
        Component: PaymentRecipient,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'restoring-the-magnetic-pass': {
        id: 'restoring-the-magnetic-pass',
        title: 'Запрос на восстановление магнитного пропуска',
        icon: <BiIdCard />,
        path: RESTORING_THE_MAGNETIC_PASS,
        Component: RestoringTheMagneticPass,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'military-registration-documents': {
        id: 'military-registration-documents',
        title: 'Отправить документы воинского учета',
        icon: <BiIdCard />,
        path: MILITARY_REGISTRATION_DOCUMENTS,
        Component: isProduction ? ApplicationRedirect : MilitaryRegistrationDocuments,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'military-registration': {
        id: 'military-registration',
        title: 'Воинский учет',
        icon: <BiStar />,
        path: MILITARY_REGISTRATION,
        Component: isProduction ? ApplicationRedirect : MilitaryRegistration,
        color: 'red',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: 'Воинский учет',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'retake-for-diploma': {
        id: 'retake-for-diploma',
        title: 'Заявление на пересдачу для получения диплома с отличием',
        icon: <BiIdCard />,
        path: RETAKE_FOR_DIPLOMA,
        Component: RetakeForDiploma,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'increased-state-academic-scholarship': {
        id: 'increased-state-academic-scholarship',
        title: 'Получение повышенной государственной академической стипендии',
        icon: <BiIdCard />,
        path: INCREASED_STATE_ACADEMIC_SCHOLARSHIP,
        Component: isProduction ? ApplicationRedirect : IncreasedStateAcademicScholarship,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'financial-support': {
        id: 'financial-support',
        title: 'Оформить материальную поддержку остронуждающимся студентам (Дотацию)',
        icon: <BiIdCard />,
        path: FINANCIAL_SUPPORT,
        Component: isProduction ? ApplicationRedirect : FinancialSupport,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'financial-assistance': {
        id: 'financial-assistance',
        title: 'Финансовая поддержка',
        icon: <BiIdCard />,
        path: FINANCIAL_ASSISTANCE,
        Component: isProduction ? ApplicationRedirect : ApplicationForFinancialAssistance,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'changing-personal-data': {
        id: 'changing-personal-data',
        title: 'Запрос на изменение персональных данных',
        icon: <BiIdCard />,
        path: CHANGING_PERSONAL_DATA,
        Component: ChangingPersonalData,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'student-status': {
        id: 'student-status',
        title: 'Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования',
        icon: <BiIdCard />,
        path: STUDENT_STATUS,
        Component: StudentStatus,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'state-accreditation': {
        id: 'state-accreditation',
        title: 'Выдача лицензий и свидетельств о государственной аккредитации',
        icon: <BiIdCard />,
        path: STATE_ACCREDITATION,
        Component: StateAccreditation,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'holidays-after-training': {
        id: 'holidays-after-training',
        title: 'Предоставление каникул',
        icon: <BiIdCard />,
        path: HOLIDAYS_AFTER_TRAINING,
        Component: ApplicationHolidaysAfterTraining,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'provision-academic-leave': {
        id: 'provision-academic-leave',
        title: 'Предоставление академического отпуска',
        icon: <BiIdCard />,
        path: PROVISION_ACADEMIC_LEAVE,
        Component: ApplicationProvisionAcademicLeave,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'independently-deducted': {
        id: 'independently-deducted',
        title: 'Отчисление по инициативе обучающегося',
        icon: <BiIdCard />,
        path: INDEPENDENTLY_DEDUCTED,
        Component: ApplicationIndependentlyDeduction,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'extension-attestation': {
        id: 'extension-attestation',
        title: 'Продление промежуточной аттестации ',
        icon: <BiIdCard />,
        path: EXTENSION_ATTESTATION,
        Component: ApplicationExtensionAttestation,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'military-registration-card': {
        id: 'military-registration-card',
        title: 'Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу',
        icon: <BiIdCard />,
        path: MILITARY_REGISTRATION_CARD,
        Component: isProduction ? ApplicationRedirect : MilitaryRegistrationCard,
        color: 'blue',
        isTemplate: false,
        isSubPage: true,
        backButtonText: 'Назад к заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
})
