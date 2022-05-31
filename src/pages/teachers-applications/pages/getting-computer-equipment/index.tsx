import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'
import styled from 'styled-components'

const GettingComputerEquipmentWrapper = styled.div`
    height: auto;
`

const GettingComputerEquipmentPage = () => {
    return (
        <GettingComputerEquipmentWrapper>
            <TemplateFormPage model={teacherStatementModel} getForm={getForm} />
        </GettingComputerEquipmentWrapper>
    )
}

export default GettingComputerEquipmentPage
