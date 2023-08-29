import getShortString from '@shared/lib/get-short-string'
import useTheme from '@shared/lib/hooks/use-theme'
import React from 'react'
import { HiOutlineExternalLink, HiOutlineLogin, HiOutlineUserCircle } from 'react-icons/hi'
import DotSeparatedWords from '../../../dot-separated-words'
import Flex from '../../../flex'
import { DayCalendarEvent } from '../../types'
import EventBackground from '../day/ui/event-background'
import IconText from '../day/ui/icon-text'
import { EventFront, EventItemStyled, EventTitle, IconSection, MobileIcon } from './styles'
import { UIProps } from './types'

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
        leftShift,
        width,
        shortInfo = false,
    } = props
    const { theme } = useTheme()
    const startTimeShift = getStartTimeShiftInMinutes(startTime)
    const textColor = theme === 'light' ? color.dark3 : color.light3
    const background = theme === 'light' ? color.transparent1 : color.transparent2
    const handleClick = () => onClick(props)
    const shortNames = people?.map((n) => {
        const splitted = n.split(' ')
        const result = `${splitted[0] ?? ''} ${splitted[1]?.[0] ?? ''}.${splitted[2]?.[0] ?? ''}.`

        return result
    })

    return (
        <EventItemStyled
            leftShift={100 * leftShift}
            width={100 / width}
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
                {!shortInfo && <IconSection scale={scale}>{icon}</IconSection>}
                <EventFront scale={scale} d="column" ai="flex-start" shortInfo={shortInfo}>
                    <EventTitle scale={scale} shortInfo={shortInfo}>
                        {getShortString(title, shortInfo ? 27 : 100)}
                    </EventTitle>

                    {!!link && (
                        <Flex gap="5px" d="column" ai="flex-start">
                            <IconText
                                shortInfo={shortInfo}
                                scale={scale}
                                icon={<HiOutlineExternalLink />}
                                text={place}
                            />
                        </Flex>
                    )}
                    {!!rooms?.length && (
                        <IconText
                            shortInfo={shortInfo}
                            scale={scale}
                            icon={<HiOutlineLogin />}
                            text={<DotSeparatedWords words={rooms} />}
                        />
                    )}

                    {!!people.length && (
                        <IconText
                            shortInfo={shortInfo}
                            scale={scale}
                            text={<DotSeparatedWords words={shortInfo ? [shortNames[0]] : shortNames} />}
                            icon={<HiOutlineUserCircle />}
                        />
                    )}
                </EventFront>
            </Flex>
        </EventItemStyled>
    )
}

export default EventItem
