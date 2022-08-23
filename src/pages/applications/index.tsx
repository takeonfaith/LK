import React, { useEffect } from 'react'
import { TemplateApplications } from 'widgets'
import { applicationsModel } from '@entities/applications'

const ApplicationsPage = () => {
    return <TemplateApplications isTeachers={false} />
}

export default ApplicationsPage
