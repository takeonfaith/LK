import { Colors } from '@shared/consts'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const CurrentTimeLineStyled = styled.div<{ currentTime: number }>`
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
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
}

export const CurrentTimeLine = ({ shift }: Props) => {
    const [currentTime, setCurrentTime] = useState(new Date().getHours() * 60 + new Date().getMinutes())
    const intervalRef = useRef<any>(null)
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentTime(new Date().getHours() * 60 + new Date().getMinutes())
        }, 60000)

        return () => clearInterval(intervalRef.current)
    }, [])

    return <CurrentTimeLineStyled currentTime={currentTime - shift + 20} />
}
