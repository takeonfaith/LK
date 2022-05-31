import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const IssuanceOfLicensesWrapper = styled.div`
    height: auto;
`

const IssuanceOfLicensesPage = () => {
    return (
        <IssuanceOfLicensesWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} />
        </IssuanceOfLicensesWrapper>
    )
}

export default IssuanceOfLicensesPage
