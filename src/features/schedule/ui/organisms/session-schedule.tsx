import { ISessionSchedule } from '@api/model'
import { scheduleModel } from '@entities/schedule'
import getSessionStats from '@features/schedule/lib/get-session-stats'
import useResize from '@utils/hooks/use-resize'
import localizeDate from '@utils/localize-date'
import React, { memo, useEffect } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import styled from 'styled-components'
import { DaySchedule } from '..'
import DaysTillExam from '../molecules/days-till-exam'

const ScheduleWrapper = styled(ScrollContainer)<{ isFull: boolean }>`
    display: flex;
    column-gap: 10px;
    overflow-x: auto;
    width: 100%;
    transition: 0.2s;
    padding: ${({ isFull }) => (isFull ? '0px' : '0px calc(50% - 200px)')};
    scroll-snap-type: y proximity;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        height: 0;
    }

    @media (max-width: 1000px) {
        scroll-snap-type: x mandatory;
    }
`

interface Props {
    weekSchedule: ISessionSchedule | null
    view: string
    wrapperRef?: React.RefObject<HTMLDivElement>
}

const SessionSchedule = ({ weekSchedule, view, wrapperRef }: Props) => {
    const {
        data: { schedule, currentDay },
    } = scheduleModel.selectors.useSchedule()
    const realCurrentDay = !!schedule && !!schedule['0'] ? -1 : currentDay
    const { width } = useResize()

    useEffect(() => {
        setTimeout(() => {
            if (wrapperRef?.current && view === 'big') {
                wrapperRef.current.scrollLeft = realCurrentDay * 400 - 360
            }
        }, 200)
    }, [view])

    const handleScroll = () => {
        if (wrapperRef?.current) {
            if (width <= 1000) {
                scheduleModel.events.changeCurrentChosenDay({
                    day: Math.floor((wrapperRef.current.scrollLeft * 1.1) / width) + 1,
                })
            }
        }
    }

    return (
        weekSchedule && (
            <ScheduleWrapper isFull={view === 'full'} innerRef={wrapperRef} onScroll={handleScroll}>
                {Object.keys(weekSchedule).map((day, index) => {
                    return (
                        <DaySchedule
                            key={index}
                            isCurrent={localizeDate(new Date(), 'weird') === day}
                            weekDay={localizeDate(day, 'short')}
                            lessons={weekSchedule[day as keyof ISessionSchedule].lessons}
                            view={view}
                            topInfo={<DaysTillExam day={day} />}
                        />
                    )
                })}
            </ScheduleWrapper>
        )
    )
}

export default memo(SessionSchedule)
