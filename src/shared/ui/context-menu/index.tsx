import React from 'react'
import { ContextMenuWrapper } from './styles'

export type ContextMenuProps = {
    children: ChildrenType
    isVisible: boolean
}

export function ContextMenu({ children, ...restProps }: ContextMenuProps) {
    return <ContextMenuWrapper {...restProps}>{children}</ContextMenuWrapper>
}
