import { TIME_IN_MS } from '@shared/constants'
import getTimeFromMinutes from '@shared/lib/dates/get-time-from-minutes'
import React, { useEffect, useRef, useState } from 'react'
import { getCurrentTime } from '../lib/get-time-in-minutes'
import { CurrentTime, CurrentTimeLineStyled } from './styles'

type Props = {
    isVisible?: boolean
    shift: number
    scale: number
    interval: [number, number]
    showTime?: boolean
}

export const CurrentTimeLine = ({ isVisible = true, shift, scale, interval, showTime = true }: Props) => {
    const [currentTime, setCurrentTime] = useState(getCurrentTime(new Date(), interval[0] * 60, interval[1] * 60))
    const intervalRef = useRef<any>(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentTime(getCurrentTime(new Date(), interval[0] * 60, interval[1] * 60))
        }, TIME_IN_MS.minute)

        return () => clearInterval(intervalRef.current)
    }, [isVisible])

    return (
        <CurrentTimeLineStyled currentTime={(currentTime - shift) * scale}>
            {showTime && <CurrentTime>{getTimeFromMinutes(currentTime)}</CurrentTime>}
        </CurrentTimeLineStyled>
    )
}
