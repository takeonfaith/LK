import { IWeekSchedule } from '@api/model'
import { IWeekDays, WeekDays } from '@consts'
import { scheduleModel } from '@entities/schedule'
import displayTopInfo from '@features/schedule/lib/display-top-info'
import useResize from '@utils/hooks/use-resize'
import React, { memo, useEffect } from 'react'
import styled from 'styled-components'
import { DaySchedule } from '../molecules'
import ScrollContainer from 'react-indiana-drag-scroll'
import { Error } from '@ui/atoms'
import Thinking from '../../../../shared/images/thinking-emoji.gif'

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
    weekSchedule: IWeekSchedule | null
    view: string
    wrapperRef?: React.RefObject<HTMLDivElement>
}

const WeekSchedule = ({ weekSchedule, view, wrapperRef }: Props) => {
    const {
        data: { currentDay },
    } = scheduleModel.selectors.useSchedule()
    const { width } = useResize()

    useEffect(() => {
        setTimeout(() => {
            if (wrapperRef?.current && (view === 'big' || width < 1000)) {
                wrapperRef.current.scrollLeft = currentDay * 400 - 360
            }
        }, 200)
    }, [view])

    const handleScroll = () => {
        if (wrapperRef?.current) {
            if (width <= 1000) {
                scheduleModel.events.changeCurrentChosenDay({
                    day: Math.floor((wrapperRef.current.scrollLeft * 1.2) / width) + 1,
                })
            }
        }
    }

    return weekSchedule ? (
        <ScheduleWrapper isFull={view === 'full'} innerRef={wrapperRef} onScroll={handleScroll}>
            {Object.keys(weekSchedule).map((day, index) => (
                <DaySchedule
                    key={index}
                    isCurrent={currentDay === index + 1}
                    weekDay={WeekDays[day as keyof IWeekDays].full}
                    lessons={weekSchedule[day as keyof IWeekDays].lessons}
                    view={view}
                    topInfo={displayTopInfo(weekSchedule, day as keyof IWeekDays)}
                />
            ))}
        </ScheduleWrapper>
    ) : (
        <Error text={'Пока нет расписания'} image={Thinking} />
    )
}

export default memo(WeekSchedule)
