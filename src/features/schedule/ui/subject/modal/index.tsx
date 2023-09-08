/* eslint-disable @typescript-eslint/no-unused-vars */
import { ISubject } from '@api/model'
import { SCHEDULE_ROUTE } from '@app/routes/general-routes'
import { Button, Divider, Title } from '@ui/atoms'
import calcTimeLeft from '@utils/calc-time-left'
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { useModal, User } from 'widgets'
import { Rooms, SubjectPlaceBlock } from '../..'
import { NextSubject, Time } from '../../atoms'
import Groups from '../../atoms/groups'
import ListOfGroups from '../../atoms/list-of-groups'
import EventBackground from '@shared/ui/calendar/calendars/day/ui/event-background'
import { getSubjectIcon } from '@features/acad-performance/lib/get-subject-icon'
import { Colors, IColorPalette, WEEK_DAYS } from '@shared/consts'
import { Icon } from '@features/all-pages'
import { ContentWrapper } from 'widgets/content-layout/styled'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import useTheme from '@shared/lib/hooks/use-theme'
import IconText from '@shared/ui/calendar/calendars/day/ui/icon-text'
import { FiCalendar } from 'react-icons/fi'
import {
    HiOutlineCalendar,
    HiOutlineExternalLink,
    HiOutlineLogin,
    HiOutlineOfficeBuilding,
    HiOutlineUserGroup,
} from 'react-icons/hi'
import DotSeparatedWords from '@shared/ui/dot-separated-words'
import { TimeIndicator } from '../time-indicator'

const SubjectModalWrapper = styled.div`
    position: relative;
    height: 100%;
    max-width: 400px;

    @media (min-width: 1001px) {
        width: 100%;
    }

    .date-interval {
        opacity: 0.6;
        font-size: 0.7em;
        font-weight: 600;
    }

    .time-and-next {
        display: flex;
        align-items: center;
        font-size: 0.7em;
        font-weight: bold;
        margin: 10px 0 5px 0;
        column-gap: 3px;
    }

    .teachers {
        & > * + * {
            margin-top: 5px;
        }
    }

    @media (max-width: 1000px) {
        padding: 10px;
    }
`

const BackgroundWrapper = styled.div<{ textColor: string; background: string }>`
    width: 100%;
    height: 120px;
    position: relative;
    color: var(--text);
    margin-bottom: 30px;

    .icon {
        position: absolute;
        bottom: -30px;
        left: 16px;
        background: ${({ background }) => background};
        transition: 0s;

        svg {
            color: ${({ textColor }) => textColor};
        }
        border: 5px solid var(--form);
    }
`

const ModalContentWrapper = styled(Flex)`
    padding: 24px;
    hyphens: auto;
    overflow-y: auto;
    height: calc(100% - 154px);
`

const TimeSquare = styled.div`
    min-width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({ color }) => color};
`

type Props = ISubject & { isCurrent: boolean; isNext?: boolean; color: IColorPalette; noPadding?: boolean }

const SubjectModal = (props: Props) => {
    const {
        timeInterval,
        name,
        place,
        teachers,
        dateInterval,
        link,
        rooms,
        groups,
        color,
        weekday,
        isNext = false,
        noPadding = false,
    } = props
    const icon = getSubjectIcon(name)
    const { open, close } = useModal()
    const { theme } = useTheme()

    const groupsArray = groups?.split(', ') ?? []
    const history = useHistory()
    const textColor = theme === 'light' ? color.dark3 : color.light2
    const background = theme === 'light' ? color.light3 : color.dark3

    const handleCheckGroups = () => {
        if (groupsArray.length === 1) {
            history.push(`${SCHEDULE_ROUTE}/${groupsArray[0]}`)
            close()
        } else {
            open(<ListOfGroups groups={groupsArray} />)
        }
    }

    return (
        <SubjectModalWrapper>
            <BackgroundWrapper textColor={textColor} background={background}>
                <EventBackground icon={icon} background={background} />
                <Icon color={color.main} size={70} borderRadius="23px">
                    {icon}
                </Icon>
            </BackgroundWrapper>
            <ModalContentWrapper d="column" gap="20px" ai="flex-start">
                <Flex jc="space-between" ai="flex-start" d="column" gap="6px">
                    <TimeIndicator color={color} timeInterval={timeInterval} />
                    <Title size={3} align="left" width="fit-content">
                        {name}
                    </Title>
                </Flex>
                <Divider margin="0" width="100%" />
                <IconText
                    icon={<HiOutlineCalendar />}
                    text={<DotSeparatedWords words={[weekday ?? '', dateInterval]} />}
                />
                {link?.length && (
                    <a href={link} target="_blank" rel="noreferrer">
                        <IconText icon={<HiOutlineExternalLink />} text={place} />
                    </a>
                )}
                {!link?.length && <IconText icon={<HiOutlineOfficeBuilding />} text={place} />}
                {!!rooms.length && <IconText icon={<HiOutlineLogin />} text={<DotSeparatedWords words={rooms} />} />}
                {!!groupsArray.length && (
                    <IconText icon={<HiOutlineUserGroup />} text={<DotSeparatedWords words={groupsArray} />} />
                )}

                <Flex d="column" ai="flex-start">
                    {!!teachers[0].length && (
                        <>
                            <Title size={4} align="left" bottomGap>
                                Преподаватели
                            </Title>

                            {teachers.map((teacher) => {
                                return <User type="staff" name={teacher} key={teacher} />
                            })}
                        </>
                    )}
                </Flex>
                {!link && <Divider margin="0" width="100%" />}
                {!link && <Button text="Посмотреть на карте" width="100%" />}
            </ModalContentWrapper>
            {/* <Groups groups={groups} isCurrent={false} color={'var(--schedule)'} />
            <SubjectPlaceBlock place={place} link={link} name={name} />
            <span className="date-interval">{dateInterval}</span>
            
            <div className="time-and-next">
                <Time timeInterval={timeInterval} isCurrent={false} />
                <NextSubject timeLeft={calcTimeLeft(timeInterval)} isNext={isNext} />
                <Rooms rooms={rooms} inModal />
            </div>

            
            {groups && (
                <>
                    <Divider margin="20px auto" />
                    <Button
                        width="100%"
                        text={`Посмотреть расписание ${groupsArray.length === 1 ? groupsArray[0] : 'групп'}`}
                        onClick={handleCheckGroups}
                    />
                </>
            )} */}
        </SubjectModalWrapper>
    )
}

export default SubjectModal
