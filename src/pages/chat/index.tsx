import { TEMPLATE_CHAT_ROUTE } from '@app/routes/techers-routes'
import { ChatWindow, ListOfChats } from '@features/chat'
import EmptyHere from '@features/chat/ui/atoms/empty-here'
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import styled from 'styled-components'

const ChatPageWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

const ChatPage = () => {
    const params = useRouteMatch('/messages/:chatId')?.params as { chatId: string | undefined }

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

export default ChatPage
