import { selectedPEStudentModel } from '@entities/pe-student/model'
import { Button } from '@shared/ui/button'
import { useUnit } from 'effector-react'
import { useModal } from 'widgets'
import { regularPointsColumns } from './constants'
import { AddPEStudentRegulationPoints } from './features/add-pe-student-regulation-points'
import { StyledTable, Wrapper } from './styled'
import React from 'react'
import { Colors } from '@shared/constants'

export const PEStudentRegulationPoints = () => {
    const [student] = useUnit([selectedPEStudentModel.stores.$selectedStudent])

    const { open } = useModal()

    const handleClick = () => {
        open(<AddPEStudentRegulationPoints />, 'Добавить норматив')
    }

    if (!student) return null

    return (
        <Wrapper>
            <Button
                text="Добавить норматив"
                onClick={handleClick}
                background={Colors.blue.main}
                textColor={Colors.white.main}
            />
            <StyledTable data={student.standardsHistory} columns={regularPointsColumns} />
        </Wrapper>
    )
}
