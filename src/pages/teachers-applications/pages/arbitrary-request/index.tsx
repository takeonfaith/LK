import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const ArbitraryRequestWrapper = styled.div`
    height: auto;
`

const ArbitraryRequestPage = () => {
    return (
        <ArbitraryRequestWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} goBack="Назад к заявлениям" />
        </ArbitraryRequestWrapper>
    )
}

export default ArbitraryRequestPage
