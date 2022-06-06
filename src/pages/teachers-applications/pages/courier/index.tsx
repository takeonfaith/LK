import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const CourierWrapper = styled.div`
    height: auto;
`

const CourierPage = () => {
    return (
        <CourierWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} />
        </CourierWrapper>
    )
}

export default CourierPage
