import getShortString from '@shared/lib/get-short-string'
import useTheme from '@shared/lib/hooks/use-theme'
import React from 'react'
import { HiOutlineCalendar, HiOutlineExternalLink, HiOutlineLogin, HiOutlineUserCircle } from 'react-icons/hi'
import DotSeparatedWords from '../../../dot-separated-words'
import Flex from '../../../flex'
import { DayCalendarEvent } from '../../types'
import EventBackground from '../day/ui/event-background'
import IconText from '../day/ui/icon-text'
import { EventFront, EventItemStyled, EventTitle, MobileIcon } from './styles'
import { UIProps } from './types'
import { TimeIndicator } from '@features/schedule/ui/subject/time-indicator'
import { getTimeInterval } from '../../lib/get-time-interval'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'

const getStartTimeShiftInMinutes = (startTime: string) => {
    // E.g 12:20 -> 740
    const [hour, minute] = startTime.split(':')
    return +hour * 60 + +minute
}

type Props = DayCalendarEvent & UIProps

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

    return (
        <EventItemStyled
            leftShift={100 * leftShift}
            quantity={100 / quantity}
            duration={duration}
            startDayShift={shift}
            startTimeShift={startTimeShift}
            scale={scale}
            onClick={handleClick}
            color={textColor}
            isCurrent={isCurrent}
            otherIsCurrent={otherIsCurrent}
            shortInfo={shortInfo}
        >
            <MobileIcon>{icon}</MobileIcon>
            <EventBackground icon={icon} background={background} />
            <Flex className="event-body" gap="0px" ai="flex-start">
                {/* {!shortInfo && <IconSection scale={scale}>{icon}</IconSection>} */}
                <EventFront scale={scale} d="column" ai="flex-start" shortInfo={shortInfo}>
                    <Flex d="column" gap="2px">
                        {!shortInfo && (
                            <Flex gap="16px">
                                <TimeIndicator timeInterval={getTimeInterval(startTime, duration)} color={color} />
                                {!!rooms?.length && (
                                    <IconText
                                        shortInfo={shortInfo}
                                        icon={<HiOutlineLogin />}
                                        text={<DotSeparatedWords words={rooms} />}
                                    />
                                )}
                                {!!link && (
                                    <Flex gap="5px" d="column" ai="flex-start">
                                        <IconText shortInfo={shortInfo} icon={<HiOutlineExternalLink />} text={place} />
                                    </Flex>
                                )}
                            </Flex>
                        )}
                        <EventTitle scale={scale} shortInfo={shortInfo}>
                            {!extremeSmallSize && getShortString(title, shortInfo ? 50 : 300)}
                        </EventTitle>
                    </Flex>

                    {!!people.length && !hideSomeInfo && (
                        <IconText
                            shortInfo={shortInfo}
                            text={<DotSeparatedWords words={shortInfo ? [shortNames[0]] : shortNames} />}
                            icon={<HiOutlineUserCircle />}
                        />
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
