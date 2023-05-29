import { Colors, IColors } from '@shared/constants/consts'
import React from 'react'
import { IconType } from 'react-icons'
import { ShortCutLinkContainer } from '../atoms/short-cut'

export default ShortCutLink

interface Props {
    title: string
    icon: IconType
    color: keyof IColors
    to: string
}

function ShortCutLink({ title, icon: Icon, color, to }: Props) {
    return (
        <ShortCutLinkContainer style={{ backgroundColor: Colors[color].main }} to={to}>
            <Icon />
            <b>{title}</b>
        </ShortCutLinkContainer>
    )
}
