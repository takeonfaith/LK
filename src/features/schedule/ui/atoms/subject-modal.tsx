import { ISubject } from '@api/model'
import { SCHEDULE_ROUTE } from '@app/routes/general-routes'
import { Button, Divider, Title } from '@ui/atoms'
import calcTimeLeft from '@utils/calc-time-left'
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { useModal, User } from 'widgets'
import { Rooms, SubjectPlaceBlock } from '..'
import { NextSubject, Time } from '../atoms'
import Groups from './groups'
import ListOfGroups from './list-of-groups'

const SubjectModalWrapper = styled.div`
    @media (min-width: 1001px) {
        width: 550px;
    }

    height: 100%;
    overflow-y: auto;

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

type Props = ISubject & { isCurrent: boolean; isNext?: boolean }

const SubjectModal = (props: Props) => {
    const { timeInterval, name, place, teachers, dateInterval, link, rooms, groups, isNext = false } = props
    const { open, close } = useModal()
    const groupsArray = groups?.split(', ') ?? []
    const history = useHistory()
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
            <Groups groups={groups} isCurrent={false} color={'var(--schedule)'} />
            <span className="date-interval">{dateInterval}</span>
            <Title size={3} align="left">
                {name}
            </Title>
            <div className="time-and-next">
                <Time timeInterval={timeInterval} isCurrent={false} />
                <NextSubject timeLeft={calcTimeLeft(timeInterval)} isNext={isNext} />
                <Rooms rooms={rooms} inModal />
            </div>
            <SubjectPlaceBlock place={place} link={link} name={name} />
            <Divider margin="20px auto" />

            {!!teachers[0].length && (
                <>
                    <Title size={4} align="left" bottomGap>
                        Преподаватели
                    </Title>

                    <div className="teachers">
                        {teachers.map((teacher) => {
                            return <User type="staff" name={teacher} key={teacher} />
                        })}
                    </div>
                </>
            )}

            {groups && (
                <>
                    <Divider margin="20px auto" />
                    <Button
                        width="100%"
                        text={`Посмотреть расписание ${groupsArray.length === 1 ? groupsArray[0] : 'групп'}`}
                        onClick={handleCheckGroups}
                    />
                </>
            )}
        </SubjectModalWrapper>
    )
}

export default SubjectModal
