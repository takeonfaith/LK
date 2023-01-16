import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'

const CourierPage = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            goBack="Назад к цифровым сервисам"
            formId={ApplicationTeachersFormCodes.COURIER}
        />
    )
}

export default CourierPage
