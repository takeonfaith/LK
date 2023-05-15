import { PHYSICAL_EDUCATION_STUDENT } from '@app/routes/teacher-routes'
import { PEStudent } from '@entities/pe-student/types'
import { calcSummaryPoints } from '@entities/pe-student/utils/calcSummaryPoints'
import { AddPeStudentVisits } from '@features/physical-education/pe-student-visits/features/add-pe-student-visits/ui'
import { buildRealLink } from '@shared/lib/buildRealLink'
import KeyValue from '@shared/ui/atoms/key-value'
import { Button } from '@shared/ui/button'
import { Title } from '@shared/ui/title'
import { useHistory } from 'react-router'
import { useModal } from 'widgets'
import { UserData, Visits, Wrapper } from './styled'
import React from 'react'

interface Props {
    student: PEStudent
}

export const PEStudentModal = ({ student }: Props) => {
    const history = useHistory()

    const { close } = useModal()

    const handleClick = () => {
        history.push(buildRealLink(PHYSICAL_EDUCATION_STUDENT, { studentId: student.studentGuid }))
        close()
    }

    return (
        <Wrapper>
            <Title size={2}>{student.fullName}</Title>

            <UserData>
                <KeyValue keyStr="Группа" value={student.groupNumber} />
                <KeyValue keyStr="Баллы" value={calcSummaryPoints(student)} />
                <KeyValue keyStr="Курс" value={student.course} />
                <KeyValue keyStr="Факультет" value={student.department} />
            </UserData>

            <Visits>
                <Title size={2}>Посещения</Title>
                <AddPeStudentVisits studentGuid={student.studentGuid} />
            </Visits>
            <Button onClick={handleClick} text={'Перейти к студенту'} />
        </Wrapper>
    )
}
