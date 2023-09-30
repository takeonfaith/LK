import { selectedPEStudentModel } from '@entities/pe-student/model'
import { Button } from '@shared/ui/button'
import { useUnit } from 'effector-react'
import { useModal } from 'widgets'
import { additionalPointsColumns } from './constants'
import { AddPEStudentAdditionalPoints } from './features/add-pe-student-additional-points'
import { StyledTable, Wrapper } from './styled'
import React from 'react'

export const PEStudentAdditionalPoints = () => {
    const [student] = useUnit([selectedPEStudentModel.stores.$selectedStudent])
    const { open } = useModal()

    const handleClick = () => {
        open(<AddPEStudentAdditionalPoints />)
    }

    if (!student) return null

    return (
        <Wrapper>
            <Button text="Добавить дополнительные баллы" onClick={handleClick} />
            <StyledTable columns={additionalPointsColumns} data={student.pointsHistory} />
        </Wrapper>
    )
}
