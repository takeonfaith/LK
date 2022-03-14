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

const MessageWrapper = styled.div<{ type: MessageType }>`
    font-size: 0.8em;
    padding: 10px;
    color: ${({ type }) => Colors[getColor(type)].main};
    background: ${({ type }) => Colors[getColor(type)].lightTransparent};
    border-radius: var(--brLight);
    position: relative;
    padding-right: 35px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 500;
`

interface Props {
    type: MessageType
    children?: React.ReactNode[] | React.ReactNode | string
    title: string
    icon?: React.ReactNode
    visible?: boolean
}

const Message = ({ type, children, icon, title, visible = true }: Props) => {
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

export default Message
