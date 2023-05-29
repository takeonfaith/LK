import { SETTINGS_ROUTE } from '@app/routes/general-routes'
import { confirmModel } from '@entities/confirm'
import { contextMenuModel } from '@entities/context-menu'
import { userModel } from '@entities/user'
import { OLD_LK_URL } from '@shared/constants/consts'
import { Divider, Message } from '@shared/ui/atoms'
import { Button } from '@shared/ui/button'
import React from 'react'
import { FiArrowLeftCircle, FiLogOut, FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useModal, WhatsNew } from 'widgets'

const UserContextMenu = () => {
    const { open } = useModal()

    const handleClose = () => contextMenuModel.events.close()

    // const handleOldLK = () => localStorage.setItem('useOldVersion', 'true')

    const logout = () => {
        confirmModel.events.evokeConfirm({
            message: 'Вы точно хотите выйти из аккаунта?',
            onConfirm: userModel.events.logout,
        })
        handleClose()
    }

    const handleWhatsNew = () => {
        contextMenuModel.events.close()
        open(<WhatsNew />)
    }

    return (
        <>
            {/* <AvailableAccounts padding="8px" size="small" />
            <Divider /> */}
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
                icon={<Message icon={null} type="info" title={'v2.1.0'} width="fit-content" />}
                onClick={handleWhatsNew}
                text="Что нового"
                width="100%"
                background="var(--schedule)"
            />
        </>
    )
}

export default UserContextMenu
