import { FiSettings } from 'react-icons/fi'

import SettingsPage from '../../../../features/settings'
import Button from '@ui/atoms/button'
import React from 'react'
import { useModal } from 'widgets/modal/lib'

const SettingsButton = () => {
    const { toggle } = useModal(<SettingsPage />)

    return (
        <Button
            text="Настройки"
            icon={<FiSettings />}
            onClick={toggle}
            width="100%"
            align="left"
            background="var(--schedule)"
        />
    )
}

export default SettingsButton
