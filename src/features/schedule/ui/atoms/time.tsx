import { ITimeIntervalColor, TimeIntervalColor, TimeIntervals } from '@api/model'
import React from 'react'
import styled from 'styled-components'

const TimeWrapper = styled.span<{
    isCurrent: boolean
    color2: string
    darkColor: string
    transparent: string
}>`
    padding: 3px 10px;
    height: 21px;
    display: flex;
    align-items: center;
    background: var(--search);
    background: ${({ isCurrent, darkColor, color2 }) => (isCurrent ? darkColor : color2)};
    border-radius: 100px;
    box-shadow: ${({ transparent }) => `0 0 30px ${transparent}`};
    color: #fff;
    white-space: nowrap;
`

interface Props {
    timeInterval: TimeIntervals
    isCurrent: boolean
    differentTimeZone?: boolean
}

const Time = ({ timeInterval, isCurrent, differentTimeZone = false }: Props) => {
    return (
        <TimeWrapper
            isCurrent={isCurrent}
            color2={TimeIntervalColor[timeInterval as keyof ITimeIntervalColor].lighter}
            darkColor={TimeIntervalColor[timeInterval as keyof ITimeIntervalColor].dark}
            transparent={TimeIntervalColor[timeInterval as keyof ITimeIntervalColor].transparent}
        >
            {timeInterval} {differentTimeZone && 'МСК'}
        </TimeWrapper>
    )
}

export default Time
