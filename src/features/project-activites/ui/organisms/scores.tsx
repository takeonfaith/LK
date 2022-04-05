import { Scores as ScoresType } from '@api/model/project-activites'
import React from 'react'
import styled from 'styled-components'
import { Block } from '../atoms'
import { ScoreItem } from '../atoms/score-item'
import ScoresLeftSide from '../molecules/scores-left-side'
import ScoresRightSide from '../molecules/scores-right-side'

interface Props {
    data: ScoresType
}

const ProjectScores = styled.div`
    min-width: 750px;
    height: 330px;
    display: flex;
    border-radius: var(--brBold);
    overflow: hidden;
    background: var(--search);
    border-radius: var(--brLight);
`
const Scores = ({ data }: Props) => {
    const scoreSum = Object.values(data).reduce((acc, value) => acc + value, 0)

    return (
        <Block maxWidth="750px">
            <ScoresLeftSide scoreSum={scoreSum} scores={data} />
            <ScoresRightSide scoreSum={scoreSum} />
        </Block>
    )
}

export default Scores
