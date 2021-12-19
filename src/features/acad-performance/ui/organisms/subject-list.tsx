import { AcadPerformance } from '@entities/acad-performance/model'
import { Title } from '@ui/atoms'
import React, { memo } from 'react'
import styled from 'styled-components'
import SubjectItems from '../molecules/subject-items'

interface Props {
    header: string
    loading?: boolean
    items?: AcadPerformance[]
    type?: 'exam' | 'test'
}
const Wrap = styled.div`
    width: 100%;

    @media (max-width: 1000px) {
        border-radius: var(--brSemi);
        border: 1px solid var(--almostTransparentOpposite);
        padding: 10px 20px;
    }
`

const Heading = styled.h2`
    margin-bottom: 10px;
    @media (max-width: 1000px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const SubjectList = ({ header, items, loading, type = 'exam' }: Props) => {
    return (
        <Wrap>
            {!!items?.length && <Heading>{header}</Heading>}
            <SubjectItems items={items || []} type={type} loading={loading} />
        </Wrap>
    )
}

export default memo(SubjectList)
