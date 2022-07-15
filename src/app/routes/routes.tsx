import ArbitrayRequestPage from '@pages/applications/pages/arbitrary-request'
import ApplicationForСertificateOfAttendance from '@pages/applications/pages/certificate-of-attendance'
import ClarificationOfPassportDataApplication from '@pages/applications/pages/clarification-of-passport-data/arbitrary-request'
import ApplicationPaperCall from '@pages/applications/pages/paper-call'
import ApplicationSocialAgencies from '@pages/applications/pages/social-agencies'
import ApplicationForSocialScrollarship from '@pages/applications/pages/social-scollarship'
import PageIsNotReady from '@pages/page-is-not-ready'
import { BiCheckCircle, BiIdCard } from 'react-icons/bi'
import { FiBriefcase, FiFileText } from 'react-icons/fi'
import AcadPerformance from '../../pages/acad-performance'
import { generalHiddenRoutes, generalRoutes, IRoutes, PROJECT_ACTIVITIES_ROUTE } from './general-routes'
import React from 'react'
import ApplicationsPage from '@pages/applications'
import { FaRegLightbulb } from 'react-icons/fa'
import ProjectActivitiesPage from '@pages/project-activities'
import RegularAccommodationPage from '@pages/applications/pages/regular-accommodation'
import AccommodationCorrespondenceFormPage from '@pages/applications/pages/accommodation-correspondence-form'
import AcademicLeaveAccommodationPage from '@pages/applications/pages/academic-leave-accommodation'
import PreferentialAccommodationPage from '@pages/applications/pages/preferential-accommodation'
import FamilyRoomPage from '@pages/applications/pages/family-room'
import TerminationOfEmploymentContractPage from '@pages/applications/pages/termination-of-employment-contract'
import RelocationInsideHostelPage from '@pages/applications/pages/relocation-inside-hostel'
import RelocationToAnotherHostelPage from '@pages/applications/pages/relocation-to-another-hostel'

export const APPLICATIONS_ROUTE = '/applications'
export const JOB_ROUTE = '/job'
export const APPLICATION_FOR_SUPERIOR_ROOM_ROUTE = '/application-for-superior-room'
export const ACAD_PERFORMANCE_ROUTE = '/acad-performance'

//hidden routes
export const CLARIFICATION_OF_PASSPORT_DATA_ROUTE = APPLICATIONS_ROUTE + '/clarification-of-passport-data'
export const ARBITRARY_REQUEST_ROUTE = APPLICATIONS_ROUTE + '/arbitrary-request'
export const SOCIAL_SCOLLARSHIP = APPLICATIONS_ROUTE + '/social-scollarship'
export const CERTIFICATE_OF_ATTENDANCE = APPLICATIONS_ROUTE + '/certificate-of-attendance'
export const SOCIAL_AGENCIES = APPLICATIONS_ROUTE + '/social-agencies'
export const PAPER_CALL = APPLICATIONS_ROUTE + '/paper-call'
export const REGULAR_ACCOMMODATION = APPLICATIONS_ROUTE + '/regular-accommodation'
export const ACCOMMODATION_CORRESPONDENCE_FORM = APPLICATIONS_ROUTE + '/accommodation-correspondence-form'
export const ACADEMIC_LEAVE_ACCOMMODATION = APPLICATIONS_ROUTE + '/academic-leave-accommodation'
export const PREFERENTIAL_ACCOMMODATION = APPLICATIONS_ROUTE + '/preferential-accommodation'
export const FAMILY_ROOM = APPLICATIONS_ROUTE + '/family-room'
export const TERMINATION_OF_EMPLOYMENT_CONTRACT = APPLICATIONS_ROUTE + '/termination-of-employment-contract'
export const RELOCATION_INSIDE_HOSTEL = APPLICATIONS_ROUTE + '/relocation-inside-hostel'
export const RELOCATION_TO_ANOTHER_HOSTEL = APPLICATIONS_ROUTE + '/relocation-to-another-hostel'

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
    },
    'project-activity': {
        id: 'project-activity',
        title: 'Проектная деятельность',
        icon: <FaRegLightbulb />,
        path: PROJECT_ACTIVITIES_ROUTE,
        Component: ProjectActivitiesPage,
        color: 'yellow',
        isTemplate: false,
    },
    'acad-performance': {
        id: 'acad-performance',
        title: 'Успеваемость',
        icon: <BiCheckCircle />,
        path: ACAD_PERFORMANCE_ROUTE,
        Component: AcadPerformance,
        color: 'green',
        isTemplate: false,
    },
    job: {
        id: 'job',
        title: 'Работа',
        icon: <FiBriefcase />,
        path: JOB_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: '/job' }),
        color: 'blue',
        isTemplate: false,
    },
})

