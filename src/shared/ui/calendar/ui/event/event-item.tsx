import { getSubjectName } from '@features/schedule/lib/get-subject-name'
import { NextSubject } from '@features/schedule/ui'
import { TimeIndicator } from '@features/schedule/ui/subject/time-indicator'
import calcTimeLeft from '@shared/lib/dates/calc-time-left'
import getShortString from '@shared/lib/get-short-string'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import useTheme from '@shared/lib/hooks/use-theme'
import React from 'react'
import {
    HiOutlineCalendar,
    HiOutlineExternalLink,
    HiOutlineLogin,
    HiOutlineUserCircle,
    HiOutlineUserGroup,
} from 'react-icons/hi'
import DotSeparatedWords from '../../../dot-separated-words'
import Flex from '../../../flex'
import IconText from '../../calendars/day/ui/icon-text'
import { getTimeInterval } from '../../lib/get-time-interval'
import { DayCalendarEvent } from '../../types'
import { getEventTopPosition } from './lib/get-event-top-position'
import { EventFront, EventItemStyled, EventTitle, MobileIcon } from './styles'
import { UIProps } from './types'

type Props = DayCalendarEvent & UIProps & { isNextEvent?: boolean; isCurrentEvent?: boolean }

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
        rooms,
        dateInterval,
        leftShift,
        quantity,
        groups,
        isCurrentEvent = false,
        nameInOneRow = true,
        isNextEvent = false,
        listView = false,
        shortInfo = false,
    } = props
    const { theme } = useTheme()
    const { isMobile } = useCurrentDevice()
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
    const top = getEventTopPosition(startTime, shift, scale)
    const normalizedTitle = getSubjectName(title)
    const eventTitle = !extremeSmallSize
        ? getShortString(normalizedTitle.name, shortInfo ? (hideSomeInfo ? 43 : 35) : nameInOneRow ? 300 : 64)
        : title.split(' ').map((el) => el[0].toUpperCase())
    const groupsArray = groups?.split(',') ?? []

    return (
        <EventItemStyled
            background={background}
            textColor={textColor}
            listView={listView}
            leftShift={100 * leftShift}
            quantity={100 / quantity}
            duration={duration}
            scale={scale}
            top={top}
            onClick={handleClick}
            shortInfo={shortInfo}
        >
            <MobileIcon>{icon}</MobileIcon>

            {/* {!listView && <EventBackground icon={icon} background={background} />} */}
            <Flex className="event-body" gap="0px" ai="flex-start">
                <EventFront scale={scale} d="column" ai="flex-start" shortInfo={shortInfo}>
                    <Flex d="column" gap="2px">
                        {!shortInfo && (
                            <Flex gap="8px">
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
                                        icon={isMobile && quantity > 1 ? undefined : <HiOutlineLogin />}
                                        text={<DotSeparatedWords words={rooms} />}
                                    />
                                )}
                                {(!!link || normalizedTitle.link) && (
                                    <a href={link ?? normalizedTitle.link} target="_blank" rel="noreferrer">
                                        <IconText
                                            shortInfo={shortInfo}
                                            icon={<HiOutlineExternalLink />}
                                            text={link ? place : 'Cсылка'}
                                        />
                                    </a>
                                )}
                                {!!groupsArray.length && (
                                    <IconText
                                        icon={<HiOutlineUserGroup />}
                                        text={<DotSeparatedWords words={groupsArray} />}
                                    />
                                )}
                            </Flex>
                        )}
                        <EventTitle listView={listView} nameInOneRow={nameInOneRow} scale={scale} shortInfo={shortInfo}>
                            {eventTitle}
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
                        <Flex gap="5px">
                            <IconText shortInfo={shortInfo} icon={<HiOutlineCalendar />} text={dateInterval} />
                        </Flex>
                    )}
                </EventFront>
            </Flex>
        </EventItemStyled>
    )
}

export default EventItem
