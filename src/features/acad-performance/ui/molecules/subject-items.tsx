import { AcadPerformance } from '@entities/acad-performance/model'
import { SkeletonShape } from '@ui/atoms'
import React, { memo } from 'react'
import { SubjectItem } from '.'

interface Props {
    loading?: boolean
    items: AcadPerformance[]
    type: 'exam' | 'test'
}

const SubjectItems = ({ items, type, loading }: Props) => {
    return (
        <>
            {!loading
                ? items.map((item, i) => <SubjectItem key={i} item={item} number={i + 1} type={type} />)
                : Array(4)
                      .fill(0)
                      .map((_, i) => (
                          <SkeletonShape
                              key={i}
                              shape="rect"
                              size={{
                                  width: '100%',
                                  height: '40px',
                              }}
                              margin="20px 0"
                          />
                      ))}
        </>
    )
}

export default memo(SubjectItems)
