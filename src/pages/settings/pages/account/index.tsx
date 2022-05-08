import React, { memo } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { userModel } from '@entities/user'
import { Button } from '@ui/atoms'
import { confirmModel } from '@entities/confirm'

const Account = () => {
    const logout = userModel.events.logout
    return (
        <>
            <Button
                icon={<FiLogOut />}
                onClick={() =>
                    confirmModel.events.evokeConfirm({
                        message: 'Вы точно хотите выйти из аккаунта?',
                        onConfirm: logout,
                    })
                }
                text="Выйти из аккаунта"
            />
        </>
    )
}

export default memo(Account)
