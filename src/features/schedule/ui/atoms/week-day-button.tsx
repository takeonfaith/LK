import { ILessons, ITimeIntervalColor, TimeIntervalColor } from '@api/model'
import { scheduleModel } from '@entities/schedule'
import { Title } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'
import Sleep from '../../../../shared/images/sleep.gif'

const WeekDayButtonWrapper = styled.button<{
    isCurrent: boolean
    isChosen: boolean
}>`
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    row-gap: 6px;
    cursor: pointer;
    outline: none;
    transition: 0.2s;
    min-width: 100px;
    height: 54px;
    user-select: none;
    transform: scale(${({ isCurrent }) => (isCurrent ? '1' : '0.9')});
    background: var(--mild-theme);
    color: ${({ isCurrent }) => (isCurrent ? 'var(--blue)' : 'var(--text)')};
    scroll-snap-align: ${({ isChosen }) => (isChosen ? 'center' : 'none')};

    h4 {
        opacity: ${({ isChosen }) => (isChosen ? 1 : 0.5)};
        transition: 0.2s transform;
        transform: translateY(${({ isChosen }) => (isChosen ? '-5px' : '0px')});
    }

    .marker-circles {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .marker-circle {
            width: 8px;
            height: 8px;
            margin: 0 3px;
            border-radius: 100%;
        }

        img {
            width: 20px;
            height: 20px;
        }
    }

    &::before {
        content: '';
        position: absolute;
        display: block;
        transition: 0.2s;
        width: ${({ isChosen }) => (isChosen ? '20px' : '0px')};
        height: 4px;
        border-radius: 10px;
        background: ${({ isChosen }) => (isChosen ? 'var(--reallyBlue)' : '#4f4f4f')};
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
    }

    @media (max-width: 1000px) {
        font-size: 0.7em;
        transform: scale(1);
        width: calc(100% / 6);
        max-width: calc(100% / 6);
        min-width: 54px;

        .marker-circles {
            .marker-circle {
                width: 6px;
                height: 6px;
                margin: 0 2px;
                border-radius: 100%;
            }

            img {
                width: 15px;
                height: 15px;
            }
        }
    }
`

type Props = ILessons & {
    weekDay: string
    isCurrent: boolean
    isChosen: boolean
    index: number
    onClick: (index: number) => void
}

const WeekDayButton = ({ weekDay, lessons, isCurrent, isChosen, index, onClick }: Props) => {
    const {
        data: { currentModule },
    } = scheduleModel.selectors.useSchedule()

    return !!lessons ? (
        <WeekDayButtonWrapper isCurrent={isCurrent} isChosen={isChosen} onClick={() => onClick(index)}>
            <Title size={4}>{weekDay}</Title>
            <span className="marker-circles">
                {currentModule !== '1' &&
                    lessons.map((lesson, index) => {
                        if (TimeIntervalColor[lesson.timeInterval as keyof ITimeIntervalColor]) {
                            return (
                                <span
                                    key={index}
                                    className="marker-circle"
                                    style={{
                                        background:
                                            TimeIntervalColor[lesson.timeInterval as keyof ITimeIntervalColor].main,
                                    }}
                                />
                            )
                        }
                    })}
                {!lessons.length && <img src={Sleep} alt="спим" />}
            </span>
        </WeekDayButtonWrapper>
    ) : null
}

export default WeekDayButton
