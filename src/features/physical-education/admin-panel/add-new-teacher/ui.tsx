import { Button } from '@shared/ui/button'
import Input from '@shared/ui/input'
import React, { useState } from 'react'
import { createTeacher } from './model'
import { Wrapper } from './styled'

export const AddNewTeacher = () => {
    const [fullName, setFullName] = useState<string>('')
    const [userId, setUserId] = useState<string>('')

    const handleClick = () => {
        createTeacher({ fullName, teacherGuid: userId })
    }

    return (
        <Wrapper>
            <Input title={'Имя'} setValue={setFullName} value={fullName} />
            <Input title={'Айди'} setValue={setUserId} value={userId} />

            <Button text="Добавить" onClick={handleClick} />
        </Wrapper>
    )
}
