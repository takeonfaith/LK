import { IGrade } from '@api/model/acad-performance'
import { GradeByScore } from '@consts'
import findProgressBarColor from '@features/acad-performance/lib/find-progress-bar-color'
import findProgressBarWidth from '@features/acad-performance/lib/find-progress-bar-width'
import React from 'react'
import styled from 'styled-components'

interface Props {
    grade: keyof IGrade
}

const Container = styled.div<Props>`
    width: 100%;
    border-radius: var(--brLight);
    background-color: var(--scheduleBg);
    height: 9px;

    @media (max-width: 1000px) {
        display: none;
    }
`

const ProgressBar = styled.div<Props>`
    width: ${({ grade }) => findProgressBarWidth(grade)};
    height: 100%;
    border-radius: var(--brLight);

    background-color: ${({ grade }) => findProgressBarColor(grade)};
`

const GradeScore = styled.div<Props>`
    display: none;

    @media (max-width: 1000px) {
        display: block;
        font-weight: 600;
        color: ${({ grade }) => findProgressBarColor(grade)};
    }
`

const SubjectProgresssBar = ({ grade }: Props) => {
    return (
        <>
            <Container grade={grade}>
                <ProgressBar grade={grade} />
            </Container>
            <GradeScore grade={grade}>{GradeByScore[grade]}</GradeScore>
        </>
    )
}

export default SubjectProgresssBar
