import { CHAT_ROUTE } from '@app/routes/general-routes'
import { contextMenuModel } from '@entities/context-menu'
import { Button } from '@ui/atoms'
import { LocalSearch } from '@ui/molecules'
import useOnClickOutside from '@utils/hooks/use-on-click-outside'
import { useRef, useState } from 'react'
import { FiMoreVertical, FiSearch, FiX } from 'react-icons/fi'
import { ImAttachment } from 'react-icons/im'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { useModal, User } from 'widgets'
import { Attachments } from '.'

const ChatHeaderWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    background: var(--schedule);
    box-shadow: 5px 0 5px #00000036;
    position: relative;
`

interface Props {
    avatar?: string
    name: string
    loading: boolean
}

const ChatHeader = ({ avatar, name, loading }: Props) => {
    const [, setOpenMenu] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const [searchMode, setSearchMode] = useState(false)
    const { open } = useModal()
    const history = useHistory()
    useOnClickOutside(menuRef, () => setOpenMenu(false))

    const handleClick = () => {
        if (searchMode) setSearchMode((prev) => !prev)
        else history.push(CHAT_ROUTE)
    }

    return (
        <ChatHeaderWrapper ref={menuRef}>
            <Button icon={<FiX />} onClick={handleClick} background="var(--schedule)" />
            {!searchMode ? (
                <User type={'teacher'} avatar={avatar} name={name} loading={loading} />
            ) : (
                <LocalSearch
                    whereToSearch={[]}
                    searchEngine={() => []}
                    setResult={() => null}
                    placeholder="Поиск сообщений"
                />
            )}
            <Button
                icon={<FiMoreVertical />}
                onClick={(e) =>
                    contextMenuModel.events.open({
                        e,
                        height: 80,
                        content: (
                            <>
                                <Button
                                    icon={<FiSearch />}
                                    text={'Поиск'}
                                    onClick={() => {
                                        setSearchMode((prev) => !prev)
                                        contextMenuModel.events.close()
                                    }}
                                    width="100%"
                                    align="left"
                                    background="transparent"
                                />
                                <Button
                                    icon={<ImAttachment />}
                                    text={'Вложения'}
                                    onClick={() => {
                                        contextMenuModel.events.close()
                                        open(<Attachments />)
                                    }}
                                    width="100%"
                                    align="left"
                                    background="transparent"
                                />
                            </>
                        ),
                    })
                }
                background="var(--schedule)"
            />
        </ChatHeaderWrapper>
    )
}

export default ChatHeader
