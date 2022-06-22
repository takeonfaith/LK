import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const CertificateTimeParentalLeaveWrapper = styled.div`
    height: auto;
`

const CertificateTimeParentalLeavePage = () => {
    return (
        <CertificateTimeParentalLeaveWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} goBack="Назад к заявлениям" />
        </CertificateTimeParentalLeaveWrapper>
    )
}

export default CertificateTimeParentalLeavePage
