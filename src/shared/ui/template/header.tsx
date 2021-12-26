import React from 'react'
import MenuButton from '@features/header/ui/molecules/menu-button'
import SettingsButton from '@features/header/ui/molecules/settings-button'
import useCurrentPage from '@utils/hooks/use-current-page'
import useResize from '@utils/hooks/use-resize'
import HeaderWrapper from '../atoms/header-wrapper'
import { Button } from '@ui/atoms'
import { FiLogOut } from 'react-icons/fi'
import { confirmModel } from '@entities/confirm'
import { userModel } from '@entities/user'

const Header = () => {
    const { width } = useResize()
    const { title } = useCurrentPage()
    const logout = userModel.events.logout

    return (
        <HeaderWrapper>
            <div className="header-button-and-title">
                {width < 1000 && <MenuButton />}
                <h3>{title}</h3>
            </div>
            <div className="buttons">
                <SettingsButton />
                <Button
                    icon={<FiLogOut />}
                    onClick={() =>
                        confirmModel.events.evokeConfirm({
                            message: 'Вы точно хотите выйти из аккаунта?',
                            onConfirm: logout,
                        })
                    }
                    text="Выйти"
                    shrinkTextInMobile
                />
            </div>
        </HeaderWrapper>
    )
}

export default React.memo(Header)
