import { CenterPage } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import React, { useEffect, useState } from 'react'
import Slider from 'widgets/slider'
import { AdminPanel } from './admin-panel'
import { pageLoaded } from './page-model'
import { MyGroups } from './my-groups'
import { StudentsList } from './students-list'
import Flex from '@shared/ui/flex'
import { PeTeacherPermission } from '@entities/pe-teacher/types'
import { peTeacherModel } from '@entities/pe-teacher'
import { useUnit } from 'effector-react'

const TeacherPhysicalEducation = () => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0)

    const [peTeacher] = useUnit([peTeacherModel.stores.$peTeacher])

    useEffect(() => {
        pageLoaded()
    }, [])

    const pages = [PeTeacherPermission.AdminAccess, PeTeacherPermission.SuperUser].some((permission) =>
        peTeacher?.permissions.includes(permission),
    )
        ? [
              { title: 'Студенты', content: <StudentsList /> },
              { title: 'Управление', content: <AdminPanel /> },
              { title: 'Мои Группы', content: <MyGroups /> },
          ]
        : [
              { title: 'Студенты', content: <StudentsList /> },
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
