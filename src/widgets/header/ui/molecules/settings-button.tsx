import { FiSettings } from 'react-icons/fi'

import { Button } from '@ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import { SETTINGS_ROUTE } from '@app/routes/general-routes'
import { contextMenuModel } from '@entities/context-menu'

const SettingsButton = () => {
    return (
        <Link to={SETTINGS_ROUTE}>
            <Button
                text="Настройки"
                icon={<FiSettings />}
                onClick={() => contextMenuModel.events.close()}
                width="100%"
                align="left"
                background="var(--schedule)"
            />
        </Link>
    )
}

export default SettingsButton
