import { ListWrapper } from '@ui/list'
import { SkeletonShape, SkieletonShapeProps } from '@ui/skeleton-shape'
import { Direction } from '@ui/types'
import React from 'react'
import styled from 'styled-components'

const SkeletonListWrapper = styled(ListWrapper)`
    height: 100%;
`

interface Props {
    direction: Direction
    shapes: SkieletonShapeProps[]
    justifyContent?: string
}

const SkeletonList = ({ direction, shapes, justifyContent }: Props) => {
    return (
        <SkeletonListWrapper direction={direction} justifyContent={justifyContent}>
            {shapes.map((shape, i) => {
                return <SkeletonShape {...shape} key={i} />
            })}
        </SkeletonListWrapper>
    )
}

export default SkeletonList
