import React, { useState } from 'react'
import { GeneralType } from '@consts'
import { useSettings } from '@utils/contexts/settings-context'
import ToggleArea, { ToggleItem } from '@ui/organisms/toggle-area'

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
