import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const NumberOfUnusedVacationDaysWrapper = styled.div`
    height: auto;
`

const NumberOfUnusedVacationDaysPage = () => {
    return (
        <NumberOfUnusedVacationDaysWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} />
        </NumberOfUnusedVacationDaysWrapper>
    )
}

export default NumberOfUnusedVacationDaysPage
