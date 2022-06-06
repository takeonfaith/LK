import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const PaymentOfChildBirthAllowanceWrapper = styled.div`
    height: auto;
`

const PaymentOfChildBirthAllowancePage = () => {
    return (
        <PaymentOfChildBirthAllowanceWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} goBack="Назад к заявлениям" />
        </PaymentOfChildBirthAllowanceWrapper>
    )
}

export default PaymentOfChildBirthAllowancePage
