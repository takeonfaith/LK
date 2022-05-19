import { userModel } from '@entities/user'
import createFullName from '@features/home/lib/create-full-name'
import Avatar from '@features/home/ui/molecules/avatar'
import { ContextMenu } from '@ui/atoms'
import useOnClickOutside from '@utils/hooks/use-on-click-outside'
import React, { useRef, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import styled from 'styled-components'
import { SkeletonLoading, HeaderContextMenu } from '../molecules/'

const UserInfoWrapper = styled.div`
    position: relative;
    z-index: 10;

    & > .user-info-plate {
        display: flex;
        align-items: center;
        color: var(--text);
        background: transparent;
        /* box-shadow: 0 0 2px #0000004e; */
        padding: 4px;
        border-radius: var(--brLight);
        cursor: pointer;
        position: relative;
        user-select: none;

        &:hover {
            background: var(--almostTransparent);
        }
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
        <UserInfoWrapper ref={userInfoRef} tabIndex={1}>
            <div className="user-info-plate" onClick={handleVisible}>
                <Avatar
                    name={createFullName({ name: user.name, patronymic: user.patronymic, surname: user.surname })}
                    avatar={user?.avatar}
                    width="32px"
                    height="32px"
                    marginRight={'5px'}
                />
                <FiChevronDown />
            </div>
            <ContextMenu isVisible={isVisible}>
                <HeaderContextMenu />
            </ContextMenu>
        </UserInfoWrapper>
    ) : (
        <SkeletonLoading />
    )
}

export default UserInfo
