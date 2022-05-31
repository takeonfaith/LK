import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const VisaCertificateWrapper = styled.div`
    height: auto;
`

const VisaCertificatePage = () => {
    return (
        <VisaCertificateWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} />
        </VisaCertificateWrapper>
    )
}

export default VisaCertificatePage
