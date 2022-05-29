import { PROFILE_ROUTE } from '@app/routes/general-routes'
import { contextMenuModel } from '@entities/context-menu'
import { menuModel } from '@entities/menu'
import Avatar from '@features/home/ui/molecules/avatar'
import { Button } from '@ui/button'
import { SkeletonShape } from '@ui/skeleton-shape'
import { Title } from '@ui/title'
import React from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { UserBigModal } from './ui'

const UserBigWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: fit-content;
    border-radius: var(--brSemi);
    padding: 20px;
    transition: 0.2s;
    cursor: pointer;
    color: var(--text);
    position: relative;

    .more-button {
        top: 0;
        right: 0;
        position: absolute;
    }
    &:hover {
        background: var(--mild-theme);
        /* box-shadow: var(--very-mild-shadow); */
    }
`

interface Props {
    name: string
    avatar?: string
    loading?: boolean
    size?: string
    notifications?: number
    selected?: boolean
    changable?: boolean
}

const UserBig = ({ name, avatar, loading, size, notifications, selected, changable }: Props) => {
    if (loading)
        return (
            <SkeletonShape
                shape={'circle'}
                size={{
                    width: '40px',
                    height: '40px',
                }}
            />
        )

    return (
        <UserBigWrapper
            to={PROFILE_ROUTE}
            onClick={() => menuModel.events.changeOpen({ isOpen: false, currentPage: 'profile' })}
        >
            <Button
                icon={<FiMoreVertical />}
                className="more-button"
                background="transparent"
                onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    contextMenuModel.events.open({
                        e,
                        height: 143,
                        content: <UserBigModal />,
                    })
                }}
            />
            <Avatar
                notifications={notifications}
                width={size ?? '70px'}
                height={size ?? '70px'}
                avatar={avatar}
                name={name}
                marginRight="0"
                selected={selected}
                changable={changable}
            />
            <Title size={5}>{name}</Title>
        </UserBigWrapper>
    )
}

export default React.memo(UserBig)
