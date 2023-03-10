import SettingsFields from '@pages/settings/settings-fields'
import ToggleItem from '@shared/ui/toggle-item'
import React, { useEffect, useState } from 'react'
import { FieldProps } from '../../model'

const ToggleField = ({ title, action, value, subfields }: FieldProps) => {
    const [toggled, setToggled] = useState(value as boolean)
    const handleToggle = (state: boolean) => {
        action?.(toggled)
        setToggled(state)
    }
    useEffect(() => {
        setToggled(value as boolean)
    }, [value])

    return (
        <>
            <ToggleItem title={title} state={toggled} action={handleToggle} />
            {subfields && toggled && <SettingsFields fields={subfields} asChild />}
        </>
    )
}

export default ToggleField
