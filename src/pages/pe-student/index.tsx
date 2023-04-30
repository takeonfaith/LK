import { selectedPEStudentModel } from '@entities/pe-student/model'
import { calcSummaryPoints } from '@entities/pe-student/utils/calcSummaryPoints'
import { AddPeStudentVisits } from '@features/physical-education/add-pe-student-visits/ui'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { peStudentVisitsColumns } from './constants'
import { StyledTable, UserData, Visits, Wrapper } from './styled'
import { UserDataBlock } from './ui/user-date-block'

const PEStudent = () => {
    const { studentId } = useParams<{ studentId: string }>()

    const [student] = useUnit([selectedPEStudentModel.stores.$selectedStudent])

    useEffect(() => {
        selectedPEStudentModel.events.setCurrentStudentId(studentId)

        return () => selectedPEStudentModel.events.resetStudentId()
    }, [studentId])

    if (!student) return null

    return (
        <Wrapper>
            <Title size={1}>{student.fullName}</Title>

            <UserData>
                <UserDataBlock keyStr="Группа" value={student.groupNumber} />
                <UserDataBlock keyStr="Баллы" value={calcSummaryPoints(student).toString()} />
                <UserDataBlock keyStr="Курс" value={student.course.toString()} />
                <UserDataBlock keyStr="Группа здоровья" value={student.healthGroup} />
                <UserDataBlock keyStr="Факультет" value={student.department} />
            </UserData>

            <Visits>
                <Title size={2}>Управление баллами</Title>
                <AddPeStudentVisits studentGuid={student.studentGuid} />
            </Visits>

            <StyledTable columns={peStudentVisitsColumns} data={student.visitsHistory} />
        </Wrapper>
    )
}

export default PEStudent
