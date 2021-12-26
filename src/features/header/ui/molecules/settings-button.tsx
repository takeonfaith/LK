import { FiSettings } from 'react-icons/fi'

import SettingsPage from '../../../settings'
import Button from '@ui/atoms/button'
import { useModal } from '../../../../widgets/modal'
import React from 'react'

const SettingsButton = () => {
    const { toggle } = useModal(<SettingsPage />)

    return <Button text="Настройки" icon={<FiSettings />} onClick={toggle} shrinkTextInMobile />
}

export default SettingsButton
