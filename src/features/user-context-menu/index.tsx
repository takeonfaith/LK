import { PROFILE_ROUTE, SETTINGS_ROUTE } from '@app/routes/general-routes'
import { confirmModel } from '@entities/confirm'
import { contextMenuModel } from '@entities/context-menu'
import { lkNotificationModel } from '@entities/lk-notifications'
import { userModel } from '@entities/user'
import ThemeToggle from '@features/theme-toggle'
import { NotificationsModal } from '@features/user-info/notification-bell'
import { OLD_LK_URL } from '@shared/constants'
import { Divider } from '@shared/ui/atoms'
import { Button } from '@shared/ui/button'
import NewVersionMessage from '@shared/ui/new-version-message'
import Notification from '@ui/notification'
import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { FiArrowLeftCircle, FiBell, FiLogOut, FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AvailableAccounts, WhatsNew, useModal } from 'widgets'

const NotificationButtonWrapper = styled.div`
    position: relative;
`

const UserContextMenu = () => {
    const { open } = useModal()
    const { notifications } = lkNotificationModel.selectors.useLkNotifications()

    const handleClose = () => contextMenuModel.events.close()

    const logout = () => {
        confirmModel.events.evokeConfirm({
            message: 'Вы точно хотите выйти из аккаунта?',
            onConfirm: userModel.events.logout,
        })
        handleClose()
    }

    const handleWhatsNew = () => {
        contextMenuModel.events.close()
        open(<WhatsNew />, 'Что нового')
    }

    const handleOpenNotificationModal = () => {
        open(<NotificationsModal />, 'Уведомления')
        contextMenuModel.events.close()
    }

    return (
        <>
            <AvailableAccounts padding="8px" size="small" />
            <Divider />
            <ThemeToggle type="h-button" />
            <Divider />
            <Link to={PROFILE_ROUTE}>
                <Button
                    text="Профиль"
                    background="var(--block)"
                    icon={<BiUserCircle />}
                    width="100%"
                    align="left"
                    onClick={handleClose}
                    padding="10px"
                />
            </Link>
            <NotificationButtonWrapper>
                <Button
                    onClick={handleOpenNotificationModal}
                    icon={<FiBell />}
                    text="Уведомления"
                    width="100%"
                    background="var(--block)"
                    align="left"
                    padding="10px"
                />
                <Notification visible={notifications.length > 0} top="50%" right="0px" pulsing shadow>
                    {notifications.length}
                </Notification>
            </NotificationButtonWrapper>
            <Link to={SETTINGS_ROUTE}>
                <Button
                    text="Настройки"
                    background="var(--block)"
                    icon={<FiSettings />}
                    width="100%"
                    align="left"
                    onClick={handleClose}
                    padding="10px"
                />
            </Link>
            <a href={`${OLD_LK_URL}/index.php`}>
                <Button
                    text="Старый дизайн"
                    icon={<FiArrowLeftCircle />}
                    width="100%"
                    background="var(--block)"
                    align="left"
                    padding="10px"
                />
            </a>
            <Divider />
            <Button
                align="left"
                icon={<FiLogOut />}
                onClick={logout}
                text="Выйти"
                width="100%"
                background="var(--block)"
                padding="10px"
            />
            <Divider />
            <Button
                align="left"
                icon={<NewVersionMessage />}
                onClick={handleWhatsNew}
                text="Что нового"
                width="100%"
                background="var(--block)"
                padding="10px"
            />
        </>
    )
}

export default UserContextMenu
