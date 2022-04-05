import { Scores } from '@api/model/project-activites'
import React from 'react'
import styled from 'styled-components'
import { ScoreItem } from '../atoms/score-item'

interface Props {
    scoreSum: number
    scores: Scores
}

const LeftSide = styled.div`
    width: 70%;
    background: var(--settings);
    border-radius: var(--brBold);
    box-shadow: var(--light-box-shadow);
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
                <h2>Начисление баллов</h2>
                <span style={{ color: 'var(--blue)', fontWeight: 'bold' }}>
                    {scoreSum} {correctNumberBasedWord(scoreSum, 'балл', 'балла', 'баллов')}
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

function correctNumberBasedWord(number: number, word1: string, word2To4: string, word5To9: string) {
    return number % 10 == 1 && (number < 10 || number > 20)
        ? word1
        : number % 10 >= 2 && number % 10 <= 4 && (number < 10 || number > 20)
        ? word2To4
        : word5To9
}

export default ScoresLeftSide
