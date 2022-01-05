import { Title } from '@ui/atoms'
import useResize from '@utils/hooks/use-resize'
import React from 'react'
import styled from 'styled-components'
import { ChatItem } from '../atoms'

const ChatItemsWrapper = styled.div<{ height: number }>`
    overflow-y: auto;
    max-height: ${({ height }) => height - 170 + 'px'};
`

interface Props {
    chats: any[]
    isOpen: boolean
}

const ChatItems = ({ chats, isOpen }: Props) => {
    const { height } = useResize()

    return (
        <ChatItemsWrapper height={height}>
            {!chats.length && <Title size={3}>Нет чатов</Title>}
            {chats.map((chat) => (
                <ChatItem {...chat} key={chat.name} loading={false} isOpen={isOpen} />
            ))}
        </ChatItemsWrapper>
    )
}

export default ChatItems
