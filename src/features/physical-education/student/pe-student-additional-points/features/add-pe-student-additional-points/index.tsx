import { peStudentAdditionalPointsModel } from '@entities/pe-student-additional-points/model'
import { AddStudentAdditionalPoints, WorkType } from '@entities/pe-student-additional-points/types'
import { peStudentCompetitionModel, selectedPEStudentModel } from '@entities/pe-student/model'
import Select, { SelectPage } from '@features/select'
import { Colors } from '@shared/constants'
import localizeDate from '@shared/lib/dates/localize-date'
import { Button } from '@shared/ui/button'
import Input from '@shared/ui/input'
import { TextArea } from '@shared/ui/textarea'
import { useUnit } from 'effector-react'
import React, { useEffect, useState } from 'react'
import { selectorData } from '../../constants'
import { Wrapper } from './styled'

export const AddPEStudentAdditionalPoints = () => {
    const [student, competitions] = useUnit([
        selectedPEStudentModel.stores.$selectedStudent,
        peStudentCompetitionModel.stores.$competitions,
    ])
    const [competition, setCompetition] = useState<SelectPage | null>(null)
    const [date, setDate] = useState<string>('')
    const [type, setType] = useState<SelectPage | null>(null)
    const [pointsAmount, setPointsAmount] = useState<string>('0')
    const [comment, setComment] = useState<string>('')

    const handleClick = () => {
        peStudentAdditionalPointsModel.events.addAdditionPoints({
            comment: type?.id === WorkType.Competition ? competition?.title ?? '' : comment,
            date: localizeDate(date, 'numeric'),
            pointsAmount: Number(pointsAmount),
            studentGuid: student?.studentGuid,
            workType: type?.id,
        } as AddStudentAdditionalPoints)
    }

    useEffect(() => {
        peStudentCompetitionModel.events.load()
    }, [])

    const selectedDate = new Date(date)

    const isDateValid = selectedDate.getDay() !== 0 && selectedDate.getDay() !== 1

    const competitionsSelectItems = competitions.map((c) => ({ id: c, title: c }))

    return (
        <Wrapper>
            <Select size="big" title={'Тип работ'} items={selectorData} selected={type} setSelected={setType} />
            {type?.id === WorkType.Competition && (
                <Select
                    size="big"
                    title={'Соревнование'}
                    items={competitionsSelectItems}
                    selected={competition}
                    setSelected={setCompetition}
                />
            )}

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

            {type?.id !== WorkType.Competition && (
                <TextArea setValue={setComment} value={comment} title={'Комментарий'} />
            )}

            <Button
                isActive={isDateValid}
                text="Добавить"
                onClick={handleClick}
                background={Colors.blue.main}
                textColor={Colors.white.main}
                width="100%"
            />
        </Wrapper>
    )
}
