import { Button } from '@shared/ui/button'
import Input from '@shared/ui/input'
import React, { useState } from 'react'
import { addCompetition } from './model'
import { Wrapper } from './styled'

export const AddCompetition = () => {
    const [competitionName, setCompetitionName] = useState<string>('')
    const handleClick = () => {
        addCompetition({ competitionName })
    }

    return (
        <Wrapper>
            <Input title={'Название'} setValue={setCompetitionName} value={competitionName} />

            <Button text="Добавить" onClick={handleClick} />
        </Wrapper>
    )
}
