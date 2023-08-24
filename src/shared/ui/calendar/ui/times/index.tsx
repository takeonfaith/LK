import { SCREEN_IPHONE_XR } from '@shared/consts'
import get2DigitDumber from '@shared/lib/get-2-digit-number'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import styled from 'styled-components'

const TimeWrapper = styled(Flex)<{ scale: number; timesLen: number }>`
    position: absolute;
    left: 0;
    z-index: 0;
    height: ${({ scale, timesLen }) => `${timesLen * scale * 60}px`};
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
    background: var(--leftside-bar);
    height: 1px;
`

const SubtextStyled = styled(Subtext)`
    font-size: 0.9rem;

    @media (max-width: ${SCREEN_IPHONE_XR}) {
        font-size: 0.65rem;
    }
`

const TIMES = Array(24)
    .fill(0)
    .map((_, i) => `${get2DigitDumber(i)}:00`)

type Props = {
    interval: [number, number]
    scale: number
}

const Times = ({ interval, scale }: Props) => {
    const times = TIMES.slice(interval[0], interval[1] + 1)

    return (
        <TimeWrapper
            timesLen={times.length}
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
