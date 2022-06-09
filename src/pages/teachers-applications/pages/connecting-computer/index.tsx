import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const ConnectingComputerWrapper = styled.div`
    height: auto;
`

const ConnectingComputerPage = () => {
    return (
        <ConnectingComputerWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} goBack="Назад к заявлениям" />
        </ConnectingComputerWrapper>
    )
}

export default ConnectingComputerPage
