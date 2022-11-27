import { TEMPLATE_CHAT_ROUTE } from '@app/routes/general-routes'
import { chatModel } from '@entities/chat'
import React, { useEffect } from 'react'
import { useRouteMatch } from 'react-router'
import styled from 'styled-components'
import { ChatHeader, Messages } from '../molecules'
import ChatInput from '../molecules/chat-input'

const ChatWindow = () => {
    const params = useRouteMatch(TEMPLATE_CHAT_ROUTE)?.params as { chatId: string | undefined }

    useEffect(() => {
        params.chatId && chatModel.events.selectChat({ chatId: params.chatId })
    }, [params.chatId])

    return (
        <ChatWindowWrapper>
            <ChatHeader name={'Леонаро ДиК априо'} />
            <Messages loading={false} />
            <ChatInput />
        </ChatWindowWrapper>
    )
}

const ChatWindowWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    & > img {
        position: absolute;
        width: 200px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.4;
    }
`

export default ChatWindow
