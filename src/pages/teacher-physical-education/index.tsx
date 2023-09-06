import { StudentsList } from './students-list'
import React from 'react'
import { AdminPanel } from './admin-panel'
import { SliderPage } from 'widgets'

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
