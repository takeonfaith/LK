/* eslint-disable @typescript-eslint/no-unused-vars */
import { PreparedAcadPerformanceData } from '@entities/acad-performance/lib/prepare'
import findProgressBarColor from '@features/acad-performance/lib/find-progress-bar-color'
import { getSubjectIcon } from '@features/acad-performance/lib/get-subject-icon'
import { GradeByScore } from '@shared/consts'
import { Divider } from '@shared/ui/divider'
import Flex from '@shared/ui/flex'
import List from '@shared/ui/list'
import Subtext from '@shared/ui/subtext'
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

const SubjectColumn = styled.div<{ grade: number; background: string }>`
    height: ${({ grade }) => `${grade * 25}px`};
    min-height: 10px;
    width: 32px;
    border-radius: 6px;
    background: ${({ background }) => background};
    cursor: pointer;

    &:hover {
        filter: brightness(1.1);
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
                return data[key].map(({ id, name, grade }) => (
                    <SubjectColumnWrapper key={id}>
                        {/* <SubjectColumn grade={GradeByScore[grade]} background={findProgressBarColor(grade)} /> */}
                        {getSubjectIcon(name)}
                    </SubjectColumnWrapper>
                ))
            })}
        </List>
    )
}

export default PerformanceGraph
