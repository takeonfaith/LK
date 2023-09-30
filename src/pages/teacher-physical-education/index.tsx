import { CenterPage } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import React, { useState } from 'react'
import Slider from 'widgets/slider'
import { AdminPanel } from './admin-panel'
import { MyGroups } from './my-groups'
import { StudentsList } from './students-list'
import Flex from '@shared/ui/flex'

const TeacherPhysicalEducation = () => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0)

    const pages = [
        { title: 'Студенты', content: <StudentsList /> },
        { title: 'Администриование', content: <AdminPanel /> },
        { title: 'Мои Группы', content: <MyGroups /> },
    ]
    return (
        <CenterPage padding="10px">
            <PageBlock>
                <Flex d="column" gap="2px" ai="flex-start">
                    <Slider
                        appearance={false}
                        pages={pages}
                        currentPage={currentPageIndex}
                        setCurrentPage={setCurrentPageIndex}
                    />
                    {pages[currentPageIndex].content}
                </Flex>
            </PageBlock>
        </CenterPage>
    )
}

export default TeacherPhysicalEducation
