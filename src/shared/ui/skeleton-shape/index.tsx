import { Shape } from '@ui/types'
import React from 'react'
import { SkeletonShapeWrapper } from './styles'

export type SkieletonShapeProps = {
    shape: Shape
    margin?: string
    size: { width: string; height: string }
    pulse?: boolean
}

export function SkeletonShape({ shape, size, margin = '10px 0', pulse = true }: SkieletonShapeProps) {
    return <SkeletonShapeWrapper pulse={pulse} size={size} shape={shape} margin={margin}></SkeletonShapeWrapper>
}
