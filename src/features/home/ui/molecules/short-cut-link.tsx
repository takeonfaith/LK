import React from 'react'
import { IconType } from 'react-icons'
import { Colors } from '../../../../shared/consts'
import { Title } from '../../../../shared/ui/atoms'
import { ShortCutLinkContainer } from '../atoms/short-cut'

export default ShortCutLink

interface Props {
    title: string
    icon: IconType
    color: string
    to: string
}

function ShortCutLink({ title, icon: Icon, color, to }: Props) {
    return (
        <ShortCutLinkContainer style={{ backgroundColor: Colors[color].main }} to={to}>
            <Icon />
            <Title size={3}>{title}</Title>
        </ShortCutLinkContainer>
    )
}
