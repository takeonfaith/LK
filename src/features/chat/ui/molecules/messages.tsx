import scrollToBottom from '@features/chat/lib/scroll-to-bottom'
import { chatMessagesModel } from '@features/chat/model'
import { Button, Wrapper } from '@ui/atoms'
import React, { useEffect, useRef, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import styled from 'styled-components'
import { MessageList } from '.'

const MessagesWrapper = styled.div<{ buttonVisible: boolean }>`
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;

    button {
        position: fixed;
        right: 40px;
        bottom: 70px;
        min-width: 35px;
        height: 35px;
        border-radius: 100%;
        padding: 0px;
        background: var(--settings);
        transition: 0.2s visibility, 0.2s opacity, 0.2s transform;
        visibility: ${({ buttonVisible }) => (buttonVisible ? 'visible' : 'hidden')};
        opacity: ${({ buttonVisible }) => (buttonVisible ? '1' : '0')};
        transform: scale(${({ buttonVisible }) => (buttonVisible ? '1' : '0.9')});

        svg {
            width: 22px;
            height: 22px;
        }
    }

    @media (max-width: 1000px) {
        button {
            position: fixed;
            right: 20px;
            bottom: 70px;
            border-radius: 100%;
        }
    }
`

interface Props {
    loading: boolean
}

const Messages = ({ loading }: Props) => {
    const messages = chatMessagesModel.selectors.useMessages()
    const listRef = useRef<HTMLDivElement>(null)

    const [buttonVisible, setButtonVisible] = useState(false)

    useEffect(() => {
        scrollToBottom(listRef)
    }, [messages.length])

    const handleScroll = () => {
        if (!!listRef.current) {
            const isScrolledEnough =
                listRef.current.scrollHeight - listRef.current.offsetHeight - listRef.current?.scrollTop > 350
            setButtonVisible(isScrolledEnough)
        }
    }

    return (
        <MessagesWrapper ref={listRef} buttonVisible={buttonVisible} onScroll={handleScroll}>
            <Wrapper loading={loading} load={() => null} error={null} data={!loading}>
                <MessageList messages={messages} />
            </Wrapper>
            <Button icon={<FiChevronDown />} onClick={() => scrollToBottom(listRef)} />
        </MessagesWrapper>
    )
}

export default Messages
