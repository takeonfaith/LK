import { AcadPerformance } from '@entities/acad-performance/model'
import { Title } from '@ui/atoms'
import React, { memo } from 'react'
import SubjectItems from '../molecules/subject-items'

interface Props {
    header: string
    items: AcadPerformance[]
    type?: 'exam' | 'test'
}

const SubjectList = ({ header, items, type = 'exam' }: Props) => {
    return (
        <div>
            <Title size={2} align="left">
                {header}
            </Title>
            <SubjectItems items={items} type={type} />
        </div>
    )
}

export default memo(SubjectList)
