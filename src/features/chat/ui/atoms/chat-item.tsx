import Avatar from '@features/home/ui/molecules/avatar'
import React from 'react'
import { useRouteMatch } from 'react-router'
import { SkeletonLoading } from '.'
import ChatItemWrapper from './chat-item-wrapper'

interface LastMessage {
    message: string | null
    sentTime: string | null
}

interface Props {
    avatar?: string
    name: string
    lastMessage: LastMessage
    chatId: string
    amountOfUnreadMessages: number
    loading: boolean
    isOpen: boolean
}

const ChatItem = ({ avatar, name, lastMessage, chatId, loading, amountOfUnreadMessages, isOpen }: Props) => {
    const params = useRouteMatch('/messages/:chatId')?.params as { chatId: string | undefined }

    return !loading ? (
        <ChatItemWrapper to={`/messages/${chatId}`} isChosen={params?.chatId === chatId} isOpen={isOpen}>
            <div className="chat-item-content">
                {amountOfUnreadMessages !== 0 && (
                    <div className="amount-of-unread-messages">{amountOfUnreadMessages}</div>
                )}
                {isOpen ? (
                    <Avatar avatar={avatar} width="40px" height="40px" marginRight="7px" />
                ) : (
                    <Avatar avatar={avatar} width="45px" height="45px" marginRight="0" />
                )}
                {isOpen && (
                    <>
                        <div className="name-and-message">
                            <b>{name}</b>
                            <div className="last-message">{lastMessage.message}</div>
                        </div>
                        <div className="sent-time">{lastMessage.sentTime}</div>
                    </>
                )}
            </div>
        </ChatItemWrapper>
    ) : (
        <SkeletonLoading />
    )
}

export default ChatItem
