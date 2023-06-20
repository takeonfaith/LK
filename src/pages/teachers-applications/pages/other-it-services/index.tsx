import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'

const OtherItServicesPage = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            formId={ApplicationTeachersFormCodes.OTHER_IT_SERVICES}
        />
    )
}

export default OtherItServicesPage
