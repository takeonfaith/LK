import React from 'react'
import { SliderPage } from 'widgets'
import { AdminPanel } from './admin-panel'
import { StudentsList } from './students-list'

const TeacherPhysicalEducation = () => {
    return (
        <SliderPage
            pages={[
                { title: 'Студенты', content: <StudentsList /> },
                { title: 'Администрирование', content: <AdminPanel /> },
            ]}
        />
    )
}

export default TeacherPhysicalEducation
