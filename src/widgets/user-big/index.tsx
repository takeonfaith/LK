import { PROFILE_ROUTE, SETTINGS_ROUTE } from '@app/routes/general-routes'
import { OLD_LK_URL } from '@consts'
import { confirmModel } from '@entities/confirm'
import { contextMenuModel } from '@entities/context-menu'
import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import Avatar from '@features/home/ui/molecules/avatar'
import { Divider, LinkButton } from '@ui/atoms'
import { Button } from '@ui/button'
import { SkeletonShape } from '@ui/skeleton-shape'
import { Title } from '@ui/title'
import React from 'react'
import { FiArrowLeftCircle, FiLogOut, FiMoreVertical, FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
}

const UserBig = ({ name, avatar, loading, size, notifications, selected }: Props) => {
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
                        content: (
                            <>
                                <Link to={SETTINGS_ROUTE}>
                                    <Button
                                        text="Настройки"
                                        background="var(--schedule)"
                                        icon={<FiSettings />}
                                        width="100%"
                                        align="left"
                                        onClick={() => contextMenuModel.events.close()}
                                    />
                                </Link>
                                <LinkButton
                                    text={'Cтарый дизайн'}
                                    onClick={() => {
                                        localStorage.setItem('useOldVersion', 'true')
                                    }}
                                    background="var(--schedule)"
                                    icon={<FiArrowLeftCircle />}
                                    width="100%"
                                    align="left"
                                    href={`${OLD_LK_URL}/index.php`}
                                />
                                <Divider />
                                <Button
                                    align="left"
                                    icon={<FiLogOut />}
                                    onClick={() => {
                                        confirmModel.events.evokeConfirm({
                                            message: 'Вы точно хотите выйти из аккаунта?',
                                            onConfirm: userModel.events.logout,
                                        })
                                        contextMenuModel.events.close()
                                    }}
                                    text="Выйти"
                                    width="100%"
                                    background="var(--schedule)"
                                />
                            </>
                        ),
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
            />
            <Title size={5}>{name}</Title>
        </UserBigWrapper>
    )
}

export default React.memo(UserBig)
