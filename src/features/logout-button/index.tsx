import { confirmModel } from '@entities/confirm'
import { contextMenuModel } from '@entities/context-menu'
import { userModel } from '@entities/user'
import { Button } from '@shared/ui/button'
import React from 'react'
import { FiLogOut } from 'react-icons/fi'

const LogoutButton = () => {
    const handleClick = () => {
        confirmModel.events.evokeConfirm({
            message: 'Вы точно хотите выйти из аккаунта?',
            onConfirm: userModel.events.logout,
        })
        contextMenuModel.events.close()
    }

    return (
        <Button
            align="left"
            icon={<FiLogOut />}
            onClick={handleClick}
            text="Выйти"
            width="100%"
            background="var(--schedule)"
        />
    )
}

export default LogoutButton
