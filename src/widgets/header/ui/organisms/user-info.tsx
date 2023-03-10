import { contextMenuModel } from '@entities/context-menu'
import { userModel } from '@entities/user'
import createFullName from '@features/home/lib/create-full-name'
import Avatar from '@features/home/ui/molecules/avatar'
import React, { useRef } from 'react'
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

    const userInfoRef = useRef<HTMLDivElement>(null)

    const handleVisible = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        contextMenuModel.events.open({
            e,
            content: <HeaderContextMenu />,
            height: 200,
        })
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
        </UserInfoWrapper>
    ) : (
        <SkeletonLoading />
    )
}

export default UserInfo
