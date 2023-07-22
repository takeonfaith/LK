import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'

const WorkOnTermsOfExternalConcurrencyPage = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            isSpecialField={true}
            formId={ApplicationTeachersFormCodes.WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY}
        />
    )
}

export default WorkOnTermsOfExternalConcurrencyPage
