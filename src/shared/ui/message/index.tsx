import { Align, MessageType } from '@ui/types'
import React from 'react'
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
    padding?: string
    fontSize?: string
    gap?: string
}

export function Message({
    type,
    children,
    icon,
    width,
    maxWidth,
    title,
    align = 'left',
    visible = true,
    padding,
    fontSize,
    gap,
}: MessageProps) {
    return visible ? (
        <MessageWrapper
            type={type}
            align={align}
            width={width}
            maxWidth={maxWidth}
            padding={padding}
            fontSize={fontSize}
            gap={gap}
        >
            <div className="title-and-icon">
                <Title size={4} align="left" icon={icon}>
                    {title}
                </Title>
            </div>
            {children && <div className="info-text">{children}</div>}
        </MessageWrapper>
    ) : null
}
