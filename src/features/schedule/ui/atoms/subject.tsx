import { ISubject, ITimeIntervalColor, TimeIntervalColor } from '@api/model'
import calcTimeLeft from '@features/schedule/lib/calc-time-left'
import React from 'react'
import styled from 'styled-components'
import NextSubject from './next-subject'

const SubjectWrapper = styled.div<{
    isCurrent: boolean
    color: string
    color2: string
    darkColor: string
    transparent: string
    fixedHeight: boolean
}>`
    width: 100%;
    background: ${({ isCurrent, color }) =>
        isCurrent ? `linear-gradient(45deg, ${color}, ${color})` : 'var(--schedule)'};
    color: ${({ isCurrent }) => (isCurrent ? '#fff' : 'var(--text)')};
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;
    min-height: ${({ fixedHeight }) => (fixedHeight ? '144.2px' : 'auto')};
    height: fit-content;

    .time-and-place {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 0.7em;
        height: 21px;
        font-weight: bold;

        /* display: flex; */

        .time {
            padding: 3px 10px;
            height: 21px;
            display: flex;
            align-items: center;
            background: var(--search);
            background: ${({ isCurrent, darkColor, color2 }) => (isCurrent ? darkColor : color2)};
            border-radius: 100px;
            box-shadow: ${({ transparent }) => `0 0 30px ${transparent}`};
            color: #fff;
            white-space: nowrap;
        }

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
    }

    .date-interval {
        font-size: 0.7em;
        opacity: 0.6;
    }
`

type Props = ISubject & { index: number; isCurrent: boolean; fixedHeight?: boolean; isNext?: boolean }

const Subject = ({
    timeInterval,
    name,
    place,
    teachers,
    dateInterval,
    isCurrent,
    link,
    isNext = false,
    fixedHeight = false,
}: Props) => {
    return (
        <SubjectWrapper
            isCurrent={isCurrent}
            color={TimeIntervalColor[timeInterval as keyof ITimeIntervalColor].darker}
            color2={TimeIntervalColor[timeInterval as keyof ITimeIntervalColor].lighter}
            darkColor={TimeIntervalColor[timeInterval as keyof ITimeIntervalColor].dark}
            transparent={TimeIntervalColor[timeInterval as keyof ITimeIntervalColor].transparent}
            fixedHeight={fixedHeight}
        >
            <div className="time-and-place">
                <span className="time">{timeInterval}</span>
                {isNext && <NextSubject timeLeft={calcTimeLeft(timeInterval)} />}
                {!link ? (
                    <span className="place"> {place}</span>
                ) : (
                    <a href={link} className="place" target="_blank" rel="noreferrer">
                        {place}
                    </a>
                )}
            </div>
            <h3>{name}</h3>
            <p className="teachers">
                {teachers.map((teacher: string) => {
                    return teacher + ' '
                })}
            </p>
            <p className="date-interval">{dateInterval}</p>
        </SubjectWrapper>
    )
}

export default Subject
