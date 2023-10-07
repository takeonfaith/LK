import { PHYSICAL_EDUCATION_STUDENT } from '@app/routes/teacher-routes'
import { PEStudent } from '@entities/pe-student/types'
import { calcSummaryPoints } from '@entities/pe-student/utils/cals-summary-points'
import { buildRealLink } from '@shared/lib/buildRealLink'
import KeyValue from '@shared/ui/atoms/key-value'
import { Button } from '@shared/ui/button'
import { Divider } from '@shared/ui/divider'
import Flex from '@shared/ui/flex'
import { Title } from '@shared/ui/title'
import React from 'react'
import { useHistory } from 'react-router'
import { useModal } from 'widgets'
import { AddPeStudentVisits } from '../../pe-student-visits/features/add-pe-student-visits/ui'
import { PEStudentModalWrapper } from './styled'

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
        <PEStudentModalWrapper>
            <Flex d="column" gap="16px" ai="flex-start">
                <Flex d="column" ai="flex-start" gap="2px">
                    <KeyValue keyStr="Группа" value={student.groupNumber} />
                    <KeyValue keyStr="Баллы" value={calcSummaryPoints(student)} />
                    <KeyValue keyStr="Курс" value={student.course} />
                    <KeyValue keyStr="ЛМС" value={student.pointsHistory.reduce((sum, d) => sum + d.points, 0)} />
                </Flex>
                <Divider width="100%" margin="0" />
                <Flex d="column" gap="4px" ai="flex-start">
                    <Title align="left" size={4}>
                        Дата
                    </Title>
                    <AddPeStudentVisits studentGuid={student.studentGuid} />
                </Flex>
                <Button onClick={handleClick} text={'Перейти к студенту'} width="100%" />
            </Flex>
        </PEStudentModalWrapper>
    )
}
