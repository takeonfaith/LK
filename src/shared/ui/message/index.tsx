import { messageType } from '@consts'
import { Button } from '@ui/button'
import { Align, MessageType } from '@ui/types'
import React from 'react'
import { FiX } from 'react-icons/fi'
import { Title } from '../title'
import { MessageWrapper } from './styles'

export type MessageProps = {
    type: MessageType
    children?: ChildrenType
    title: string
    icon?: React.ReactNode
    visible?: boolean
    align?: Align
    width?: string
    maxWidth?: string
    onClose?: () => void
}

export function Message({
    type,
    children,
    icon,
    width,
    maxWidth,
    title,
    onClose,
    align = 'left',
    visible = true,
}: MessageProps) {
    if (!visible) return null

    return (
        <MessageWrapper
            className="message"
            closable={!!onClose}
            type={type}
            align={align}
            width={width}
            maxWidth={maxWidth}
        >
            <Title size={4} align="left" icon={icon ?? messageType[type].icon({})}>
                {title}
            </Title>
            {onClose && <Button onClick={onClose} icon={<FiX />} className="close-button" background="transparent" />}
            {children && <div className="info-text">{children}</div>}
        </MessageWrapper>
    )
}
