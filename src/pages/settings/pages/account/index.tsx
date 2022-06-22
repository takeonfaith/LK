import { Colors } from '@consts'
import { confirmModel } from '@entities/confirm'
import { userModel } from '@entities/user'
import Avatar from '@features/home/ui/molecules/avatar'
import { Button } from '@ui/atoms'
import React from 'react'
import { FiLogOut } from 'react-icons/fi'

const Account = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const logout = userModel.events.logout

    if (!user) return null

    return (
        <>
            <Avatar name={user?.fullName} avatar={user?.avatar} />
            <Button
                icon={<FiLogOut />}
                onClick={() =>
                    confirmModel.events.evokeConfirm({
                        message: 'Вы точно хотите выйти из аккаунта?',
                        onConfirm: logout,
                    })
                }
                background="transparent"
                textColor={Colors.red.main}
                text="Выйти из аккаунта"
            />
        </>
    )
}

export default Account
