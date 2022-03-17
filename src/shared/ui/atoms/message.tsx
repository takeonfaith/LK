import { Colors } from '@consts'
import React from 'react'
import styled from 'styled-components'
import Title from './title'

type MessageType = 'success' | 'failure' | 'info' | 'alert'

const getColor = (type: MessageType) => {
    switch (type) {
        case 'success':
            return 'green'
        case 'failure':
            return 'red'
        case 'info':
            return 'blue'
        case 'alert':
            return 'orange'
        default:
            return 'blue'
    }
}

const MessageWrapper = styled.div<{
    type: MessageType
    align: 'left' | 'center' | 'right'
    width?: string
    maxWidth?: string
}>`
    width: ${({ width }) => width ?? '100%'};
    max-width: ${({ maxWidth }) => maxWidth ?? 'none'};
    font-size: 0.8em;
    padding: 10px;
    color: ${({ type }) => Colors[getColor(type)].main};
    background: ${({ type }) => Colors[getColor(type)].lightTransparent};
    border-radius: var(--brLight);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 500;
    align-items: ${({ align }) => (align === 'left' ? 'flex-start' : align === 'center' ? 'center' : 'flex-end')};
`

interface Props {
    type: MessageType
    children?: React.ReactNode[] | React.ReactNode | string
    title: string
    icon?: React.ReactNode
    visible?: boolean
    align?: 'left' | 'center' | 'right'
    width?: string
    maxWidth?: string
}

const Message = ({ type, children, icon, title, width, maxWidth, visible = true, align = 'left' }: Props) => {
    return visible ? (
        <MessageWrapper type={type} align={align} width={width} maxWidth={maxWidth}>
            <div className="title-and-icon">
                <Title size={4} align="left" icon={icon}>
                    {title}
                </Title>
            </div>
            {children && <div className="info-text">{children}</div>}
        </MessageWrapper>
    ) : null
}

export default Message
