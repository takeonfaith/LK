import { teacherStatementModel } from '@entities/teachers-statement'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import React from 'react'

const CertificateOfWorkExperiencePage = () => {
    return <TemplateFormPage model={teacherStatementModel} getForm={getForm} />
}

export default CertificateOfWorkExperiencePage
