import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const PaymentForChildCareWrapper = styled.div`
    height: auto;
`

const PaymentForChildCarePage = () => {
    return (
        <PaymentForChildCareWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} />
        </PaymentForChildCareWrapper>
    )
}

export default PaymentForChildCarePage
