import Select, { SelectPage } from '@features/select'
import { Button } from '@shared/ui/button'
import Input from '@shared/ui/input'
import React, { useState } from 'react'
import { assignCurator } from './model'
import { Wrapper } from './styled'

const COSTS = [
    { id: '', title: 'Не выбрано' },
    { id: '2', title: '2' },
    { id: '4', title: '4' },
]

export const AssignCurator = () => {
    const [cost, setCost] = useState<SelectPage | null>(null)
    const [teacherGuid, setTeacherGuid] = useState<string>('')
    const [group, setGroup] = useState<string>('')

    const handleClick = () => {
        assignCurator({ cost: cost?.id.toString() ?? '', groupName: group, teacherGuid })
    }

    return (
        <Wrapper>
            <Input title={'Группа'} setValue={setGroup} value={group} />
            <Input title={'Айди преподавателя'} setValue={setTeacherGuid} value={teacherGuid} />

            <Select title={'Стоимость'} items={COSTS} selected={cost} setSelected={setCost} />

            <Button text="Добавить" onClick={handleClick} />
        </Wrapper>
    )
}
