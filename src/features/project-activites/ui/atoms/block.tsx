import styled from 'styled-components'
import { Direction } from '@ui/types'
import React from 'react'
import { SkeletonShape } from '@ui/skeleton-shape'

interface StyledProps {
    width?: string
    maxWidth?: string
    orientation?: Direction
    gap?: string
}

const BlockWrapper = styled.div<StyledProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--schedule);
    border-radius: var(--brSemi);
    flex-direction: ${({ orientation }) => (orientation === 'vertical' ? 'column' : 'row')};
    box-shadow: 0 0 32px rgb(0 0 0 / 8%);
    padding: 20px;
    height: 330px;
    max-width: ${({ maxWidth }) => maxWidth ?? '750px'};
    width: ${({ width }) => width ?? '100%'};
    color: var(--text);
    gap: ${({ gap }) => gap ?? '0'};

    .list {
        width: 100%;
        display: flex;
        height: 100%;
        flex-direction: column;
        overflow-y: auto;
        padding-right: 5px;
    }

    @media (max-width: 1600px) {
        max-width: 800px;
        width: 100%;
    }

    @media (max-width: 550px) {
        height: auto;
        max-height: 100%;
        flex-direction: column;
        gap: 1rem;
    }
`

interface Props extends StyledProps {
    children: ChildrenType
    loading?: boolean
    skeleton?: ChildrenType
}

const SkeletonWrapper = styled.div`
    width: 100%;
`

const DefaultSkeleton = () => {
    return (
        <SkeletonWrapper>
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '50%',
                    height: '24px',
                }}
                margin="0 0 30px 0"
            />
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '100%',
                    height: '17px',
                }}
                margin="0.8rem 0"
            />
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '90%',
                    height: '17px',
                }}
                margin="0.8rem 0"
            />
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '90%',
                    height: '17px',
                }}
                margin="0.8rem 0"
            />
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '80%',
                    height: '17px',
                }}
                margin="0.8rem 0"
            />

            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '45%',
                    height: '17px',
                }}
                margin="2rem 0 0.8rem 0"
            />
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '40%',
                    height: '17px',
                }}
                margin="0.8rem 0"
            />
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '60%',
                    height: '17px',
                }}
                margin="0.8rem 0"
            />
        </SkeletonWrapper>
    )
}

const Block = (props: Props) => {
    const { children, skeleton = <DefaultSkeleton />, loading = false, ...restProps } = props
    return <BlockWrapper {...restProps}>{!loading ? children : skeleton}</BlockWrapper>
}

export default Block
