import { peStudentRegulationPointsModel } from '@entities/pe-student-regulation-points/model'
import { AddStudentRegulationPoints } from '@entities/pe-student-regulation-points/types'
import { selectedPEStudentModel } from '@entities/pe-student/model'
import Select, { SelectPage } from '@features/select'
import { Colors } from '@shared/constants'
import localizeDate from '@shared/lib/dates/localize-date'
import { Button } from '@shared/ui/button'
import Input from '@shared/ui/input'
import { useUnit } from 'effector-react'
import React, { useState } from 'react'
import { selectorData } from '../../constants'
import { Wrapper } from './styled'

export const AddPEStudentRegulationPoints = () => {
    const student = useUnit(selectedPEStudentModel.stores.$selectedStudent)
    const [date, setDate] = useState<string>('')
    const [type, setType] = useState<SelectPage | null>(null)
    const [pointsAmount, setPointsAmount] = useState<string>('0')
    // const [isOverride, setIsOverride] = useState<boolean>(false)

    const handleClick = () => {
        peStudentRegulationPointsModel.events.addRegulationPoints({
            date: localizeDate(date, 'numeric'),
            pointsAmount: Number(pointsAmount),
            studentGuid: student?.studentGuid,
            standardType: type?.id,
            isOverride: false,
        } as AddStudentRegulationPoints)
    }

    const selectedDate = new Date(date)

    const isDateValid = selectedDate.getDay() !== 0 && selectedDate.getDay() !== 1

    return (
        <Wrapper>
            <Select size="big" title={'Тип работ'} items={selectorData} selected={type} setSelected={setType} />

            <Input
                alertMessage={!isDateValid ? 'Не допустимая дата' : ''}
                size="big"
                title={'Дата'}
                setValue={setDate}
                value={date}
                type="date"
            />
            <Input
                size="big"
                title={'Количество баллов'}
                setValue={setPointsAmount}
                value={pointsAmount}
                type="number"
                stepSize={1}
                minValue={1}
            />
            {/* <Checkbox checked={isOverride} setChecked={setIsOverride} text={'Перезаписать'} /> */}
            <Button
                text="Добавить"
                isActive={isDateValid}
                onClick={handleClick}
                background={Colors.blue.main}
                textColor={Colors.white.main}
                width="100%"
            />
        </Wrapper>
    )
}
