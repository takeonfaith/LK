import { OLD_LK_URL } from '@consts'
import { confirmModel } from '@entities/confirm'
import { userModel } from '@entities/user'
import createFullName from '@features/home/lib/create-full-name'
import Avatar from '@features/home/ui/molecules/avatar'
import SettingsPage from '@features/settings'
import { Button, LinkButton } from '@ui/atoms'
import { Divider } from '@ui/divider'
import ToggleArea, { ToggleItem } from '@ui/organisms/toggle-area'
import useTheme from '@utils/hooks/use-theme'
import React, { useEffect, useState } from 'react'
import { FiArrowLeftCircle, FiEdit2, FiGrid, FiLogOut } from 'react-icons/fi'
import styled from 'styled-components'
import { useModal, WhatsNew } from 'widgets'
import SettingsButton from './settings-button'

const HeaderContextMenuWrapper = styled.div`
    .user-info-plate {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: var(--theme);
        box-shadow: var(--schedule-shadow);
        border-radius: 5px;
        overflow: hidden;
        color: var(--text);

        .avatar-and-name {
            padding: 7px;
            display: flex;
            align-items: center;

            b {
                font-size: 0.8em;
                width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }

        & > .buttons {
            display: flex;
            align-items: center;

            button {
                background: var(--theme);
                border-radius: 0;
                width: 100%;

                &:hover {
                    background: var(--search);
                }
            }
        }
    }

    @media (max-width: 1000px) {
        .user-info-plate {
            padding: 10px;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`

const HeaderContextMenu = () => {
    const logout = userModel.events.logout
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { open } = useModal()

    const { theme, switchTheme } = useTheme()
    const [toggles, setToggles] = useState<ToggleItem[]>([
        {
            title: 'Темная тема',
            state: theme !== 'light',
            action: (state: boolean) => switchTheme(state),
        },
    ])

    useEffect(() => {
        setToggles([
            {
                title: 'Темная тема',
                state: theme !== 'light',
                action: (state: boolean) => switchTheme(state),
            },
        ])
    }, [theme])

    return !!user ? (
        <HeaderContextMenuWrapper>
            <div className="user-info-plate">
                <div className="avatar-and-name">
                    <Avatar avatar={user?.avatar} width="35px" height="35px" marginRight={'8px'} />
                    <b>{createFullName({ name: user.name, surname: user.surname, patronymic: user.patronymic })}</b>
                </div>

                <div className="buttons">
                    <Button
                        icon={<FiEdit2 />}
                        onClick={() => open(<SettingsPage currentPage={3} />)}
                        text="Изменить"
                        shrinkTextInMobile
                    />
                    {/* <Button icon={<FiCreditCard />} onClick={() => null} text="Оплатить" /> */}
                </div>
            </div>
            <ToggleArea title={''} toggles={toggles} setToggles={setToggles} />
            <SettingsButton />
            <Button
                text="Что нового"
                icon={<FiGrid />}
                onClick={() => open(<WhatsNew />)}
                width="100%"
                align="left"
                background="var(--schedule)"
            />
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
                onClick={() =>
                    confirmModel.events.evokeConfirm({
                        message: 'Вы точно хотите выйти из аккаунта?',
                        onConfirm: logout,
                    })
                }
                text="Выйти"
                width="100%"
                background="var(--schedule)"
            />
        </HeaderContextMenuWrapper>
    ) : null
}

export default HeaderContextMenu
