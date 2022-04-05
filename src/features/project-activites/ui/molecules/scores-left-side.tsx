import { Scores } from '@api/model/project-activites'
import { Title } from '@ui/title'
import getCorrectWordForm from '@utils/get-correct-word-form'
import React from 'react'
import styled from 'styled-components'
import { ScoreItem } from '../atoms/score-item'

interface Props {
    scoreSum: number
    scores: Scores
}

const LeftSide = styled.div`
    width: 70%;
    border-radius: calc(var(--brSemi) - 7px);
    box-shadow: var(--schedule-shadow);
    padding: 30px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }

    .list {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-height: 170px;
        overflow-y: auto;

        ::-webkit-scrollbar {
            width: 4px;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: hsla(0, 0%, 53.3%, 0.425);
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }
    }
`

const ScoresLeftSide = ({ scores, scoreSum }: Props) => {
    return (
        <LeftSide>
            <div className="header">
                <Title size={2} align="left">
                    Начисление баллов
                </Title>
                <span style={{ color: 'var(--blue)', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                    {scoreSum}{' '}
                    {getCorrectWordForm(scoreSum, {
                        zero: 'баллов',
                        one: 'балл',
                        twoToFour: 'балла',
                        fiveToNine: 'баллов',
                    })}
                </span>
            </div>
            <div className="list">
                {Object.keys(scores).map((el, i) => {
                    return <ScoreItem title={el} score={scores[el]} key={i} />
                })}
            </div>
        </LeftSide>
    )
}

export default ScoresLeftSide
