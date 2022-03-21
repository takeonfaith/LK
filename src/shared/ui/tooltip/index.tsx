import React from 'react'
import { TooltipBox, TooltipWrapper } from './styles'
import { Direction } from './types'

export type TooltipProps = {
    children: ChildrenType
    direction: Direction
    text: string
    width?: string
}

export function Tooltip({ children, direction, text, width }: TooltipProps) {
    return (
        <TooltipWrapper direction={direction}>
            <TooltipBox width={width}>{text}</TooltipBox>
            {children}
        </TooltipWrapper>
    )
}
