import { pEStudentModel } from '@entities/pe-student/model'
import Table from '@shared/ui/table'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'

const TeacherPhysicalEducation = () => {
    const students = useUnit(pEStudentModel.stores.$pEStudents)

    useEffect(() => {
        pEStudentModel.events.load()
    }, [])

    return <Table data={students} columns={[{ field: 'fullName', title: 'fullName' }]} />
}

export default TeacherPhysicalEducation
