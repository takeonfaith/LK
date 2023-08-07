import { SETTINGS_ROUTE } from '@app/routes/general-routes'
import { confirmModel } from '@entities/confirm'
import { contextMenuModel } from '@entities/context-menu'
import { lkNotificationModel } from '@entities/lk-notifications'
import { userModel } from '@entities/user'
import { NotificationsModal } from '@features/user-info/notification-bell'
import ThemeToggle from '@features/theme-toggle'
import { OLD_LK_URL } from '@shared/constants'
import { Divider } from '@shared/ui/atoms'
import { Button } from '@shared/ui/button'
import NewVersionMessage from '@shared/ui/new-version-message'
import Notification from '@ui/notification'
import React from 'react'
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
            <NotificationButtonWrapper>
                <Button
                    onClick={handleOpenNotificationModal}
                    icon={<FiBell />}
                    text="Уведомления"
                    width="100%"
                    background="var(--schedule)"
                    align="left"
                />
                <Notification visible={notifications.length > 0} top="50%" right="0px" pulsing shadow>
                    {notifications.length}
                </Notification>
            </NotificationButtonWrapper>
            <Link to={SETTINGS_ROUTE}>
                <Button
                    text="Настройки"
                    background="var(--schedule)"
                    icon={<FiSettings />}
                    width="100%"
                    align="left"
                    onClick={handleClose}
                />
            </Link>
            <a href={`${OLD_LK_URL}/index.php`}>
                <Button
                    text="Старый дизайн"
                    icon={<FiArrowLeftCircle />}
                    width="100%"
                    background="var(--schedule)"
                    align="left"
                />
            </a>
            <Divider />
            <Button
                align="left"
                icon={<FiLogOut />}
                onClick={logout}
                text="Выйти"
                width="100%"
                background="var(--schedule)"
            />
            <Divider />
            <Button
                align="left"
                icon={<NewVersionMessage />}
                onClick={handleWhatsNew}
                text="Что нового"
                width="100%"
                background="var(--schedule)"
            />
        </>
    )
}

export default UserContextMenu
