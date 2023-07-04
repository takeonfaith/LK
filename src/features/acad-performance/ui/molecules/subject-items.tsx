import { AcadPerformance } from '@api/model/acad-performance'
import { Divider } from '@ui/atoms'
import React, { memo } from 'react'
import { SubjectItem } from '.'

interface Props {
    loading?: boolean
    items: AcadPerformance[]
    type: string
}

const SubjectItems = ({ items, type }: Props) => {
    return (
        <>
            {items.map((item, i) => (
                <React.Fragment key={item.id}>
                    <SubjectItem item={item} number={i + 1} type={type} />
                    {i !== items.length - 1 && <Divider margin="0" width="100%" />}
                </React.Fragment>
            ))}
        </>
    )
}

export default memo(SubjectItems)
