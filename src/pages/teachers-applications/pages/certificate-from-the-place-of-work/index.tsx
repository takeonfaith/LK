import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const CertificateFromPlaceOfWorkWrapper = styled.div`
    height: auto;
`

const CertificateFromPlaceOfWorkPage = () => {
    return (
        <CertificateFromPlaceOfWorkWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} goBack="Назад к заявлениям" />
        </CertificateFromPlaceOfWorkWrapper>
    )
}

export default CertificateFromPlaceOfWorkPage
