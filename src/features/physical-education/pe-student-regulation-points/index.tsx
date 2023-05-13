import { selectedPEStudentModel } from '@entities/pe-student/model'
import { Button } from '@shared/ui/button'
import { useUnit } from 'effector-react'
import { useModal } from 'widgets'
import { regularPointsColumns } from './constants'
import { AddPEStudentRegulationPoints } from './features/add-pe-student-regulation-points'
import { StyledTable, Wrapper } from './styled'

export const PEStudentRegulationPoints = () => {
    const [student] = useUnit([selectedPEStudentModel.stores.$selectedStudent])

    const { open } = useModal()

    const handleClick = () => {
        open(<AddPEStudentRegulationPoints />)
    }

    if (!student) return null

    return (
        <Wrapper>
            <Button text="Добавить норматив" onClick={handleClick} />
            <StyledTable data={student.standardsHistory} columns={regularPointsColumns} />
        </Wrapper>
    )
}
