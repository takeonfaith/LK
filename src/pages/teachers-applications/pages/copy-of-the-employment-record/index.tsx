import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const CopyOfEmploymentRecordWrapper = styled.div`
    height: auto;
`

const CopyOfEmploymentRecordPage = () => {
    return (
        <CopyOfEmploymentRecordWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} />
        </CopyOfEmploymentRecordWrapper>
    )
}

export default CopyOfEmploymentRecordPage
