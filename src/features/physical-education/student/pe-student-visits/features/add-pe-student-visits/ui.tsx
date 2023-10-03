import { pEStudentVisitModel } from '@entities/pe-student/model'
import localizeDate from '@shared/lib/dates/localize-date'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'
import Input from '@shared/ui/input'
import React, { useEffect, useState } from 'react'

interface Props {
    studentGuid: string
}

export const AddPeStudentVisits = ({ studentGuid }: Props) => {
    const [date, setDate] = useState(new Date().toISOString())

    const minDate = new Date(new Date().getDate() - 7 * 24 * 60 * 60 * 1000).toISOString()
    const maxDate = new Date().toISOString()

    useEffect(() => {
        setDate(new Date().toISOString())
    }, [studentGuid])

    return (
        <Flex gap="4px">
            <Input type="date" minValue={minDate} maxValue={maxDate} setValue={setDate} value={date} />
            <Button
                width="100%"
                height="36px"
                text={`Добавить посещение ${localizeDate(date, 'numeric')}`}
                onClick={() =>
                    pEStudentVisitModel.events.addVisit({ studentGuid, date: localizeDate(date, 'numeric') })
                }
            />
        </Flex>
    )
}
