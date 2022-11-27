import { signalRConnection } from '@api/config'
import { TEMPLATE_CHAT_ROUTE } from '@app/routes/general-routes'
import { chatsModel } from '@entities/chat'
import { ChatWindow, ListOfChats } from '@features/chat'
import EmptyHere from '@features/chat/ui/atoms/empty-here'
import React, { useEffect } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import styled from 'styled-components'

const ChatPage = () => {
    const params = useRouteMatch(TEMPLATE_CHAT_ROUTE)?.params as { chatId: string | undefined }

    useEffect(() => {
        chatsModel.events.loadChats()
    }, [])

    return (
        <ChatPageWrapper>
            <ListOfChats />
            {!params?.chatId && <EmptyHere />}
            <Switch>
                <Route path={TEMPLATE_CHAT_ROUTE}>
                    <ChatWindow />
                </Route>
            </Switch>
        </ChatPageWrapper>
    )
}

const ChatPageWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export default ChatPage
