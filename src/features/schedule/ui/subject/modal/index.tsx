import { ISubject } from '@api/model'
import GroupModal from '@features/groups-list/group-modal'
import { IColorPalette } from '@shared/constants'
import IconText from '@shared/ui/calendar/calendars/day/ui/icon-text'
import DotSeparatedWords from '@shared/ui/dot-separated-words'
import Flex from '@shared/ui/flex'
import { Button, Divider, Title } from '@ui/atoms'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import {
    HiOutlineCalendar,
    HiOutlineExternalLink,
    HiOutlineLogin,
    HiOutlineOfficeBuilding,
    HiOutlineUserGroup,
} from 'react-icons/hi'
import styled from 'styled-components'
import { User, useModal } from 'widgets'
import { NextSubject, SubjectPlaceBlock } from '../../atoms'
import ListOfGroups from '../../atoms/list-of-groups'
import { SubjectIconAndBackground } from '../subject-icon-and-background'
import { TimeIndicator } from '../time-indicator'
import { getSubjectName } from '@features/schedule/lib/get-subject-name'
import calcTimeLeft from '@shared/lib/dates/calc-time-left'

const SubjectModalWrapper = styled.div`
    position: relative;
    height: 100%;
    max-width: 400px;

    @media (min-width: 1001px) {
        min-width: 320px;
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

const ModalContentWrapper = styled(Flex)<{ noPadding: boolean }>`
    padding: ${({ noPadding }) => (noPadding ? '24px 0 0 0' : '24px')};
    hyphens: auto;
    height: calc(100% - 154px);
`

type Props = ISubject & {
    isCurrentEvent: boolean
    color: IColorPalette
    noPadding?: boolean
    isNextEvent: boolean
}

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
        isNextEvent,
        isCurrentEvent,
        noPadding = false,
    } = props

    const groupsArray = groups?.split(',') ?? []
    const { open } = useModal()

    const handleCheckGroups = () => {
        if (groupsArray.length === 1) {
            open(<GroupModal group={groupsArray[0]} />)
        } else {
            open(<ListOfGroups groups={groupsArray} />, 'Группы')
        }
    }

    const handleShowOnMap = () => {
        open(<SubjectPlaceBlock place={place} link={link} name={name} />)
    }

    const normalizedName = getSubjectName(name)

    return (
        <SubjectModalWrapper>
            <SubjectIconAndBackground subjectName={name} color={color} noPadding={noPadding} />
            <ModalContentWrapper noPadding={noPadding} d="column" gap="20px" ai="flex-start">
                <Flex jc="space-between" ai="flex-start" d="column" gap="6px">
                    <Flex gap="8px">
                        <TimeIndicator isCurrentEvent={isCurrentEvent} color={color} timeInterval={timeInterval} />
                        <NextSubject
                            timeLeft={calcTimeLeft(timeInterval.split(' - ')[0], 'minutes')}
                            isNext={isNextEvent}
                            color={color}
                            isCurrentEvent={isCurrentEvent}
                        />
                    </Flex>
                    <Title size={3} align="left" width="fit-content">
                        {normalizedName.name}
                    </Title>
                </Flex>
                <Divider margin="0" width="100%" />
                <IconText
                    icon={<HiOutlineCalendar />}
                    text={<DotSeparatedWords words={[weekday ?? '', dateInterval]} />}
                />
                {(link?.length || normalizedName.link) && (
                    <a href={link ?? normalizedName.link} target="_blank" rel="noreferrer">
                        <IconText icon={<HiOutlineExternalLink />} text={link ? place : 'Ссылка'} />
                    </a>
                )}
                {!link?.length && <IconText icon={<HiOutlineOfficeBuilding />} text={place} />}
                {!!rooms.length && <IconText icon={<HiOutlineLogin />} text={<DotSeparatedWords words={rooms} />} />}
                {!!groupsArray.length && (
                    <IconText
                        onClick={handleCheckGroups}
                        icon={<HiOutlineUserGroup />}
                        text={<DotSeparatedWords words={groupsArray} />}
                        rightIcon={<FiChevronRight />}
                    />
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
                {!link && <Button text="Посмотреть на карте" width="100%" onClick={handleShowOnMap} />}
            </ModalContentWrapper>
        </SubjectModalWrapper>
    )
}

export default SubjectModal
