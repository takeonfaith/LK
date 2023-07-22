import { teacherStatementModel } from '@entities/teachers-statement'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import React from 'react'
import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'

const PrinterMaintenancePage = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            formId={ApplicationTeachersFormCodes.PRINTER_MAINTENANCE}
        />
    )
}

export default PrinterMaintenancePage
