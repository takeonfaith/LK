import { AcadPerformance } from '@api/model/acad-performance'
import { Divider, SkeletonShape } from '@ui/atoms'
import React, { memo } from 'react'
import { SubjectItem } from '.'

interface Props {
    loading?: boolean
    items: AcadPerformance[]
    type: 'exam' | 'test'
}

const SubjectItems = ({ items, type, loading }: Props) => {
    if (loading)
        return (
            <>
                {Array(5)
                    .fill(0)
                    .map((_, i) => (
                        <SkeletonShape
                            key={i}
                            shape="rect"
                            size={{
                                width: '100%',
                                height: '30px',
                            }}
                            margin="10px 0"
                        />
                    ))}
            </>
        )

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
