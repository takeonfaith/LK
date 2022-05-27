import { ListWrapper, ModifiedAlign, ModifiedVerticalAlign } from '@ui/list'
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
    horizontalAlign?: ModifiedAlign
    verticalAlign?: ModifiedVerticalAlign
}

const SkeletonList = ({ direction, shapes, horizontalAlign, verticalAlign }: Props) => {
    return (
        <SkeletonListWrapper direction={direction} horizontalAlign={horizontalAlign} verticalAlign={verticalAlign}>
            {shapes.map((shape, i) => {
                return <SkeletonShape {...shape} key={i} />
            })}
        </SkeletonListWrapper>
    )
}

export default SkeletonList
