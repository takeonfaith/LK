import { TEMPLATE_CHAT_ROUTE } from '@app/routes/general-routes'
import searchChats from '@features/chat/lib/search-chats'
import { Button, Divider, Title } from '@ui/atoms'
import { LocalSearch } from '@ui/molecules'
import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useRouteMatch } from 'react-router'
import styled from 'styled-components'
import { ChatItems } from '../molecules'

const ListOfChatsWrapper = styled.div<{ isOpen: boolean; chatId?: string }>`
    padding: 14px;
    min-width: ${({ isOpen }) => (isOpen ? '350px' : '115px')};
    width: ${({ isOpen }) => (isOpen ? '350px' : '115px')};
    transition: 0.2s width, 0.2s min-width, 0.2s padding, 0.2s opacity;
    height: 100%;
    background: var(--schedule);
    color: var(--text);
    box-shadow: 1px 0 5px #00000036;

    .chat-list-top-section {
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
    }

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

const ListOfChats = () => {
    const [foundChats, setFoundChats] = useState<any[] | null>(null)
    const [isOpen, setIsOpen] = useState(true)
    const params = useRouteMatch(TEMPLATE_CHAT_ROUTE)?.params as { chatId: string | undefined }

    return (
        <ListOfChatsWrapper isOpen={isOpen} chatId={params?.chatId}>
            <div className="chat-list-top-section">
                <Title size={3} align="left">
                    Чаты
                </Title>
                <Button
                    onClick={() => setIsOpen((prev) => !prev)}
                    icon={isOpen ? <FiChevronLeft /> : <FiChevronRight />}
                />
            </div>
            <LocalSearch
                whereToSearch={chats}
                searchEngine={searchChats}
                setResult={setFoundChats}
                placeholder="Поиск чатов"
            />
            <Divider margin="10px auto" />
            <ChatItems chats={foundChats ?? chats} isOpen={isOpen} />
        </ListOfChatsWrapper>
    )
}

export default ListOfChats
