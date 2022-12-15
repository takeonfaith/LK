import { Project } from '@shared/api/model/project-activites'
import { Title } from '@shared/ui/title'
import React from 'react'
import styled from 'styled-components'
import { ScoreItem } from '../score-item'

const LastSemestrStyled = styled.div``

type Props = {
    data: Project | null | undefined
}

const LastSemestr = ({ data }: Props) => {
    return (
        <LastSemestrStyled>
            <Title size={4} align="left" bottomGap>
                Результат аттестации за прошлый семестр
            </Title>
            <ScoreItem
                title="Набрано баллов"
                score={Number.parseInt(data?.last_semestr_balls ?? '0')}
                scoreText={data?.last_semestr_result ?? ''}
            />
        </LastSemestrStyled>
    )
}

export default LastSemestr
