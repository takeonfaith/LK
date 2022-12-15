import { Project } from '@shared/api/model/project-activites'
import { Title } from '@shared/ui/title'
import React from 'react'
import { ScoreItem } from '../score-item'

type Props = {
    data: Project | null | undefined
}

const Result = ({ data }: Props) => {
    const lastSemestr = Number.parseInt(data?.arrear_balls ?? '0')
    const currentSemestr = Number.parseInt(data?.current_semestr_balls ?? '0')

    return (
        <div>
            <Title size={4} align="left" bottomGap>
                Итог
            </Title>
            <ScoreItem title="За прошлый семестр баллов " score={lastSemestr} scoreText={data?.arrear_result ?? ''} />
            <ScoreItem
                title="За текущий семестр баллов "
                score={currentSemestr}
                scoreText={data?.current_semestr_result ?? ''}
            />
        </div>
    )
}

export default Result
