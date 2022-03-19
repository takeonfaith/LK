import { FiSettings } from 'react-icons/fi'

import SettingsPage from '../../../../features/settings'
import { Button } from '@ui/button'
import React from 'react'
import { useModal } from 'widgets/modal/lib'

const SettingsButton = () => {
    const { open } = useModal()

    return (
        <Button
            text="Настройки"
            icon={<FiSettings />}
            onClick={() => open(<SettingsPage />)}
            width="100%"
            align="left"
            background="var(--schedule)"
        />
    )
}

export default SettingsButton
