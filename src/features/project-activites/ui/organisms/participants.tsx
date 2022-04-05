import { Participant } from '@api/model/project-activites'
import { search } from '@features/project-activites/lib/search-participants'
import { LocalSearch } from '@ui/molecules'
import { Title } from '@ui/title'
import React, { useEffect, useState } from 'react'
import { User } from 'widgets'
import { Block } from '../atoms'

interface Props {
    data: Participant[]
}

const Participants = ({ data }: Props) => {
    const [participantsRenderList, setParticipantsRenderList] = useState<Nullable<Participant[]>>(data)
    const [foundParticipants, setFoundParticipants] = useState<Nullable<Participant[]>>(null)

    useEffect(() => {
        setParticipantsRenderList(data)
    }, [data])

    return (
        <Block maxWidth="500px" orientation="vertical">
            <Title size={3} bottomGap align="left">
                Список участников
            </Title>
            <LocalSearch<Participant[], Participant[]>
                whereToSearch={data}
                searchEngine={search}
                setResult={setFoundParticipants}
                placeholder={'Поиск участников'}
            />
            <div className="list">
                {(foundParticipants ?? participantsRenderList)?.map(({ img, name, id }, i) => {
                    return <User key={id} type={'student'} name={name} avatar={img} />
                })}
            </div>
        </Block>
    )
}

export default Participants
