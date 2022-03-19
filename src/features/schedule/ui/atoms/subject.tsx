import { ISubject, ITimeIntervalColor, TimeIntervalColor } from '@api/model'
import calcTimeLeft from '@utils/calc-time-left'
import getShortString from '@utils/get-short-string'
import React from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { Place, SubjectModal, Time, NextSubject, Rooms, Groups } from '.'

const SubjectWrapper = styled.div<{
    isCurrent: boolean
    color: string
    color2: string
    darkColor: string
    transparent: string
    isFull: boolean
}>`
    width: 100%;
    background: ${({ isCurrent, color }) =>
        isCurrent ? `linear-gradient(45deg, ${color}, ${color})` : 'var(--schedule)'};
    color: ${({ isCurrent }) => (isCurrent ? '#fff' : 'var(--text)')};
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;
    min-height: ${({ isFull }) => (isFull ? 'fit-content' : '144.2px')};
    height: fit-content;
    cursor: pointer;

    .time-and-place {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 0.7em;
        height: 21px;
        font-weight: bold;
        column-gap: 3px;

        .place {
            color: var(--text);
            text-decoration: none;
            margin-left: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        a.place {
            color: ${({ isCurrent, color2 }) => (isCurrent ? color2 : 'var(--blue)')};
        }
    }

    h3 {
        margin: 10px 0;
        font-size: 0.9em;
        word-wrap: break-word;
    }

    .teachers {
        font-size: 0.8em;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .date-interval {
        font-size: 0.7em;
        opacity: 0.6;
    }
`

type Props = ISubject & { isCurrent: boolean; isNext?: boolean; view?: string }

const Subject = (props: Props) => {
    const {
        timeInterval,
        name,
        place,
        teachers,
        dateInterval,
        isCurrent,
        link,
        view,
        rooms,
        groups,
        isNext = false,
    } = props
    const { open } = useModal()

    return (
        <SubjectWrapper
            isCurrent={isCurrent}
            color={TimeIntervalColor[timeInterval as keyof ITimeIntervalColor].darker}
            color2={TimeIntervalColor[timeInterval as keyof ITimeIntervalColor].lighter}
            darkColor={TimeIntervalColor[timeInterval as keyof ITimeIntervalColor].dark}
            transparent={TimeIntervalColor[timeInterval as keyof ITimeIntervalColor].transparent}
            isFull={view === 'full'}
            onClick={() => open(<SubjectModal {...props} />)}
        >
            <div className="time-and-place">
                <Time
                    timeInterval={timeInterval}
                    isCurrent={isCurrent}
                    differentTimeZone={new Date().getTimezoneOffset() / 60 + 3 !== 0}
                />
                <NextSubject timeLeft={calcTimeLeft(timeInterval)} isNext={isNext} />
                {rooms.length ? <Rooms rooms={rooms} isCurrent={isCurrent} /> : <Place place={place} link={link} />}
            </div>
            <h3>{getShortString(name, 70)}</h3>
            <Groups groups={groups} isCurrent={isCurrent} />
            <p className="teachers">
                {teachers.map((teacher: string, index) => {
                    return (
                        <>
                            {teacher}
                            {index !== teachers.length - 1 && ', '}
                        </>
                    )
                })}
            </p>
            <p className="date-interval">{dateInterval}</p>
        </SubjectWrapper>
    )
}

export default Subject
