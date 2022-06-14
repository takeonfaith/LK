import { Direction } from '@ui/types'
import React from 'react'
import { DividerLine } from './styles'

export type DividerProps = {
    direction?: Direction
    margin?: string
}

export function Divider({ direction, margin }: DividerProps) {
    return <DividerLine direction={direction} margin={margin} />
}
