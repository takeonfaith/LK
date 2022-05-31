import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const CertificateOfWorkExperienceWrapper = styled.div`
    height: auto;
`

const CertificateOfWorkExperiencePage = () => {
    return (
        <CertificateOfWorkExperienceWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} />
        </CertificateOfWorkExperienceWrapper>
    )
}

export default CertificateOfWorkExperiencePage
