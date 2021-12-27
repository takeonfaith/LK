import { userModel } from '@entities/user'
import Avatar from '@features/home/ui/molecules/avatar'
import { ContextMenu, Title } from '@ui/atoms'
import getShortName from '@utils/get-short-name'
import useOnClickOutside from '@utils/hooks/use-on-click-outside'
import React, { useRef, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import styled from 'styled-components'
import HeaderContextMenu from '../molecules/header-context-menu'

const UserInfoWrapper = styled.div`
    position: relative;
    z-index: 10;

    .user-info-plate {
        display: flex;
        align-items: center;
        color: var(--text);
        background: transparent;
        /* box-shadow: 0 0 2px #0000004e; */
        padding: 5px 10px;
        border-radius: var(--brLight);
        cursor: pointer;
        position: relative;
        user-select: none;
    }
`

const UserInfo = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [isVisible, setIsVisible] = useState(false)

    const userInfoRef = useRef<HTMLDivElement>(null)
    useOnClickOutside(userInfoRef, () => setIsVisible(false))

    const handleVisible = () => {
        setIsVisible((prev) => !prev)
    }

    return !!user ? (
        <UserInfoWrapper ref={userInfoRef}>
            <div className="user-info-plate" onClick={handleVisible}>
                <Avatar avatar={user?.avatar} width="30px" height="30px" marginRight={'10px'} />
                <Title size={5} align="left">
                    {getShortName(`${user.surname} ${user.name} ${user.patronymic}`)}
                </Title>
                <FiChevronDown />
            </div>
            <ContextMenu isVisible={isVisible}>
                <HeaderContextMenu />
            </ContextMenu>
        </UserInfoWrapper>
    ) : null
}

export default UserInfo
