import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const QuestionSedWrapper = styled.div`
    height: auto;
`

const QuestionSedPage = () => {
    return (
        <QuestionSedWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} />
        </QuestionSedWrapper>
    )
}

export default QuestionSedPage
