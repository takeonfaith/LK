import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { useEffect, useState } from 'react'
import { SCALE_VALUES } from '../consts'

export const useCalendarScale = () => {
    const { currentDevice } = useCurrentDevice()

    const [scale, setScale] = useState(SCALE_VALUES[currentDevice as keyof typeof SCALE_VALUES])

    useEffect(() => {
        setScale(SCALE_VALUES[currentDevice as keyof typeof SCALE_VALUES])
    }, [currentDevice])

    return scale
}
