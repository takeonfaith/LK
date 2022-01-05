import { Colors } from '@consts'
import Avatar from '@features/home/ui/molecules/avatar'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SkeletonLoading } from '.'
import { useRouteMatch } from 'react-router'
import Tooltip from '@ui/atoms/tooltip'

const ChatItemWrapper = styled(Link)<{ isChosen: boolean; isOpen: boolean }>`
    text-decoration: none;

    .chat-item-content {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        color: ${({ isChosen }) => (isChosen ? '#fff' : 'var(--text)')};
        width: 100%;
        padding: 10px;
        border-radius: var(--brLight);
        background: ${({ isChosen }) => (isChosen ? Colors.blue.main : 'var(--schedule)')};
        overflow: hidden;
        position: relative;

        &:hover {
            filter: brightness(0.95);
        }

        .amount-of-unread-messages {
            position: absolute;
            top: 10px;
            left: ${({ isOpen }) => (!isOpen ? '47px' : '35px')};
            min-width: 20px;
            height: 20px;
            background: ${Colors.red.main};
            border-radius: 100%;
            color: #fff;
            border: 3px solid var(--theme);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.6em;
            font-weight: bold;
        }

        .name-and-message {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            max-width: 200px;

            & > b {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 0.8em;
            }

            .last-message {
                width: 100%;
                font-size: 0.8em;
                opacity: 0.7;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }

        .sent-time {
            min-height: 30px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
            font-size: 0.8em;
            opacity: 0.6;
            font-weight: 500;
        }
    }
`

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
