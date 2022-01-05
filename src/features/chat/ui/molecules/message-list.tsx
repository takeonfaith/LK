import { Messages } from '@api/model'
import prepareMessages from '@features/chat/lib/prepare-messages'
import Avatar from '@features/home/ui/molecules/avatar'
import React from 'react'
import styled from 'styled-components'
import { MessageItem } from '../atoms'
import EmptyHere from '../atoms/empty-here'
import TopDate from '../atoms/top-date'

const MessageListWrapper = styled.div`
    padding: 20px 5px;
    height: 100%;

    .messages-section {
        position: relative;
        display: flex;
        align-items: flex-end;
        width: 100%;

        .messages {
            width: 100%;
        }
    }

    .message-avatar {
        width: 32px;
        height: 32px;
        position: sticky;
        bottom: 7px;
        margin-bottom: 10px;
    }

    @media (max-width: 1000px) {
        padding: 10px 0px;
    }
`

interface Props {
    messages: Messages
}

const MessageList = ({ messages }: Props) => {
    return (
        <MessageListWrapper>
            {Object.values(prepareMessages(messages)).length === 0 && <EmptyHere message="Нет сообщений" />}
            {Object.values(prepareMessages(messages)).map((messages, i) => {
                return (
                    <>
                        <TopDate date={messages.date} />
                        <div className="messages-section" key={i}>
                            <div className={'message-avatar'}>
                                <Avatar avatar={messages.avatar} width="32px" height="32px" marginRight="0" />
                            </div>
                            <div className="messages">
                                {messages.messages.map((message, i) => {
                                    return (
                                        <MessageItem
                                            name={message.sender}
                                            message={message}
                                            key={i}
                                            isLast={i === messages.messages.length - 1}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </>
                )
            })}
        </MessageListWrapper>
    )
}

export default MessageList
