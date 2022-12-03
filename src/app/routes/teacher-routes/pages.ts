import { lazy } from 'react'

export const CertificateFromPlaceOfWorkPage = lazy(
    () => import('@pages/teachers-applications/pages/certificate-from-the-place-of-work'),
)
export const CopiesOfDocumentsFromPersonalFilePage = lazy(
    () => import('@pages/teachers-applications/pages/copies-of-documents-from-the-personal-file'),
)
export const ContactInfoActualizationPage = lazy(() => import('@pages/contact-info-actualization'))
export const DataVerificationPage = lazy(() => import('@pages/data-verification'))
export const DownloadAdminFilesPage = lazy(() => import('@pages/download-admin-files'))
export const PersonalNotificationsPage = lazy(() => import('@pages/personal-notifications'))
export const TeachersApplicationsPage = lazy(() => import('@pages/teachers-applications'))
export const ArbitraryRequestPage = lazy(() => import('@pages/teachers-applications/pages/arbitrary-request'))
export const CertificateOfWorkExperiencePage = lazy(
    () => import('@pages/teachers-applications/pages/certificate-of-work-experience'),
)
export const CertificateTimeParentalLeavePage = lazy(
    () => import('@pages/teachers-applications/pages/certificate-time-parental-leave'),
)
export const ConnectingComputerPage = lazy(() => import('@pages/teachers-applications/pages/connecting-computer'))
export const CopyOfEmploymentRecordPage = lazy(
    () => import('@pages/teachers-applications/pages/copy-of-the-employment-record'),
)
export const CourierPage = lazy(() => import('@pages/teachers-applications/pages/courier'))
export const GettingComputerEquipmentPage = lazy(
    () => import('@pages/teachers-applications/pages/getting-computer-equipment'),
)
export const IssuanceOfLicensesPage = lazy(() => import('@pages/teachers-applications/pages/issuance-of-licenses'))
export const NumberOfUnusedVacationDaysPage = lazy(
    () => import('@pages/teachers-applications/pages/number-of-unused-vacation-days'),
)
export const OtherItServicesPage = lazy(() => import('@pages/teachers-applications/pages/other-it-services'))
export const PaymentForChildCarePage = lazy(() => import('@pages/teachers-applications/pages/payment-for-child-care'))
export const PaymentOfChildBirthAllowancePage = lazy(
    () => import('@pages/teachers-applications/pages/payment-of-child-birth-allowance'),
)
export const PersonaIncomeTaxReferencePage = lazy(
    () => import('@pages/teachers-applications/pages/persona-income-tax-reference'),
)
export const PrinterMaintenancePage = lazy(() => import('@pages/teachers-applications/pages/printer-maintenance'))
export const QuestionPersonalAccountPage = lazy(
    () => import('@pages/teachers-applications/pages/question-personal-account'),
)
export const QuestionSedPage = lazy(() => import('@pages/teachers-applications/pages/question-sed'))
export const VisaCertificatePage = lazy(() => import('@pages/teachers-applications/pages/visa-certificate'))
export const WorkOnTermsOfExternalConcurrencyPage = lazy(
    () => import('@pages/teachers-applications/pages/work-on-the-terms-of-external-concurrency'),
)
export const VacationSchedule = lazy(() => import('@pages/vacation-schedule'))

export const AllTeachersPage = lazy(() => import('@pages/all-teachers'))
export const HelpfulInformation = lazy(() => import('@pages/helpful-information'))
export const HrApplicationsPage = lazy(() => import('@pages/hr-applications'))
export const PartTimeEmployment = lazy(() => import('@pages/hr-applications/pages/part-time-deployment'))
export const HolidayPostponed = lazy(() => import('@pages/hr-applications/pages/holiday-postponed'))
export const Dismissal = lazy(() => import('@pages/hr-applications/pages/dismissal'))
export const ExtraHolidayColl = lazy(() => import('@pages/hr-applications/pages/extra-holiday-coll'))
export const HolidayWork = lazy(() => import('@pages/hr-applications/pages/holiday-work'))
export const HolidayPlanning = lazy(() => import('@pages/hr-applications/pages/holiday-planning'))
export const WorkTransfer = lazy(() => import('@pages/hr-applications/pages/work-transfer'))
export const DismissalBufferPage = lazy(() => import('@pages/hr-applications/pages/buffer-dismissal'))
