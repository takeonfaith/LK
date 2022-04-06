import { Curator as CuratorType } from '@api/model/project-activites'
import { SkeletonShape } from '@ui/skeleton-shape'
import React from 'react'
import styled from 'styled-components'
import { Block, LoadingWrapper } from '../atoms'
import CuratorLeftSide from '../molecules/curator-left-side'
import CuratorRightSide from '../molecules/curator-right-side'

interface Props {
    data: Nullable<CuratorType>
    title?: string
}

const LoadingContainer = styled(LoadingWrapper)`
    display: flex;
    align-items: center;
    .curator,
    .description {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
    }

    .description {
        align-items: flex-start;
    }

    @media (max-width: 550px) {
        flex-direction: column;
        .curator,
        .description {
            width: 100%;
        }

        .description {
            margin-top: 2rem;
        }
    }
`

const Loading = () => {
    return (
        <LoadingContainer>
            <div className="curator">
                <SkeletonShape
                    shape={'circle'}
                    size={{
                        width: '100px',
                        height: '100px',
                    }}
                    margin="0px 0 1rem 0"
                />
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '200px',
                        height: '20px',
                    }}
                    margin="0"
                />
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '150px',
                        height: '15px',
                    }}
                    margin="0.5rem 0"
                />
            </div>
            <div className="description">
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '60%',
                        height: '20px',
                    }}
                    margin="0 0 2rem 0"
                />
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '95%',
                        height: '14px',
                    }}
                    margin="0.5rem 0"
                />
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '90%',
                        height: '14px',
                    }}
                    margin="0.5rem 0"
                />
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '70%',
                        height: '14px',
                    }}
                    margin="0.5rem 0"
                />
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '60%',
                        height: '14px',
                    }}
                    margin="0.5rem 0"
                />
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '70%',
                        height: '14px',
                    }}
                    margin="0.5rem 0"
                />
            </div>
        </LoadingContainer>
    )
}

const Curator = ({ data, title = 'Куратор' }: Props) => {
    return (
        <Block maxWidth="750px" orientation="horizontal" loading={!data} skeleton={<Loading />}>
            {!!data && (
                <>
                    <CuratorLeftSide img={data.img} name={data.name} title={title} id={data.id} />
                    <CuratorRightSide name={data.name} describe={data.describe} />
                </>
            )}
        </Block>
    )
}

export default Curator
