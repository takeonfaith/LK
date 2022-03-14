import { Colors } from '@consts'
import React from 'react'
import styled from 'styled-components'
import Title from './title'

const getColor = (type: 'success' | 'failure' | 'info') => {
    switch (type) {
        case 'success':
            return 'green'
        case 'failure':
            return 'red'
        case 'info':
            return 'blue'
        default:
            return 'blue'
    }
}

const MessageWrapper = styled.div<{ type: 'success' | 'failure' | 'info' }>`
    font-size: 0.8em;
    padding: 10px;
    color: ${({ type }) => Colors[getColor(type)].littleDarker};
    background: ${({ type }) => Colors[getColor(type)].lightTransparent};
    border-radius: var(--brLight);
    position: relative;
    padding-right: 35px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

interface Props {
    type: 'success' | 'failure' | 'info'
    children?: React.ReactNode[] | React.ReactNode | string
    title: string
    icon: React.ReactNode
    visible?: boolean
}

const Message = ({ type, children, icon, title, visible }: Props) => {
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
