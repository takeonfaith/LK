import { Button } from '@shared/ui/button'
import Input from '@shared/ui/input'
import React, { useState } from 'react'
import { events } from './pe-student-semester-model'
import { Wrapper } from './styled'

export const StartNewSemester = () => {
    const [semesterName, setSemesterName] = useState<string>('')

    const handleClick = () => {
        events.startNewSemester(semesterName)
    }

    return (
        <Wrapper>
            <Input title={'Новый семестр'} setValue={setSemesterName} value={semesterName} />

            <Button text="Начать новый семестр" onClick={handleClick} />
        </Wrapper>
    )
}
