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
    title?: ChildrenType
    icon?: ChildrenType
    visible?: boolean
    align?: Align
    width?: string
    maxWidth?: string
    onClose?: () => void
    padding?: string
    fontSize?: string
    gap?: string
    solidBackground?: boolean
}

export function Message({
    type,
    children,
    icon,
    width,
    maxWidth,
    title,
    onClose,
    padding,
    fontSize,
    gap,
    solidBackground = false,
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
            padding={padding}
            fontSize={fontSize}
            gap={gap}
            solidBackground={solidBackground}
        >
            <Title size={4} align={align} icon={icon === null ? null : icon ?? messageType[type].icon({})}>
                {title ?? messageType[type].title}
            </Title>
            {onClose && <Button onClick={onClose} icon={<FiX />} className="close-button" background="transparent" />}
            {children && <div className="info-text">{children}</div>}
            {/* {type === 'hint' && <Button background="#ffffff10" text="Понятно!" textColor="#fff" />} */}
        </MessageWrapper>
    )
}
