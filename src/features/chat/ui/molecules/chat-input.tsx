import { chatsMessageModel, chatMessagesModel } from '@features/chat/model'
import { Button, Input } from '@ui/atoms'
import { ImAttachment } from 'react-icons/im'
import { IoMdSend } from 'react-icons/io'
import styled from 'styled-components'

const ChatInput = () => {
    const message = chatsMessageModel.selectors.useMessage()
    return (
        <ChatInputWrapper>
            <Button icon={<ImAttachment />} onClick={() => null} background="transparent" />
            <Input value={message} setValue={chatsMessageModel.events.update} placeholder="Введите сообщение..." />
            <Button
                icon={<IoMdSend />}
                onClick={() => chatMessagesModel.events.sendMessage()}
                background="transparent"
            />
        </ChatInputWrapper>
    )
}

const ChatInputWrapper = styled.div`
    display: flex;
    align-items: center;
    background: var(--schedule);
    padding: 5px 10px;
    /* box-shadow: 0 0 1px #00000039; */
    box-shadow: 3px -2px 3px #00000029;

    input {
        background: var(--schedule);
    }
`

export default ChatInput
