import { IGrade } from '@api/model/acad-performance'
import { GradeByScore } from '@consts'
import findProgressBarColor from '@features/acad-performance/lib/find-progress-bar-color'
import React from 'react'
import { FiCheck, FiX } from 'react-icons/fi'
import styled from 'styled-components'

interface Props {
    grade: keyof IGrade
}

const Container = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    background-color: ${({ grade }) => findProgressBarColor(grade)};

    width: 20px;
    height: 20px;

    min-width: 20px;
    min-height: 20px;
    border-radius: 50%;
`

const SubjectChecker = ({ grade }: Props) => {
    return <Container grade={grade}>{GradeByScore[grade] > 2 ? <FiCheck /> : <FiX />}</Container>
}

export default SubjectChecker
