/* eslint-disable @typescript-eslint/no-unused-vars */
import { Colors, TIME_IN_MS } from '@shared/consts'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { getCurrentTime } from '../lib/get-time-in-minutes'

const CurrentTimeLineStyled = styled.div<{ currentTime: number }>`
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 2px;
    z-index: -2;
    top: ${({ currentTime }) => `${currentTime}px`};

    &::before {
        display: block;
        content: '';
        min-width: 10px;
        height: 10px;
        border-radius: 12px;
        background: ${Colors.red.main};
    }

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: ${Colors.red.main};
    }
`

type Props = {
    shift: number
    scale: number
    interval: [number, number]
}

export const CurrentTimeLine = ({ shift, scale, interval }: Props) => {
    const [currentTime, setCurrentTime] = useState(getCurrentTime(new Date(), interval[0] * 60, interval[1] * 60))
    const intervalRef = useRef<any>(null)
    const timelineRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        timelineRef.current?.scrollIntoView({ block: 'nearest' })

        intervalRef.current = setInterval(() => {
            setCurrentTime(getCurrentTime(new Date(), interval[0] * 60, interval[1] * 60))
        }, TIME_IN_MS.minute)

        return () => clearInterval(intervalRef.current)
    }, [])

    return <CurrentTimeLineStyled currentTime={(currentTime - shift) * scale} ref={timelineRef} />
}
