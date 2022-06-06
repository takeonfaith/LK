import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const CopiesOfDocumentsFromPersonalFileWrapper = styled.div`
    height: auto;
`

const CopiesOfDocumentsFromPersonalFilePage = () => {
    return (
        <CopiesOfDocumentsFromPersonalFileWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} />
        </CopiesOfDocumentsFromPersonalFileWrapper>
    )
}

export default CopiesOfDocumentsFromPersonalFilePage
