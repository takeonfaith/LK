import { Participant } from '@api/model/project-activites'
import { search } from '@features/project-activites/lib/search-participants'
import Block from '@ui/block'
import { LocalSearch } from '@ui/molecules'
import { SkeletonShape } from '@ui/skeleton-shape'
import { Title } from '@ui/title'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { User } from 'widgets'
import { LoadingWrapper } from '../atoms'

interface Props {
    data: Nullable<Participant[]>
}

const LoadingContainer = styled(LoadingWrapper)`
    .user {
        margin: 15px 0;
        display: flex;
        align-items: center;
        margin-left: 7px;

        .name {
            width: 100%;
        }
    }
`

const Loading = () => {
    return (
        <LoadingContainer>
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '50%',
                    height: '20px',
                }}
                margin="0 0  1rem 0"
            />
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '100%',
                    height: '30px',
                }}
                margin="0 0  1rem 0"
            />
            <div className="user">
                <SkeletonShape
                    shape={'circle'}
                    size={{
                        width: '30px',
                        height: '30px',
                    }}
                    margin="0 0.5rem 0 0"
                />
                <div className="name">
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '70%',
                            height: '12px',
                        }}
                        margin="0"
                    />
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '20%',
                            height: '10px',
                        }}
                        margin="0.3rem 0 0 0"
                    />
                </div>
            </div>
            <div className="user">
                <SkeletonShape
                    shape={'circle'}
                    size={{
                        width: '30px',
                        height: '30px',
                    }}
                    margin="0 0.5rem 0 0"
                />
                <div className="name">
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '70%',
                            height: '12px',
                        }}
                        margin="0"
                    />
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '20%',
                            height: '10px',
                        }}
                        margin="0.3rem 0 0 0"
                    />
                </div>
            </div>
            <div className="user">
                <SkeletonShape
                    shape={'circle'}
                    size={{
                        width: '30px',
                        height: '30px',
                    }}
                    margin="0 0.5rem 0 0"
                />
                <div className="name">
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '70%',
                            height: '12px',
                        }}
                        margin="0"
                    />
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '20%',
                            height: '10px',
                        }}
                        margin="0.3rem 0 0 0"
                    />
                </div>
            </div>
            <div className="user">
                <SkeletonShape
                    shape={'circle'}
                    size={{
                        width: '30px',
                        height: '30px',
                    }}
                    margin="0 0.5rem 0 0"
                />
                <div className="name">
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '70%',
                            height: '12px',
                        }}
                        margin="0"
                    />
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '20%',
                            height: '10px',
                        }}
                        margin="0.3rem 0 0 0"
                    />
                </div>
            </div>
            <div className="user">
                <SkeletonShape
                    shape={'circle'}
                    size={{
                        width: '30px',
                        height: '30px',
                    }}
                    margin="0 0.5rem 0 0"
                />
                <div className="name">
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '70%',
                            height: '12px',
                        }}
                        margin="0"
                    />
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '20%',
                            height: '10px',
                        }}
                        margin="0.3rem 0 0 0"
                    />
                </div>
            </div>
        </LoadingContainer>
    )
}

const Participants = ({ data }: Props) => {
    const [participantsRenderList, setParticipantsRenderList] = useState<Nullable<Participant[]>>(data)
    const [foundParticipants, setFoundParticipants] = useState<Nullable<Participant[]>>(null)

    useEffect(() => {
        setParticipantsRenderList(data)
    }, [data])

    return (
        <Block maxWidth="420px" orientation="vertical" gap="0.5rem" loading={!data} skeleton={<Loading />}>
            {!!data && (
                <>
                    <Title size={3} align="left">
                        Список участников
                    </Title>
                    <LocalSearch<Participant[], Participant[]>
                        whereToSearch={data}
                        searchEngine={search}
                        setResult={setFoundParticipants}
                        placeholder={'Поиск участников'}
                    />
                    <div className="list">
                        {(foundParticipants ?? participantsRenderList)?.map(({ img, name, id }) => {
                            return <User key={id} type={'student'} name={name} avatar={img} />
                        })}
                    </div>
                </>
            )}
        </Block>
    )
}

export default Participants
