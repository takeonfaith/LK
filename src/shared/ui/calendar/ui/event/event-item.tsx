import { NextSubject } from '@features/schedule/ui'
import { TimeIndicator } from '@features/schedule/ui/subject/time-indicator'
import calcTimeLeft from '@shared/lib/dates/calc-time-left'
import { TimeType, getMinutesFromStringTime } from '@shared/lib/dates/get-minutes-from-string-time'
import { getMinutesFromDate } from '@shared/lib/dates/get-time-from-date'
import getShortString from '@shared/lib/get-short-string'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import useTheme from '@shared/lib/hooks/use-theme'
import React, { useLayoutEffect, useRef } from 'react'
import { HiOutlineCalendar, HiOutlineExternalLink, HiOutlineLogin, HiOutlineUserCircle } from 'react-icons/hi'
import DotSeparatedWords from '../../../dot-separated-words'
import Flex from '../../../flex'
import EventBackground from '../../calendars/day/ui/event-background'
import IconText from '../../calendars/day/ui/icon-text'
import { getTimeInterval } from '../../lib/get-time-interval'
import { DayCalendarEvent } from '../../types'
import { EventFront, EventItemStyled, EventTitle, MobileIcon } from './styles'
import { UIProps } from './types'

const getStartTimeShiftInMinutes = (startTime: string) => {
    // E.g 12:20 -> 740
    const [hour, minute] = startTime.split(':')
    return +hour * 60 + +minute
}

type Props = DayCalendarEvent & UIProps & { isNextEvent?: boolean }

const EventItem = (props: Props) => {
    const {
        title,
        duration,
        icon,
        startTime,
        place,
        people,
        shift,
        color,
        scale,
        onClick,
        link,
        isCurrent,
        otherIsCurrent,
        rooms,
        dateInterval,
        leftShift,
        quantity,
        nameInOneRow = true,
        isNextEvent = false,
        listView = false,
        shortInfo = false,
    } = props
    const { theme } = useTheme()
    const { isMobile } = useCurrentDevice()
    const startTimeShift = getStartTimeShiftInMinutes(startTime)
    const textColor = theme === 'light' ? color.dark3 : color.light3
    const background = theme === 'light' ? color.transparent1 : color.transparent2
    const handleClick = () => onClick(props)
    const hideSomeInfo = (isMobile || quantity > 1) && shortInfo
    const extremeSmallSize = isMobile && quantity >= 2 && shortInfo
    const shortNames = people?.map((n) => {
        const splitted = n.split(' ')
        const result = `${splitted[0] ?? ''} ${splitted[1]?.[0] ?? ''}.${splitted[2]?.[0] ?? ''}.`

        return result
    })

    const ref = useRef<HTMLDivElement>(null)

    const isCurrentEvent =
        getMinutesFromStringTime(startTime as TimeType) <= getMinutesFromDate(new Date()) &&
        getMinutesFromDate(new Date()) <= getMinutesFromStringTime(startTime as TimeType) + duration

    useLayoutEffect(() => {
        if (isCurrentEvent && ref.current) {
            ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }, [isCurrentEvent, isNextEvent, ref])

    return (
        <EventItemStyled
            ref={isCurrentEvent || isNextEvent ? ref : undefined}
            textColor={textColor}
            listView={listView}
            leftShift={100 * leftShift}
            quantity={100 / quantity}
            duration={duration}
            startDayShift={shift}
            startTimeShift={startTimeShift}
            scale={scale}
            onClick={handleClick}
            isCurrent={isCurrent}
            otherIsCurrent={otherIsCurrent}
            shortInfo={shortInfo}
        >
            <MobileIcon>{icon}</MobileIcon>
            {!listView && <EventBackground icon={icon} background={background} />}
            <Flex className="event-body" gap="0px" ai="flex-start">
                <EventFront scale={scale} d="column" ai="flex-start" shortInfo={shortInfo}>
                    <Flex d="column" gap="2px">
                        {!shortInfo && (
                            <Flex gap="16px">
                                <TimeIndicator
                                    timeInterval={getTimeInterval(startTime, duration)}
                                    color={color}
                                    isCurrentEvent={isCurrentEvent}
                                />
                                <NextSubject
                                    timeLeft={calcTimeLeft(startTime, 'minutes')}
                                    isNext={isNextEvent}
                                    color={color}
                                    isCurrentEvent={isCurrentEvent}
                                />
                                {!!rooms?.length && (
                                    <IconText
                                        shortInfo={shortInfo}
                                        icon={<HiOutlineLogin />}
                                        text={<DotSeparatedWords words={rooms} />}
                                    />
                                )}
                                {!!link && (
                                    <a href={link} target="_blank" rel="noreferrer">
                                        <IconText shortInfo={shortInfo} icon={<HiOutlineExternalLink />} text={place} />
                                    </a>
                                )}
                            </Flex>
                        )}
                        <EventTitle listView={listView} nameInOneRow={nameInOneRow} scale={scale} shortInfo={shortInfo}>
                            {!extremeSmallSize && getShortString(title, shortInfo ? (hideSomeInfo ? 43 : 35) : 300)}
                        </EventTitle>
                    </Flex>

                    {!!people.length && !hideSomeInfo && (
                        <IconText
                            shortInfo={shortInfo}
                            text={<DotSeparatedWords words={shortInfo ? [shortNames[0]] : shortNames} />}
                            icon={<HiOutlineUserCircle />}
                        />
                    )}

                    {!!rooms?.length && shortInfo && !hideSomeInfo && (
                        <IconText
                            shortInfo={shortInfo}
                            icon={<HiOutlineLogin />}
                            text={<DotSeparatedWords words={rooms} />}
                        />
                    )}
                    {!!link && shortInfo && !hideSomeInfo && (
                        <a href={link} target="_blank" rel="noreferrer">
                            <IconText shortInfo={shortInfo} icon={<HiOutlineExternalLink />} text={place} />
                        </a>
                    )}

                    {!!dateInterval && !hideSomeInfo && (
                        <Flex gap="5px" d="column" ai="flex-start">
                            <IconText shortInfo={shortInfo} icon={<HiOutlineCalendar />} text={dateInterval} />
                        </Flex>
                    )}
                </EventFront>
            </Flex>
        </EventItemStyled>
    )
}

export default EventItem
