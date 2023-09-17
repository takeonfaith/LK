import { peStudentAdditionalPointsModel } from '@entities/pe-student-additional-points/model'
import { AddStudentAdditionalPoints } from '@entities/pe-student-additional-points/types'
import { selectedPEStudentModel } from '@entities/pe-student/model'
import Select, { SelectPage } from '@features/select'
import localizeDate from '@shared/lib/localize-date'
import { Button } from '@shared/ui/button'
import Input from '@shared/ui/input'
import { TextArea } from '@shared/ui/textarea'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import { useState } from 'react'
import { selectorData } from '../../constants'
import { Wrapper } from './styled'
import React from 'react'

export const AddPEStudentAdditionalPoints = () => {
    const student = useUnit(selectedPEStudentModel.stores.$selectedStudent)
    const [date, setDate] = useState<string>('')
    const [type, setType] = useState<SelectPage | null>(null)
    const [pointsAmount, setPointsAmount] = useState<string>('0')
    const [comment, setComment] = useState<string>('')

    const handleClick = () => {
        peStudentAdditionalPointsModel.events.addAdditionPoints({
            comment,
            date: localizeDate(date, 'numeric'),
            pointsAmount: Number(pointsAmount),
            studentGuid: student?.studentGuid,
            workType: type?.id,
        } as AddStudentAdditionalPoints)
    }

    return (
        <Wrapper>
            <Title size={3}>Дополнительные баллы</Title>

            <Select title={'Тип работ'} items={selectorData} selected={type} setSelected={setType} />

            <Input title={'Дата'} setValue={setDate} value={date} type="date" />

            <Input
                title={'Количество баллов'}
                setValue={setPointsAmount}
                value={pointsAmount}
                type="number"
                maxValue={50}
            />

            <TextArea setValue={setComment} value={comment} title={'Комментарий'} />

            <Button text="Добавить" onClick={handleClick} />
        </Wrapper>
    )
}
