/* eslint-disable @typescript-eslint/no-unused-vars */
import { Colors, TIME_IN_MS } from '@shared/consts'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

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
}

export const CurrentTimeLine = ({ shift, scale }: Props) => {
    const getCurrentTime = () => {
        return new Date().getHours() * 60 + new Date().getMinutes()
    }
    const [currentTime, setCurrentTime] = useState(getCurrentTime())
    const intervalRef = useRef<any>(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentTime(getCurrentTime())
        }, TIME_IN_MS.minute)

        return () => clearInterval(intervalRef.current)
    }, [])

    return <CurrentTimeLineStyled currentTime={(currentTime - shift) * scale} />
}
