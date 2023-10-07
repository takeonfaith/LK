import { PeTeacherAddPermission } from '@entities/pe-teacher/types'
import Select, { SelectPage } from '@features/select'
import { TeacherSelect } from '@features/teacher-select/ui'
import { Button } from '@shared/ui/button'
import React, { useState } from 'react'
import { createTeacher } from './model'
import { Wrapper } from './styled'

const PERMISSION_NAMES = {
    [PeTeacherAddPermission.AdminAccess]: 'Админ',
    [PeTeacherAddPermission.OnlineCourseAccess]: 'Доступ к ЛМС',
    [PeTeacherAddPermission.SecretaryAccess]: 'Секретарь',
    [PeTeacherAddPermission.DefaultAccess]: 'Преподаватель',
}

const OPTIONS = Object.entries(PERMISSION_NAMES).map(([value, title]) => ({
    title,
    id: value,
}))

export const AddNewTeacher = () => {
    const [fullName, setFullName] = useState<string>('')
    const [userId, setUserId] = useState<string>('')
    const [permission, setPermission] = useState<SelectPage | null>(null)

    const handleClick = () => {
        createTeacher({ fullName, teacherGuid: userId, permission: permission?.id as PeTeacherAddPermission })
    }

    return (
        <Wrapper>
            <TeacherSelect onChange={setUserId} onSearchChange={setFullName} />
            <Select title={'Доступ'} items={OPTIONS} setSelected={setPermission} selected={permission} />

            <Button text="Добавить" onClick={handleClick} />
        </Wrapper>
    )
}
