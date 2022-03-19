import { Align, HeaderSize } from '@ui/types'
import React from 'react'
import { CreateHeader } from './create-header'
import { TitleWrapper } from './styles'

export type TitleProps = {
    children: ChildrenType
    size?: HeaderSize
    align?: Align
    bottomGap?: boolean
    icon?: React.ReactNode
    iconColor?: string
}

export function Title(props: TitleProps) {
    const { icon, iconColor, children, size = 1, align = 'center', bottomGap = false } = props

    return (
        <TitleWrapper align={align} bottomGap={bottomGap} iconColor={iconColor}>
            {icon}
            <CreateHeader size={size}>{children}</CreateHeader>
        </TitleWrapper>
    )
}