export const hiddenRoutes: () => IRoutes = () => ({
    ...generalHiddenRoutes,
    'clarification-of-passport-data': {
        id: 'clarification-of-passport-data',
        title: 'Уточнение паспортных данных',
        icon: <FiBriefcase />,
        path: CLARIFICATION_OF_PASSPORT_DATA_ROUTE,
        Component: ClarificationOfPassportDataApplication,
        color: 'blue',
        isTemplate: false,
    },
    'arbitrary-request': {
        id: 'arbitrary-request',
        title: 'Произвольный запрос',
        icon: <FiBriefcase />,
        path: ARBITRARY_REQUEST_ROUTE,
        Component: ArbitrayRequestPage,
        color: 'blue',
        isTemplate: false,
    },

    'social-scollarship': {
        id: 'social-scollarship',
        title: 'Социальная стипендия',
        icon: <BiIdCard />,
        path: SOCIAL_SCOLLARSHIP,
        Component: ApplicationForSocialScrollarship,
        color: 'blue',
        isTemplate: false,
    },
    'certificate-of-attendance': {
        id: 'certificate-of-attendance',
        title: 'Сертификат об обучении',
        icon: <BiIdCard />,
        path: CERTIFICATE_OF_ATTENDANCE,
        Component: ApplicationForСertificateOfAttendance,
        color: 'blue',
        isTemplate: false,
    },
    'social-agencies': {
        id: 'social-agencies',
        title: 'Справка в соц.учреждения',
        icon: <BiIdCard />,
        path: SOCIAL_AGENCIES,
        Component: ApplicationSocialAgencies,
        color: 'blue',
        isTemplate: false,
    },
    'paper-call': {
        id: 'paper-call',
        title: 'Справка-вызов',
        icon: <BiIdCard />,
        path: PAPER_CALL,
        Component: ApplicationPaperCall,
        color: 'blue',
        isTemplate: false,
    },
    'regular-accommodation': {
        id: 'regular-accommodation',
        title: 'Предоставление права проживания (очная и очно-заочная форма)',
        icon: BiIdCard,
        path: REGULAR_ACCOMMODATION,
        Component: RegularAccommodationPage,
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
        Component: AcademicLeaveAccommodationPage,
        color: 'blue',
        isTemplate: false,
    },
    'preferential-accommodation': {
        id: 'preferential-accommodation',
        title: 'Предоставление права льготного проживания',
        icon: BiIdCard,
        path: PREFERENTIAL_ACCOMMODATION,
        Component: PreferentialAccommodationPage,
        color: 'blue',
        isTemplate: false,
    },
    'family-room': {
        id: 'family-room',
        title: 'Предоставление права проживания в семейной комнате',
        icon: BiIdCard,
        path: FAMILY_ROOM,
        Component: FamilyRoomPage,
        color: 'blue',
        isTemplate: false,
    },
    'termination-of-employment-contract': {
        id: 'termination-of-employment-contract',
        title: 'Расторжение договора найма',
        icon: BiIdCard,
        path: TERMINATION_OF_EMPLOYMENT_CONTRACT,
        Component: TerminationOfEmploymentContractPage,
        color: 'blue',
        isTemplate: false,
    },
    'relocation-inside-hostel': {
        id: 'relocation-inside-hostel',
        title: 'Переселение внутри общежития',
        icon: BiIdCard,
        path: RELOCATION_INSIDE_HOSTEL,
        Component: RelocationInsideHostelPage,
        color: 'blue',
        isTemplate: false,
    },
    'relocation-to-another-hostel': {
        id: 'relocation-to-another-hostel',
        title: 'Переселение в другое общежитие',
        icon: BiIdCard,
        path: RELOCATION_TO_ANOTHER_HOSTEL,
        Component: RelocationToAnotherHostelPage,
        color: 'blue',
        isTemplate: false,
    },
})
