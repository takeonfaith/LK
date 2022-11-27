import { Chats } from '@entities/chat/types/chat'
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
    chats: Chats
    isOpen: boolean
}

const ChatItems = ({ chats, isOpen }: Props) => {
    const { height } = useResize()

    return (
        <ChatItemsWrapper height={height}>
            {!chats.length && <Title size={3}>Нет чатов</Title>}
            {Object.values(chats).map((chat) => (
                <ChatItem
                    id={chat.id}
                    amountOfUnreadMessages={chat.amountOfUnreadMessages}
                    key={chat.companion.name}
                    loading={false}
                    isOpen={isOpen}
                    companion={{
                        id: 'ada',
                        name: 'ddd',
                        avatar: undefined,
                    }}
                    lastMessage={{
                        message: '',
                        sentTime: '',
                    }}
                />
            ))}
        </ChatItemsWrapper>
    )
}

export default ChatItems
