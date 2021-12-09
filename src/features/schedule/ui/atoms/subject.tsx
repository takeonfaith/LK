import React from 'react'
import styled from 'styled-components'
import { ISubject, ITimeIntervalColor, TimeIntervalColor } from '../../../../shared/api/model'

const SubjectWrapper = styled.div<{
    isCurrent: boolean
    color: string
    color2: string
    darkColor: string
    transparent: string
}>`
    width: 100%;
    background: ${({ isCurrent, color, color2 }) =>
        isCurrent ? `linear-gradient(45deg, ${color}, ${color2})` : 'var(--schedule)'};
    color: ${({ isCurrent }) => (isCurrent ? '#fff' : 'var(--text)')};
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;

    .time-and-place {
        font-size: 0.7em;
        /* display: flex; */

        .time {
            padding: 3px 10px;
            background: var(--search);
            background: ${({ isCurrent, darkColor, color2 }) => (isCurrent ? darkColor : color2)};
            border-radius: 100px;
            box-shadow: ${({ transparent }) => `0 0 30px ${transparent}`};
            color: #fff;
        }
    }

    h3 {
        margin-top: 15px;
        margin-bottom: 10px;
        font-size: 0.9em;
    }

    .teachers {
        font-size: 0.8em;
    }

    .date-interval {
        font-size: 0.7em;
        opacity: 0.6;
    }
`

type Props = ISubject & { index: number; isCurrent: boolean }

const Subject = ({ timeInterval, name, place, teachers, dateInterval, isCurrent }: Props) => {
    return (
        <SubjectWrapper
            isCurrent={isCurrent}
            color={TimeIntervalColor[timeInterval as keyof ITimeIntervalColor].darker}
            color2={TimeIntervalColor[timeInterval as keyof ITimeIntervalColor].lighter}
            darkColor={TimeIntervalColor[timeInterval as keyof ITimeIntervalColor].dark}
            transparent={TimeIntervalColor[timeInterval as keyof ITimeIntervalColor].transparent}
        >
            <h4 className="time-and-place">
                <span className="time">{timeInterval}</span>
                {/* {isCurrent && <NowPlate />} */}
                <span className="place"> {place}</span>
                {/* <span className="currentOrNext" >{isToday ? inTimeInterval(time, currentDay) ? "Сейчас" : isNextSubject(time, currentDay) ? "Следующая" : null : null}</span> */}
            </h4>
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
