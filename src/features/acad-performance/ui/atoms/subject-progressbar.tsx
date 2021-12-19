import { IGrade } from '@api/model/acad-performance'
import findProgressBarColor from '@features/acad-performance/lib/find-progress-bar-color'
import findProgressBarWidth from '@features/acad-performance/lib/find-progress-bar-width'
import React from 'react'
import styled from 'styled-components'

interface Props {
    grade: keyof IGrade
}

const Container = styled.div`
    width: 100%;

    border-radius: var(--brLight);
    background-color: var(--scheduleBg);

    height: 9px;
`

const ProgressBar = styled.div<Props>`
    width: ${({ grade }) => findProgressBarWidth(grade)};
    height: 100%;
    border-radius: var(--brLight);

    background-color: ${({ grade }) => findProgressBarColor(grade)};
`

const SubjectProgresssBar = ({ grade }: Props) => {
    return (
        <Container>
            <ProgressBar grade={grade} />
        </Container>
    )
}

export default SubjectProgresssBar
