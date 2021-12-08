import React, { memo } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { userModel } from '../../../../entities/user'
import { Button } from '../../../../shared/ui/atoms'

const Account = () => {
    const logout = userModel.events.logout
    return (
        <>
            <Button icon={<FiLogOut />} onClick={logout} text="Выйти из аккаунта" />
        </>
    )
}

export default memo(Account)
