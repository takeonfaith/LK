/* eslint-disable @typescript-eslint/no-unused-vars */
import { Colors, MEDIA_QUERIES, TIME_IN_MS } from '@shared/consts'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { getCurrentTime } from '../lib/get-time-in-minutes'
import getTimeFromMinutes from '@shared/lib/get-time-from-minutes'

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

const CurrentTime = styled.div`
    color: ${Colors.red.main};
    font-weight: 500;
    background: var(--schedule);
    position: absolute;
    font-size: 0.9rem;
    width: var(--time-width);
    left: calc(var(--time-width) * -1);
    box-shadow: -26px 0 26px 26px var(--schedule);

    ${MEDIA_QUERIES.isMobile} {
        font-size: 0.7rem;
    }
`

type Props = {
    shift: number
    scale: number
    interval: [number, number]
    showTime?: boolean
}

export const CurrentTimeLine = ({ shift, scale, interval, showTime = true }: Props) => {
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

    return (
        <CurrentTimeLineStyled currentTime={(currentTime - shift) * scale} ref={timelineRef}>
            {showTime && <CurrentTime>{getTimeFromMinutes(currentTime)}</CurrentTime>}
        </CurrentTimeLineStyled>
    )
}
