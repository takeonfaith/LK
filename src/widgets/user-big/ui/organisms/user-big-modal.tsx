import { SETTINGS_ROUTE } from '@app/routes/general-routes'
import { OLD_LK_URL } from '@consts'
import { confirmModel } from '@entities/confirm'
import { contextMenuModel } from '@entities/context-menu'
import { userModel } from '@entities/user'
import { LinkButton, Message } from '@ui/atoms'
import { Button } from '@ui/button'
import { Divider } from '@ui/divider'
import React from 'react'
import { FiArrowLeftCircle, FiLogOut, FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import AvailableAccounts from 'widgets/available-accounts'
import useModal from 'widgets/modal'
import WhatsNew from 'widgets/whats-new'

const UserBigModal = () => {
    const { open } = useModal()

    return (
        <>
            {/* <AvailableAccounts /> */}
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
            <Divider />
            <Button
                align="left"
                icon={<Message icon={null} type="info" title={'v2.0.0'} width="fit-content" />}
                onClick={() => {
                    contextMenuModel.events.close()
                    open(<WhatsNew />)
                }}
                text="Что нового"
                width="100%"
                background="var(--schedule)"
            />
        </>
    )
}

export default UserBigModal
