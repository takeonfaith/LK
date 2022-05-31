import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const QuestionPersonalAccountWrapper = styled.div`
    height: auto;
`

const QuestionPersonalAccountPage = () => {
    return (
        <QuestionPersonalAccountWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} />
        </QuestionPersonalAccountWrapper>
    )
}

export default QuestionPersonalAccountPage
