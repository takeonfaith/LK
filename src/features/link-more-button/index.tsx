import { IRoute } from '@app/routes/general-routes'
import { contextMenuModel } from '@entities/context-menu'
import { Colors, IColors } from '@shared/constants/consts'
import { Button } from '@shared/ui/button'
import React from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import ContextContent from './context-content'

type Props = {
    route: IRoute
}

const LinkMoreButton = ({ route }: Props) => {
    const textColor = Colors[(route.color.length ? route.color : 'blue') as keyof IColors].main

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        e.stopPropagation()
        contextMenuModel.events.open({
            e,
            height: 105,
            content: <ContextContent {...route} />,
        })
    }

    return (
        <Button
            icon={<FiMoreVertical />}
            textColor={textColor}
            className="more-button"
            background="transparent"
            onClick={handleClick}
        />
    )
}

export default LinkMoreButton
