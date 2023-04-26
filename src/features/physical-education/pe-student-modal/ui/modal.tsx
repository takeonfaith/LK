import { PEStudent } from '@entities/pe-student/types'
import { calcSummaryPoints } from '@entities/pe-student/utils/calcSummaryPoints'
import { AddPeStudentVisits } from '@features/physical-education/add-pe-student-visits/ui'
import KeyValue from '@shared/ui/atoms/key-value'
import { Title } from '@shared/ui/title'
import { UserData, Visits, Wrapper } from '../styled'

interface Props {
    student: PEStudent
}

export const PEStudentModal = ({ student }: Props) => {
    return (
        <Wrapper>
            <Title size={2}>{student.fullName}</Title>

            <UserData>
                <KeyValue keyStr="Группа" value={student.groupNumber} />
                <KeyValue keyStr="Баллы" value={calcSummaryPoints(student)} />
                <KeyValue keyStr="Курс" value={student.course} />
                <KeyValue keyStr="Группа здоровья" value={student.healthGroup} />
                <KeyValue keyStr="Факультет" value={student.department} />
            </UserData>

            <Visits>
                <Title size={2}>Посещения</Title>
                <AddPeStudentVisits studentGuid={student.studentGuid} />
            </Visits>
        </Wrapper>
    )
}
