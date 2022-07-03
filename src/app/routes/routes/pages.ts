import { lazy } from 'react'

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
export const AcadPerformance = lazy(() => import('@pages/acad-performance'))
export const ApplicationsPage = lazy(() => import('@pages/applications'))
export const ProjectActivitiesPage = lazy(() => import('@pages/project-activities'))
export const RegularAccommodationPage = lazy(() => import('@pages/applications/pages/regular-accommodation'))
export const AccommodationCorrespondenceFormPage = lazy(
    () => import('@pages/applications/pages/accommodation-correspondence-form'),
)
export const AcademicLeaveAccommodationPage = lazy(
    () => import('@pages/applications/pages/academic-leave-accommodation'),
)
export const PreferentialAccommodationPage = lazy(() => import('@pages/applications/pages/preferential-accommodation'))
export const FamilyRoomPage = lazy(() => import('@pages/applications/pages/family-room'))
export const TerminationOfEmploymentContractPage = lazy(
    () => import('@pages/applications/pages/termination-of-employment-contract'),
)
export const RelocationInsideHostelPage = lazy(() => import('@pages/applications/pages/relocation-inside-hostel'))
export const RelocationToAnotherHostelPage = lazy(
    () => import('@pages/applications/pages/relocation-to-another-hostel'),
)
