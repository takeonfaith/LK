import React from 'react'
import { SwitchToggleWrapper } from '../atoms'

interface ISwitchToggle {
    id: string
    key: string
    isToggled: boolean
    setIsToggled: () => void
}

const SwitchToggle = ({ id, isToggled, setIsToggled }: ISwitchToggle) => {
    return (
        <SwitchToggleWrapper>
            <input type="checkbox" name={id} id={id} className="checkbox" checked={isToggled} onChange={setIsToggled} />
            <label className="toggle-body" htmlFor={id}>
                <span className="toggle-circle" />
            </label>
        </SwitchToggleWrapper>
    )
}

export default SwitchToggle
