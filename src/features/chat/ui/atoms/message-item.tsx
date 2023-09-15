import { Message } from '@api/model'
import { Colors } from '@shared/constants'
import { contextMenuModel } from '@entities/context-menu'
import localizeDate from '@shared/lib/dates/localize-date'
import React from 'react'
import styled from 'styled-components'
import { MessageContextMenu } from '.'

const MessageItemWrapper = styled.div<{ isYourMessage: boolean; isLast: boolean }>`
    display: flex;
    align-items: flex-end;
    padding: ${({ isLast }) => (!isLast ? '2px 0' : '2px 0 10px 0')};
    position: static;

    .message-avatar {
        width: 32px;
        height: 32px;

        position: sticky;
        bottom: 0px;
        top: 0px;
    }

    .name-and-message {
        display: flex;
        flex-direction: column;
        background: ${({ isYourMessage }) => (isYourMessage ? Colors.blue.main : 'var(--schedule)')};
        color: ${({ isYourMessage }) => (isYourMessage ? '#fff' : 'var(--text)')};
        padding: 7px;
        border-radius: ${({ isLast }) => (!isLast ? '10px' : '10px 10px 10px 0')};
        box-shadow: var(--schedule-shadow);
        margin-left: 10px;
        max-width: 40%;

        .name-and-time {
            b {
                color: ${({ isYourMessage }) => (isYourMessage ? '#fff' : 'var(--text)')};
                font-size: 0.8em;
                margin-bottom: 5px;
                margin-right: 10px;
            }

            span {
                font-size: 0.7em;
                opacity: 0.8;
            }
        }

        .message {
            font-size: 1em;
        }
    }

    @media (max-width: 1000px) {
        .name-and-message {
            max-width: 70%;
        }
    }
`

interface Props {
    name: string
    message: Message
    isLast: boolean
}

const MessageItem = ({ name, message, isLast }: Props) => {
    return (
        <MessageItemWrapper
            isYourMessage={name === 'Kostya Doloz'}
            isLast={isLast}
            onContextMenu={(e) => {
                contextMenuModel.events.open({ e, content: <MessageContextMenu message={message} />, height: 70 })
            }}
        >
            <div className="name-and-message">
                <div className="name-and-time">
                    <b>{name}</b>
                    <span>{localizeDate(message.sentTime)}</span>
                </div>
                <span className="message">{message.message}</span>
            </div>
        </MessageItemWrapper>
    )
}

export default MessageItem
