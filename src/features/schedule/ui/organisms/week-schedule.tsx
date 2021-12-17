import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { scheduleModel } from '@entities/schedule'
import { IWeekSchedule } from '@api/model'
import { IWeekDays, WeekDays } from '@consts'
import useResize from '@utils/hooks/use-resize'
import { DaySchedule } from '../molecules'

const ScheduleWrapper = styled.div<{ isFull: boolean }>`
    display: flex;
    column-gap: 10px;
    overflow-x: auto;
    width: 100%;
    transition: 0.2s;
    padding: ${({ isFull }) => (isFull ? '0px' : '0px calc(50% - 200px)')};
    scroll-snap-type: y proximity;
    scroll-behavior: smooth;
    /* scroll-padding-right: 400px; */

    &::-webkit-scrollbar {
        height: 0;
    }

    @media (max-width: 1000px) {
        scroll-snap-type: x mandatory;
    }
`

interface Props {
    weekSchedule: IWeekSchedule
    view: string
}

const WeekSchedule = ({ weekSchedule, view }: Props) => {
    const {
        data: { currentDay, currentChosenDay },
    } = scheduleModel.selectors.useSchedule()
    const wrapperRef = useRef<HTMLDivElement>(null)
    const { width } = useResize()

    useEffect(() => {
        if (wrapperRef?.current && view === 'big') wrapperRef.current.scrollLeft = currentDay * 400 - 350
    }, [view])

    useEffect(() => {
        if (wrapperRef?.current) {
            if (width < 1000) {
                wrapperRef.current.scrollLeft = (currentChosenDay * width * currentChosenDay) / 6
            } else {
                wrapperRef.current.scrollLeft = currentChosenDay * 400 - 350
            }
        }
    }, [currentChosenDay])

    return (
        <ScheduleWrapper isFull={view === 'full'} ref={wrapperRef}>
            {Object.keys(weekSchedule).map((day, index) => (
                <DaySchedule
                    key={index}
                    isCurrent={currentDay === index + 1}
                    weekDay={WeekDays[day as keyof IWeekDays].full}
                    lessons={weekSchedule[day as keyof IWeekDays].lessons}
                    view={view}
                    index={index + 1}
                />
            ))}
        </ScheduleWrapper>
    )
}

export default WeekSchedule
