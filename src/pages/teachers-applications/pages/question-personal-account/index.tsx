import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'

const QuestionPersonalAccountPage = () => {
    return <TemplateFormPage model={teacherStatementModel} getForm={getForm} goBack="Назад к цифровым сервисам" />
}

export default QuestionPersonalAccountPage
