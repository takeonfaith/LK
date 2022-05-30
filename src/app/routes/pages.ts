import { lazy } from 'react'

// TODO: split student and teacher pages
export const ArbitrayRequestPage = lazy(() => import('@pages/applications/pages/arbitrary-request'))
export const ApplicationForСertificateOfAttendance = lazy(
    () => import('@pages/applications/pages/certificate-of-attendance'),
)
export const ClarificationOfPassportDataApplication = lazy(
    () => import('@pages/applications/pages/clarification-of-passport-data/arbitrary-request'),
)
export const ApplicationPaperCall = lazy(() => import('@pages/applications/pages/paper-call'))
export const ApplicationSocialAgencies = lazy(() => import('@pages/applications/pages/social-agencies'))
export const ApplicationForSocialScrollarship = lazy(() => import('@pages/applications/pages/social-scollarship'))
export const ElectronicInteractionAgreementPage = lazy(() => import('@pages/electronic-interaction-agreement'))
export const PaymentsPage = lazy(() => import('@pages/payments'))
export const TeachersSchedule = lazy(() => import('@pages/teachers-schedule'))
export const AcadPerformance = lazy(() => import('@pages/acad-performance'))
export const Home = lazy(() => import('@pages/home'))
export const LoginPage = lazy(() => import('@pages/login'))
export const SchedulePage = lazy(() => import('@pages/schedule'))
