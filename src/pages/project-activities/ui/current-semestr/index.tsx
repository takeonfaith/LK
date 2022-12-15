import { Project } from '@shared/api/model/project-activites'
import { Message } from '@shared/ui/message'
import { Title } from '@shared/ui/title'
import React from 'react'
import styled from 'styled-components'
import { ScoreItem } from '../score-item'

const CurrentSemestrStyled = styled.div``

type Props = {
    data: Project | null | undefined
}

const CurrentSemestr = ({ data }: Props) => {
    const [first, second, mid] = [
        Number.parseInt(data?.current_att1 ?? '0'),
        Number.parseInt(data?.current_att2 ?? '0'),
        Number.parseInt(data?.current_att_mid ?? '0'),
    ]
    const lastSemestr = Number.parseInt(data?.last_semestr_balls ?? '0')
    return (
        <CurrentSemestrStyled>
            <Title size={4} align="left" bottomGap>
                Результат аттестации за текущий семестр
            </Title>
            <Message type="failure" visible={data?.last_semestr_result === 'не зачтено'} title={'Внимание'} icon={null}>
                Перенос баллов с прошлого семестра: {lastSemestr}. Для закрытия задолженности необходимо в этом семестре
                набрать дополнительно {60 - lastSemestr} баллов.
            </Message>
            <ScoreItem title="Первая аттестация" score={first} color="var(--text)" />
            <ScoreItem title="Вторая аттестация" score={second} color="var(--text)" />
            <ScoreItem title="Промежуточная аттестация" score={mid} color="var(--text)" />
        </CurrentSemestrStyled>
    )
}

export default CurrentSemestr
