import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'

const VisaCertificatePage = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            goBack="Назад к цифровым сервисам"
            isSpecialField={true}
            formId={ApplicationTeachersFormCodes.VISA_CERTIFICATE}
        />
    )
}

export default VisaCertificatePage
