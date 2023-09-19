import { Button, Input } from '@ui/atoms'
import React, { useState } from 'react'
import { ImAttachment } from 'react-icons/im'
import { IoMdSend } from 'react-icons/io'
import styled from 'styled-components'

const ChatInputWrapper = styled.div`
    display: flex;
    align-items: center;
    background: var(--block);
    padding: 5px 10px;
    /* box-shadow: 0 0 1px #00000039; */
    box-shadow: 3px -2px 3px #00000029;

    input {
        background: var(--block);
    }
`

const ChatInput = () => {
    const [message, setMessage] = useState<string>('')
    return (
        <ChatInputWrapper>
            <Button icon={<ImAttachment />} onClick={() => null} background="transparent" />
            <Input value={message} setValue={setMessage} placeholder="Введите сообщение..." />
            <Button icon={<IoMdSend />} onClick={() => null} background="transparent" />
        </ChatInputWrapper>
    )
}

export default ChatInput
