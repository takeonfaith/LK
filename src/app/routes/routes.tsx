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
import { generalHiddenRoutes, generalRoutes, IRoutes } from './general-routes'
import React from 'react'

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

export const privateRoutes: () => IRoutes = () => ({
    ...generalRoutes,
    applications: {
        id: 'applications',
        title: 'Заявления',
        icon: <FiFileText />,
        path: APPLICATIONS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: '/sprav' }),
        color: 'blue',
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
})
