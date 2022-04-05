import { Participant } from '@api/model/project-activites'
import { Search } from '@features/project-activites/lib/search-participants'
import { LocalSearch } from '@ui/molecules'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ParticipantItem } from '../atoms/participant-item'

interface Props {
    data: Participant[]
}

const ParticipantsList = styled.div`
    width: calc(100% - 750px);
    height: 330px;
    margin-left: 20px;
    padding: 30px 25px;
    box-sizing: border-box;
    background: var(--search);
    border-radius: var(--brBold);

    .heading {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        margin-bottom: 15px;
    }

    .list {
        max-height: 72%;
        overflow-y: auto;
        margin-top: 5px;
        border-radius: var(--standartBorderRadius1);
    }

    .search {
        background: var(--theme);
        border-radius: var(--brLight);
    }
`

const Participants = ({ data }: Props) => {
    const [participantsRenderList, setParticipantsRenderList] = useState<Nullable<Participant[]>>(data)
    useEffect(() => {
        setParticipantsRenderList(data)
    }, [data])

    return (
        <ParticipantsList>
            <div className="heading">
                <h3>Список участников</h3>
            </div>
            <div className="search">
                <LocalSearch<Participant[], Participant[]>
                    whereToSearch={data}
                    searchEngine={Search}
                    setResult={setParticipantsRenderList}
                    placeholder={'Поиск участников'}
                    inputAppearance={false}
                />
            </div>
            <div className="list">
                {participantsRenderList &&
                    participantsRenderList.map(({ img, name, id }, i) => {
                        return <ParticipantItem img={img} name={name} key={i} id={id} />
                    })}
            </div>
        </ParticipantsList>
    )
}

export default Participants
