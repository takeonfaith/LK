import { Align, HeaderSize } from '@ui/types'
import React from 'react'
import { CreateHeader } from './create-header'
import { TitleWrapper, RedStar } from './styles'

export type TitleProps = {
    children: ChildrenType
    size?: HeaderSize
    align?: Align
    bottomGap?: boolean | string
    icon?: React.ReactNode
    iconColor?: string
    required?: boolean
    visible?: boolean
}

export function Title(props: TitleProps) {
    const { icon, iconColor, children, size = 1, required, align = 'center', bottomGap = false, visible = true } = props

    return visible ? (
        <TitleWrapper align={align} bottomGap={bottomGap} iconColor={iconColor}>
            {icon}
            <CreateHeader size={size}>
                {required && <RedStar>*</RedStar>}
                {children}
            </CreateHeader>
        </TitleWrapper>
    ) : null
}
