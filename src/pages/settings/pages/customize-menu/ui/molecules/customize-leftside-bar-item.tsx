import { IColors } from '@consts'
import { Icon } from '@features/all-pages/ui/atoms'
import React from 'react'
import { CustomizeLeftsideBarWrapper } from '../atoms'
import AddToMenuButton from '../atoms/add-to-menu-buttom'

interface Props {
    id: string
    title: string
    icon: ChildrenType
    color: keyof IColors
    path: string
    chosen: boolean
    shortItemChosen?: boolean
    switchMenuItem: (id: string) => void
    switchShortChosen?: (id: string) => void
}

const CustomizeLeftside = ({ id, icon, color, title, chosen, switchMenuItem }: Props) => {
    return (
        <CustomizeLeftsideBarWrapper chosen={chosen} onClick={() => switchMenuItem(id)}>
            <div className="icon-and-title">
                <Icon color={color}>{icon}</Icon>
                <strong>{title}</strong>
            </div>
            <div className="buttons">
                <AddToMenuButton
                    chosen={chosen}
                    onClick={() => {
                        switchMenuItem(id)
                    }}
                />
            </div>
        </CustomizeLeftsideBarWrapper>
    )
}

export default React.memo(CustomizeLeftside)
