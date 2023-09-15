import Select, { SelectPage } from '@features/select'
import { Button } from '@shared/ui/button'
import Input from '@shared/ui/input'
import React, { useState } from 'react'
import { assignVisitValue } from './model'
import { Wrapper } from './styled'

const COSTS = [
    { id: '2', title: '2' },
    { id: '4', title: '4' },
]

export const AssignVisitValue = () => {
    const [cost, setCost] = useState<SelectPage | null>(null)
    const [group, setGroup] = useState<string>('')

    const handleClick = () => {
        assignVisitValue({ newVisitValue: cost?.id.toString() ?? '', groupName: group })
    }

    return (
        <Wrapper>
            <Input title={'Группа'} setValue={setGroup} value={group} />

            <Select title={'Стоимость'} items={COSTS} selected={cost} setSelected={setCost} />

            <Button text="Добавить" onClick={handleClick} />
        </Wrapper>
    )
}
