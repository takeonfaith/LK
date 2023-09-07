import { pEStudentVisitModel } from '@entities/pe-student/model'
import localizeDate from '@shared/lib/localize-date'
import { Button } from '@shared/ui/button'
import Input from '@shared/ui/input'
import { useState } from 'react'
import { Wrapper } from './styled'
import React from 'react'

interface Props {
    studentGuid: string
}

export const AddPeStudentVisits = ({ studentGuid }: Props) => {
    const [date, setDate] = useState(new Date().toISOString())

    const minDate = new Date(new Date().getDate() - 7 * 24 * 60 * 60 * 1000).toISOString()
    const maxDate = new Date().toISOString()

    return (
        <Wrapper>
            <Input type="date" minValue={minDate} maxValue={maxDate} setValue={setDate} value={date} />
            <Button
                text={`Добавить посещение ${localizeDate(date, 'numeric')}`}
                onClick={() =>
                    pEStudentVisitModel.events.addVisit({ studentGuid, date: localizeDate(date, 'numeric') })
                }
            />
        </Wrapper>
    )
}
