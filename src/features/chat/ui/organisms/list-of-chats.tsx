import { TEMPLATE_CHAT_ROUTE } from '@app/routes/general-routes'
import { chatsModel } from '@entities/chat'
import { Button, Divider, Title } from '@ui/atoms'
import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useRouteMatch } from 'react-router'
import styled from 'styled-components'
import { ChatItems } from '../molecules'

const ListOfChats = () => {
    const chats = chatsModel.selectors.useChats()
    const [isOpen, setIsOpen] = useState(true)
    const params = useRouteMatch(TEMPLATE_CHAT_ROUTE)?.params as { chatId: string | undefined }

    return (
        <ListOfChatsWrapper isOpen={isOpen} chatId={params?.chatId}>
            <ChatListTopSection>
                <Title size={3} align="left">
                    Чаты
                </Title>
                <Button
                    onClick={() => setIsOpen((prev) => !prev)}
                    icon={isOpen ? <FiChevronLeft /> : <FiChevronRight />}
                />
            </ChatListTopSection>
            <Divider margin="10px auto" />
            <ChatItems chats={chats} isOpen={isOpen} />
        </ListOfChatsWrapper>
    )
}

const ListOfChatsWrapper = styled.div<{ isOpen: boolean; chatId?: string }>`
    padding: 14px;
    min-width: ${({ isOpen }) => (isOpen ? '350px' : '115px')};
    width: ${({ isOpen }) => (isOpen ? '350px' : '115px')};
    transition: 0.2s width, 0.2s min-width, 0.2s padding, 0.2s opacity;
    height: 100%;
    background: var(--schedule);
    color: var(--text);
    box-shadow: 1px 0 5px #00000036;

    @media (max-width: 1000px) {
        width: ${({ chatId }) => (chatId ? '0' : '100%')};
        min-width: ${({ chatId }) => (chatId ? '0' : '100%')};
        padding: ${({ chatId }) => (chatId ? '0' : '14px')};
        opacity: ${({ chatId }) => (chatId ? '0' : '1')};

        .chat-list-top-section {
            button {
                display: none;
            }
        }
    }
`

const ChatListTopSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    button {
        min-width: 30px;
        height: 30px;
        padding: 2px;
        background: transparent;

        svg {
            width: 17px;
            height: 17px;
        }
    }
    @media (max-width: 1000px) {
        button {
            display: none;
        }
    }
`

export default ListOfChats
