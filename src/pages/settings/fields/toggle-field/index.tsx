import SettingsFields from '@pages/settings/settings-fields'
import ToggleItem from '@shared/ui/toggle-item'
import React, { useEffect, useState } from 'react'
import { FieldProps } from '../../model'

const ToggleField = ({ title, action, value, subfields, icon, settingsName, disabled }: FieldProps) => {
    const [toggled, setToggled] = useState(value as boolean)
    const handleToggle = (state: boolean) => {
        action?.(state)
        setToggled(state)
    }
    useEffect(() => {
        setToggled(value as boolean)
    }, [value])

    return (
        <>
            <ToggleItem disabled={disabled} title={title} state={toggled} action={handleToggle} icon={icon} />
            {subfields && toggled && <SettingsFields settingsName={settingsName} fields={subfields} asChild />}
        </>
    )
}

export default ToggleField
