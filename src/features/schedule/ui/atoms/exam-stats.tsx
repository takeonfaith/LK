import getCorrectWordForm from '@utils/get-correct-word-form'
import React from 'react'
import styled from 'styled-components'

const ExamStatsWrapper = styled.div`
    display: flex;
    align-items: center;
    span {
        font-size: 0.8em;
        opacity: 0.6;
        font-weight: 500;
        color: var(--text);
    }

    & > * + span::before {
        content: '';
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background: var(--text);
        position: relative;
        display: block;
        float: left;
        margin: 5px 10px;
    }
`

interface Props {
    exams: number
    tests: number
    cp: number
}

const ExamStats = ({ exams, tests, cp }: Props) => {
    return (
        <ExamStatsWrapper>
            <span>
                {exams}{' '}
                {getCorrectWordForm(exams, {
                    zero: 'Экзаменов',
                    one: 'Экзамен',
                    twoToFour: 'Экзамена',
                    fiveToNine: 'Экзаменов',
                })}
            </span>
            <span>
                {tests}{' '}
                {getCorrectWordForm(tests, {
                    zero: 'Зачетов',
                    one: 'Зачет',
                    twoToFour: 'Зачета',
                    fiveToNine: 'Зачетов',
                })}
            </span>
            <span>
                {cp}{' '}
                {getCorrectWordForm(cp, {
                    zero: 'Курсовых',
                    one: 'Курсовая',
                    twoToFour: 'Курсовые',
                    fiveToNine: 'Курсовых',
                })}
            </span>
        </ExamStatsWrapper>
    )
}

export default ExamStats
