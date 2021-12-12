import { FiSettings } from 'react-icons/fi'

import SettingsPage from '../../../settings'
import Button from '@ui/atoms/button'
import { useModal } from '../../../modal'
import React from 'react'

const SettingsButton = () => {
    const { toggle } = useModal(<SettingsPage />)

    return <Button text="Настройки" icon={<FiSettings />} onClick={toggle} />
}

export default SettingsButton
