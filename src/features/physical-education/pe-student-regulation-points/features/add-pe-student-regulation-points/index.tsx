import { peStudentRegulationPointsModel } from '@entities/pe-student-regulation-points/model'
import { AddStudentRegulationPoints } from '@entities/pe-student-regulation-points/types'
import { selectedPEStudentModel } from '@entities/pe-student/model'
import Select, { SelectPage } from '@features/select'
import localizeDate from '@shared/lib/localize-date'
import { Button } from '@shared/ui/button'
import Input from '@shared/ui/input'
import { useUnit } from 'effector-react'
import { useState } from 'react'
import { selectorData } from '../../constants'
import { Wrapper } from './styled'

export const AddPEStudentRegulationPoints = () => {
    const student = useUnit(selectedPEStudentModel.stores.$selectedStudent)
    const [date, setDate] = useState<string>('')
    const [type, setType] = useState<SelectPage | null>(null)
    const [pointsAmount, setPointsAmount] = useState<string>('0')

    const handleClick = () => {
        peStudentRegulationPointsModel.events.addRegulationPoints({
            date: localizeDate(date, 'numeric'),
            pointsAmount: Number(pointsAmount),
            studentGuid: student?.studentGuid,
            standardType: type?.id,
        } as AddStudentRegulationPoints)
    }

    return (
        <Wrapper>
            <Input title={'Дата'} setValue={setDate} value={date} type="date" />

            <Select title={'Тип работ'} items={selectorData} selected={type} setSelected={setType} />

            <Input
                title={'Количество баллов'}
                setValue={setPointsAmount}
                value={pointsAmount}
                type="number"
                maxValue={50}
            />

            <Button text="Добавить" onClick={handleClick} />
        </Wrapper>
    )
}
