import { pEStudentModel } from '@entities/pe-student/model'
import localizeDate from '@shared/lib/localize-date'
import { Button } from '@shared/ui/button'
import Input from '@shared/ui/input'
import { useState } from 'react'
import { Wrapper } from './styled'

interface Props {
    studentGuid: string
}

export const AddPeStudentVisits = ({ studentGuid }: Props) => {
    const [date, setDate] = useState(new Date().toISOString())

    return (
        <Wrapper>
            <Input setValue={setDate} value={date} type="date" />
            <Button
                text={'Добавить баллы'}
                onClick={() => pEStudentModel.events.addVisit({ studentGuid, date: localizeDate(date, 'numeric') })}
            />
        </Wrapper>
    )
}
