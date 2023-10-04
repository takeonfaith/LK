import { MEDIA_QUERIES } from '@shared/constants'
import get2DigitDumber from '@shared/lib/get-2-digit-number'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import styled from 'styled-components'

const TimeWrapper = styled(Flex)<{ scale: number; timesLen: number }>`
    position: absolute;
    left: 0;
    z-index: 0;
    height: ${({ scale, timesLen }) => `${timesLen * scale * 60 + 20}px`};
`

const TimeBlockWrapper = styled.div`
    width: 100%;
    pointer-events: none;
    position: relative;
`
const TimeLine = styled.div`
    position: absolute;
    width: calc(100% - var(--time-width));
    left: var(--time-width);
    top: 50%;
    transform: translateY(-50%);
    background: var(--theme-4);
    height: 1px;
`

const SubtextStyled = styled(Subtext)`
    font-size: 0.82rem;
    opacity: 0.5;

    ${MEDIA_QUERIES.isMobile} {
        font-size: 0.65rem;
    }
`

const TIMES = Array(24)
    .fill(0)
    .map((_, i) => `${get2DigitDumber(i)}:00`)

type Props = {
    interval: [number, number]
    scale: number
    shortTimes?: boolean
}

const Times = ({ interval, scale, shortTimes = false }: Props) => {
    const times = shortTimes
        ? Array(24)
              .fill(0)
              .map((_, i) => `${i}`)
              .slice(interval[0], interval[1] + 1)
        : TIMES.slice(interval[0], interval[1] + 1)

    return (
        <TimeWrapper
            timesLen={times.length - 1}
            scale={scale}
            d="column"
            w="100%"
            h="100%"
            jc="space-between"
            ai="flex-end"
        >
            {times.map((t) => (
                <TimeBlockWrapper key={t}>
                    <SubtextStyled>{t}</SubtextStyled>
                    <TimeLine />
                </TimeBlockWrapper>
            ))}
        </TimeWrapper>
    )
}

export default Times
