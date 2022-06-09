import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'
import { PRINTER_MAINTENANCE } from '@app/routes/teachers-routes'

const PrinterMaintenanceWrapper = styled.div`
    height: auto;
`

const PrinterMaintenancePage = () => {
    return (
        <PrinterMaintenanceWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} goBack="Назад к заявлениям" />
        </PrinterMaintenanceWrapper>
    )
}

export default PrinterMaintenancePage
