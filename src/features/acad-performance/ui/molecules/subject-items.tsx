import { AcadPerformance } from '@entities/acad-performance/model'
import React, { memo } from 'react'
import { SubjectItem } from '.'

interface Props {
    items: AcadPerformance[]
    type: 'exam' | 'test'
}

const SubjectItems = ({ items, type }: Props) => {
    return (
        <div>
            {items.map((item, i) => (
                <SubjectItem key={i} item={item} number={i + 1} type={type} />
            ))}
        </div>
    )
}

export default memo(SubjectItems)
