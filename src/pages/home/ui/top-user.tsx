import { contextMenuModel } from '@entities/context-menu'
import { userModel } from '@entities/user'
import Avatar from '@features/home/ui/molecules/avatar'
import HomeTopSection from '@features/home/ui/organisms/home-top-section'
import UserContextMenu from '@features/user-context-menu'
import React from 'react'
import styled from 'styled-components'

const TopUserStyled = styled.div`
    padding: 4px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: var(--theme-mild-xxl);
    }
`

const TopUser = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()

    if (!user) return null

    const handleUserClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        e.stopPropagation()
        contextMenuModel.events.open({
            e,
            height: 143,
            content: <UserContextMenu />,
        })
    }

    return (
        <TopUserStyled>
            <HomeTopSection />
            <div onClick={handleUserClick}>
                <Avatar width="30px" height="30px" avatar={user.avatar} name={user.name} marginRight="0" />
            </div>
        </TopUserStyled>
    )
}

export default TopUser
