import { peTeacherModel } from '@entities/pe-teacher'
import { PeTeacherPermission } from '@entities/pe-teacher/types'
import { CenterPage } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import Slider from 'widgets/slider'
import { AdminPanel } from './admin-panel'
import { MyGroups } from './my-groups'
import { $page, pageIndexChanged, pageLoaded } from './page-model'
import { StudentsList } from './students-list'

const TeacherPhysicalEducation = () => {
    const [peTeacher, currentPageIndex] = useUnit([peTeacherModel.stores.$peTeacher, $page])

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
                        setCurrentPage={pageIndexChanged}
                    />
                    {pages[currentPageIndex].content}
                </Flex>
            </PageBlock>
        </CenterPage>
    )
}

export default TeacherPhysicalEducation
