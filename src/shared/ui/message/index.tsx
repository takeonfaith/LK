import { MessageType } from '@ui/types'
import React from 'react'
import { Title } from '../title'
import { MessageWrapper } from './styles'

export type MessageProps = {
    type: MessageType
    children?: ChildrenType
    title: string
    icon?: React.ReactNode
    visible?: boolean
}

export function Message({ type, children, icon, title, visible = true }: MessageProps) {
    return visible ? (
        <MessageWrapper type={type}>
            <div className="title-and-icon">
                <Title size={4} align="left" icon={icon}>
                    {title}
                </Title>
            </div>
            {children && <div className="info-text">{children}</div>}
        </MessageWrapper>
    ) : null
}
