import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'

const CertificateTimeParentalLeavePage = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            goBack="Назад к цифровым сервисам"
            isSpecialField={true}
            formId={ApplicationTeachersFormCodes.CERTIFICATE_TIME_PARENTAL_LEAVE}
        />
    )
}

export default CertificateTimeParentalLeavePage
