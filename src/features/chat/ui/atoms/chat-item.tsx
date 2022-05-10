import { CHAT_ROUTE, TEMPLATE_CHAT_ROUTE } from '@app/routes/general-routes'
import Avatar from '@features/home/ui/molecules/avatar'
import Notification from '@ui/notification'
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
    const params = useRouteMatch(TEMPLATE_CHAT_ROUTE)?.params as { chatId: string | undefined }

    return !loading ? (
        <ChatItemWrapper to={CHAT_ROUTE + `/${chatId}`} isChosen={params?.chatId === chatId} isOpen={isOpen}>
            <div className="chat-item-content">
                <Notification
                    top="45px"
                    left="45px"
                    outline="3px solid var(--theme)"
                    color="red"
                    visible={amountOfUnreadMessages !== 0}
                >
                    {amountOfUnreadMessages}
                </Notification>

                {isOpen ? (
                    <Avatar name={name} avatar={avatar} width="40px" height="40px" marginRight="7px" />
                ) : (
                    <Avatar name={name} avatar={avatar} width="45px" height="45px" marginRight="0" />
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
