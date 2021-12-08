import React, { memo } from 'react'
import { IconType } from 'react-icons/lib'
import LeftsideBarItemButtonWrapper from '../atoms/leftside-bar-item-button-wrapper'

interface Props {
    id: number
    title: string
    icon: IconType
}

const LeftsideBarItemButton = ({ icon, title }: Props) => {
    const showIcon = () => {
        const Icon = icon
        return <Icon />
    }

    return (
        <LeftsideBarItemButtonWrapper className="leftside-bar-item">
            {showIcon()}
            <strong>{title}</strong>
        </LeftsideBarItemButtonWrapper>
    )
}

export default React.memo(LeftsideBarItemButton)
