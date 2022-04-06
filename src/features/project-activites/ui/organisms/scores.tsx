import { Scores as ScoresType } from '@api/model/project-activites'
import { SkeletonShape } from '@ui/skeleton-shape'
import React from 'react'
import styled from 'styled-components'
import { Block, LoadingWrapper } from '../atoms'
import ScoresLeftSide from '../molecules/scores-left-side'
import ScoresRightSide from '../molecules/scores-right-side'

interface Props {
    data: Nullable<ScoresType>
}

const LoadingContainer = styled(LoadingWrapper)`
    display: flex;
    flex-direction: column;
    height: 100%;

    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        width: 100%;
    }

    .content {
        width: 100%;
        display: flex;
        align-items: center;

        .left,
        .right {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }

        .left {
            width: 65%;
        }

        .right {
            width: 35%;
        }
    }

    @media (max-width: 550px) {
        .content {
            flex-direction: column;
            .left,
            .right {
                width: 100%;
            }
        }
    }
`

const Loading = () => {
    return (
        <LoadingContainer>
            <div className="content">
                <div className="left">
                    <div className="title">
                        <SkeletonShape
                            shape={'rect'}
                            size={{
                                width: '40%',
                                height: '25px',
                            }}
                            margin="0 2rem 0 0"
                        />
                        <SkeletonShape
                            shape={'rect'}
                            size={{
                                width: '100px',
                                height: '16px',
                            }}
                            margin="0"
                        />
                    </div>
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '100%',
                            height: '35px',
                        }}
                        margin="0.5rem 0"
                    />
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '100%',
                            height: '35px',
                        }}
                        margin="0.5rem 0"
                    />
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '100%',
                            height: '35px',
                        }}
                        margin="0.5rem 0"
                    />
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '100%',
                            height: '35px',
                        }}
                        margin="0.5rem 0"
                    />
                </div>
                <div className="right">
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '150px',
                            height: '50px',
                        }}
                        margin="0"
                    />
                </div>
            </div>
        </LoadingContainer>
    )
}

const Scores = ({ data }: Props) => {
    const scoreSum = !!data ? Object.values(data).reduce((acc, value) => acc + value, 0) : 0

    return (
        <Block maxWidth="750px" loading={!data} skeleton={<Loading />}>
            {!!data && <ScoresLeftSide scoreSum={scoreSum} scores={data} />}
            <ScoresRightSide scoreSum={scoreSum} />
        </Block>
    )
}

export default Scores
