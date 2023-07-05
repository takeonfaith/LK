/* eslint-disable @typescript-eslint/no-unused-vars */
import get2DigitDumber from '@shared/lib/get-2-digit-number'
import React from 'react'
import { HiOutlineUsers } from 'react-icons/hi'
import styled from 'styled-components'
import DotSeparatedWords from '../dot-separated-words'
import Flex from '../flex'
import Subtext from '../subtext'
import { DayCalendarEvent } from './types'
import Avatar from '@features/home/ui/molecules/avatar'
import { FiClock } from 'react-icons/fi'
import { Colors } from '@shared/consts'

const EventItemStyled = styled.div<{
    duration: number
    startDayShift: number
    startTimeShift: number
    background: string
    scale: number
}>`
    width: 100%;
    height: ${({ duration, scale }) => `${(duration + 3) * scale}px`};
    background: ${({ background }) => background};
    border-radius: 5px;
    padding: 12px;
    display: flex;
    position: relative;
    overflow: hidden;
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: ${({ startTimeShift, startDayShift, scale }) =>
        `${startTimeShift - startDayShift + ((startTimeShift - startDayShift) / (60 * scale)) * 3}px`};

    &:hover {
        filter: brightness(0.95);
    }
`

const IconSection = styled.div`
    width: 40px;
    height: 100%;

    svg {
        width: 22px;
        height: 22px;
    }
`

const EventTitle = styled.span`
    font-weight: 500;
    font-size: 0.95rem;
    padding-top: 2px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`

const Icons = styled.div`
    position: absolute;
    right: 0;
    width: 70%;
    top: 0;
    height: 100%;
    z-index: 0;

    & > div {
        top: 50%;
        left: 50%;
        position: inherit;
    }

    & > div:nth-child(1) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.04;
        svg {
            width: 170px;
            height: 170px;
        }
    }
    & > div:nth-child(2) {
        opacity: 0.03;
        transform: translate(100px, -90px);
        svg {
            width: 100px;
            height: 100px;
        }
    }

    & > div:nth-child(3) {
        opacity: 0.02;
        transform: translate(-175px, 0px);
        svg {
            width: 70px;
            height: 70px;
        }
    }

    & > div:nth-child(4) {
        opacity: 0.01;
        transform: translate(90px, 10px);
        svg {
            width: 50px;
            height: 50px;
        }
    }
`

const SmallIcon = styled.div`
    opacity: 0.6;
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 14px;
        height: 14px;
    }
`

const TimeWrapper = styled.div`
    padding: 0px 6px;
    border-radius: 3px;
    background: ${Colors.grey.transparent2};
    white-space: nowrap;
    width: fit-content;
`

const getEndTime = (startTime: string, duration: number) => {
    const [hour, minute] = startTime.split(':')
    const endTimeMinutes = +hour * 60 + +minute + duration

    return `${get2DigitDumber(Math.floor(endTimeMinutes / 60))}:${get2DigitDumber(endTimeMinutes % 60)}`
}

const getStartTimeShift = (startTime: string) => {
    const [hour, minute] = startTime.split(':')
    return +hour * 60 + +minute
}

type Props = DayCalendarEvent & {
    shift: number
    scale: number
}

const EventItem = (props: Props) => {
    const { title, duration, icon, startTime, place, placeIcon, people, shift, color, scale } = props
    const endTime = getEndTime(startTime, duration)
    const startTimeShift = getStartTimeShift(startTime)
    return (
        <EventItemStyled
            duration={duration}
            startDayShift={shift}
            startTimeShift={startTimeShift}
            background={color}
            scale={scale}
        >
            <Flex gap="0px" ai="flex-start">
                <IconSection>{icon}</IconSection>
                <Flex d="column" ai="flex-start" gap="8px">
                    <Flex gap="16px" jc="space-between">
                        <EventTitle>{title}</EventTitle>
                    </Flex>
                    <Flex gap="5px" d="column" ai="flex-start">
                        <Flex gap="8px" w="fit-content">
                            <SmallIcon>{placeIcon}</SmallIcon>
                            <Subtext fontSize="0.85rem">{place}</Subtext>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Icons>
                <div>{icon}</div>
                <div>{icon}</div>
                <div>{icon}</div>
                <div>{icon}</div>
            </Icons>
        </EventItemStyled>
    )
}

export default EventItem
