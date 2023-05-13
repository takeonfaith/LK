import { selectedPEStudentModel } from '@entities/pe-student/model'
import { peStudentVisitsColumns } from '@features/physical-education/pe-student-visits/constants'
import { useUnit } from 'effector-react'
import { AddPeStudentVisits } from './features/add-pe-student-visits/ui'
import { StyledTable, Wrapper } from './styled'

export const PEStudentVisits = () => {
    const [student] = useUnit([selectedPEStudentModel.stores.$selectedStudent])

    if (!student) return null

    return (
        <Wrapper>
            <AddPeStudentVisits studentGuid={student.studentGuid} />
            <StyledTable columns={peStudentVisitsColumns} data={student.visitsHistory} />
        </Wrapper>
    )
}
