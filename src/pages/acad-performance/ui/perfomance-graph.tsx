import { PreparedAcadPerformanceData } from '@entities/acad-performance/lib/prepare'
import { getSubjectIcon } from '@features/acad-performance/lib/get-subject-icon'
import List from '@shared/ui/list'
import React from 'react'
import styled from 'styled-components'

const SubjectColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;

    svg {
        width: 18px;
        height: 18px;
        opacity: 0.7;
    }
`

type Props = {
    data: PreparedAcadPerformanceData | null
}

const PerformanceGraph = ({ data }: Props) => {
    if (!data) return null

    return (
        <List direction="horizontal" gap={8} verticalAlign="bottom" showPages>
            {Object.keys(data)?.map((key) => {
                return data[key].map(({ id, name }) => (
                    <SubjectColumnWrapper key={id}>{getSubjectIcon(name)}</SubjectColumnWrapper>
                ))
            })}
        </List>
    )
}

export default PerformanceGraph
