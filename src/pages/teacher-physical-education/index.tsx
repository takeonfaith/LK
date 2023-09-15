import PageBlock from '@shared/ui/page-block'
import React from 'react'
import { SliderPage } from 'widgets'
import { AdminPanel } from './admin-panel'
import { MyGroups } from './my-groups'
import { StudentsList } from './students-list'

const TeacherPhysicalEducation = () => {
    return (
        <PageBlock>
            <SliderPage
                pages={[
                    { title: 'Студенты', content: <StudentsList /> },
                    { title: 'Администрирование', content: <AdminPanel /> },
                    { title: 'Мои Группы', content: <MyGroups /> },
                ]}
            />
        </PageBlock>
    )
}

export default TeacherPhysicalEducation
