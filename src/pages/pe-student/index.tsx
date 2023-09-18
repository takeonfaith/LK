import { selectedPEStudentModel } from '@entities/pe-student/model'
import { calcSummaryPoints } from '@entities/pe-student/utils/calcSummaryPoints'
import { sliderData } from '@features/physical-education/student/pe-student-visits/constants'
import { CenterPage } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { SliderPage } from 'widgets'
import { UserData } from './styled'
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
        <CenterPage padding="10px">
            <PageBlock>
                <Title size={3} align="left">
                    {student.fullName}
                </Title>

                <UserData>
                    <UserDataBlock label="Группа" value={student.groupNumber} />
                    <UserDataBlock label="Баллы" value={calcSummaryPoints(student).toString()} />
                    <UserDataBlock label="Курс" value={student.course.toString()} />
                    <UserDataBlock label="Факультет" value={student.department} />
                </UserData>

                <SliderPage pages={sliderData} />
            </PageBlock>
        </CenterPage>
    )
}

export default PEStudent
