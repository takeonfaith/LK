import getShortString from '@shared/lib/get-short-string'
import useTheme from '@shared/lib/hooks/use-theme'
import React from 'react'
import { HiOutlineExternalLink, HiOutlineLogin, HiOutlineUserCircle } from 'react-icons/hi'
import DotSeparatedWords from '../../../dot-separated-words'
import Flex from '../../../flex'
import { DayCalendarEvent } from '../../types'
import EventBackground from '../../day/ui/event-background'
import IconText from '../../day/ui/icon-text'
import { EventItemStyled, EventTitle, IconSection, MobileIcon } from './styles'
import { UIProps } from './types'

const getStartTimeShift = (startTime: string) => {
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
        listView,
        shortInfo = false,
    } = props
    const { theme } = useTheme()
    const startTimeShift = getStartTimeShift(startTime)
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
            listView={listView}
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
            {!listView && <EventBackground icon={icon} background={background} />}
            <Flex className="event-body" gap="0px" ai="flex-start">
                {!shortInfo && <IconSection>{icon}</IconSection>}
                <Flex d="column" ai="flex-start" gap={!shortInfo ? '8px' : '4px'}>
                    <EventTitle shortInfo={shortInfo}>{getShortString(title, shortInfo ? 27 : 100)}</EventTitle>
                    {!!link && (
                        <Flex gap="5px" d="column" ai="flex-start">
                            <IconText icon={<HiOutlineExternalLink />} text={place} />
                        </Flex>
                    )}
                    {!!rooms?.length && (
                        <IconText icon={<HiOutlineLogin />} text={<DotSeparatedWords words={rooms} />} />
                    )}

                    {!!people.length && (
                        <IconText
                            text={<DotSeparatedWords words={shortInfo ? [shortNames[0]] : shortNames} />}
                            icon={<HiOutlineUserCircle />}
                        />
                    )}
                </Flex>
            </Flex>
        </EventItemStyled>
    )
}

export default EventItem
