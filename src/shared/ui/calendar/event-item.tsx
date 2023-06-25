import get2DigitDumber from '@shared/lib/get-2-digit-number'
import React from 'react'
import { HiOutlineUsers } from 'react-icons/hi'
import styled from 'styled-components'
import DotSeparatedWords from '../dot-separated-words'
import Flex from '../flex'
import Subtext from '../subtext'
import { DayCalendarEvent } from './types'

const EventItemStyled = styled.div<{
    duration: number
    startDayShift: number
    startTimeShift: number
    background: string
}>`
    width: 100%;
    height: ${({ duration }) => `${duration + 3}px`};
    background: ${({ background }) => background};
    border-radius: 5px;
    padding: 12px;
    display: flex;
    position: relative;
    overflow: hidden;
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: ${({ startTimeShift, startDayShift }) =>
        `${startTimeShift - startDayShift + ((startTimeShift - startDayShift) / 60) * 3}px`};

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
    svg {
        width: 14px;
        height: 14px;
    }
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
}

const EventItem = (props: Props) => {
    const { title, duration, icon, startTime, place, placeIcon, people, shift, color } = props
    const endTime = getEndTime(startTime, duration)
    const startTimeShift = getStartTimeShift(startTime)
    return (
        <EventItemStyled duration={duration} startDayShift={shift} startTimeShift={startTimeShift} background={color}>
            <Flex gap="0px" ai="flex-start">
                <IconSection>{icon}</IconSection>
                <Flex d="column" ai="flex-start" gap="6px">
                    <Flex gap="16px">
                        <EventTitle>{title}</EventTitle>
                        <Subtext fontSize="0.8rem">
                            {startTime} - {endTime}
                        </Subtext>
                    </Flex>
                    <Flex gap="2px" d="column">
                        <Flex gap="8px">
                            <SmallIcon>{placeIcon}</SmallIcon>
                            <Subtext fontSize="0.85rem">{place}</Subtext>
                        </Flex>
                        <Flex gap="8px">
                            <SmallIcon>
                                <HiOutlineUsers />
                            </SmallIcon>
                            <Subtext fontSize="0.85rem">
                                <DotSeparatedWords words={people} />
                            </Subtext>
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
