/* eslint-disable @typescript-eslint/no-unused-vars */
import get2DigitDumber from '@shared/lib/get-2-digit-number'
import React from 'react'
import Flex from '../flex'
import Subtext from '../subtext'
import styled from 'styled-components'
import { Colors } from '@shared/consts'
import EventItem from './event-item'
import { DayCalendarEvent } from './types'

const DayCalendarWrapper = styled.div<{ scale: number; timesLen: number }>`
    --time-width: 55px;
    padding-left: var(--time-width);
    position: relative;
    width: 100%;
    height: ${({ scale, timesLen }) => `${timesLen * scale * 60}px`};
`

const TimeWrapper = styled(Flex)`
    position: absolute;
    left: 0;
    z-index: 0;
`

const EventsWrapper = styled(Flex)`
    min-height: calc(100vh - var(--header-height) - 200px);
    z-index: 1;
    position: relative;
    margin-top: 10px;
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
    background: ${Colors.grey.transparent1};
    height: 1px;
`

const TIMES = Array(24)
    .fill(0)
    .map((_, i) => `${get2DigitDumber(i)}:00`)

type Props = {
    interval?: [number, number]
    events: DayCalendarEvent[]
}

export const DayCalendar = ({ interval = [0, 23], events }: Props) => {
    const times = TIMES.slice(interval[0], interval[1] + 1)
    const shift = interval[0] * 60
    const scale = 1
    return (
        <DayCalendarWrapper timesLen={times.length} scale={scale}>
            <TimeWrapper d="column" w="100%" h="100%" jc="space-between" ai="flex-end">
                {times.map((t) => (
                    <TimeBlockWrapper key={t}>
                        <Subtext fontSize="0.9rem">{t}</Subtext>
                        <TimeLine />
                    </TimeBlockWrapper>
                ))}
            </TimeWrapper>
            <Flex d="row" gap="2px">
                <EventsWrapper h="100%" d="column">
                    {events.map((event, i) => (
                        <EventItem {...event} shift={shift} key={event.title + i} />
                    ))}
                </EventsWrapper>
            </Flex>
        </DayCalendarWrapper>
    )
}
