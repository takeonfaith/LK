import React from 'react'
import { DividerLine } from './styles'

export type DividerProps = {
    margin?: string
}

export function Divider({ margin }: DividerProps) {
    return <DividerLine margin={margin} />
}
