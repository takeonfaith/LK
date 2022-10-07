import { teacherStatementModel } from '@entities/teachers-statement'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import React from 'react'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'

const ArbitraryRequestPage = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            goBack="Назад к цифровым сервисам"
            formId={ApplicationFormCodes.FREE_REQUEST}
        />
    )
}

export default ArbitraryRequestPage
