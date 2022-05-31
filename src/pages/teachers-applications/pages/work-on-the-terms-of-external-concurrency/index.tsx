import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const WorkOnTermsOfExternalConcurrencyWrapper = styled.div`
    height: auto;
`

const WorkOnTermsOfExternalConcurrencyPage = () => {
    return (
        <WorkOnTermsOfExternalConcurrencyWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} />
        </WorkOnTermsOfExternalConcurrencyWrapper>
    )
}

export default WorkOnTermsOfExternalConcurrencyPage
