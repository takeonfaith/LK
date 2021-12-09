import React, { useState } from 'react'
import { GeneralType } from '../../../../shared/consts'
import { useSettings } from '../../../../shared/lib/contexts/settings-context'
import ToggleArea, { ToggleItem } from '../../../../shared/ui/organisms/toggle-area'

const General = () => {
    const { setting, change } = useSettings<GeneralType>('general')

    const [toggles, setToggles] = useState<ToggleItem[]>([
        {
            title: 'Push-уведомления',
            state: setting?.notifications ?? false,
            action: (state: boolean) => change({ notifications: state }),
        },
    ])

    return (
        <>
            <ToggleArea title={'Общие'} toggles={toggles} setToggles={setToggles} />
        </>
    )
}

export default General
