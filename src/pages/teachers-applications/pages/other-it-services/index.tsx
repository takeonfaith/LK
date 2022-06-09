import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const OtherItServicesWrapper = styled.div`
    height: auto;
`

const OtherItServicesPage = () => {
    return (
        <OtherItServicesWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} goBack="Назад к заявлениям" />
        </OtherItServicesWrapper>
    )
}

export default OtherItServicesPage
