import { IWeekDays, WeekDays } from '@consts'
import { scheduleModel } from '@entities/schedule'
import useResize from '@utils/hooks/use-resize'
import localizeDate from '@utils/localize-date'
import React, { memo, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { WeekDayButton } from '..'

const WeekDayButtonsListWrapper = styled.div<{ isFull: boolean }>`
    &::-webkit-scrollbar {
        display: none;
    }

    display: flex;
    align-items: center;
    column-gap: 0;
    transition: 0.2s;
    max-width: 600px;
    overflow-x: auto;
    overflow-y: hidden;
    height: ${({ isFull }) => (!isFull ? '60px' : '0px')};
    opacity: ${({ isFull }) => (!isFull ? '1' : '0')};
    visibility: ${({ isFull }) => (!isFull ? 'visible' : 'hidden')};
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    @media (max-width: 1000px) {
        position: absolute;
        bottom: 10px;
        left: 0;
        width: 100%;
        max-width: 100%;
        height: 50px;
        opacity: 1;
        visibility: visible;
        column-gap: 5px;
    }
`

interface Props {
    wrapperRef: React.RefObject<HTMLDivElement>
}

const WeekDayButtonsList = ({ wrapperRef }: Props) => {
    const {
        data: { schedule, currentModule, currentChosenDay, currentDay, view },
    } = scheduleModel.selectors.useSchedule()
    const { width } = useResize()
    const isFull = useMemo(() => (width > 1000 ? view === 'full' : true), [width, view])

    const handleClick = (index: number) => {
        if (wrapperRef?.current) {
            if (width <= 1000) {
                wrapperRef.current.scrollLeft = (index - 1) * width
            } else {
                scheduleModel.events.changeCurrentChosenDay({ day: index })
                wrapperRef.current.scrollLeft = index * 400 - 360
            }
        }
    }

    useEffect(() => {
        handleClick(currentChosenDay)
    }, [wrapperRef?.current])

    if (!(!!schedule && !!schedule[currentModule])) return null

    return (
        <WeekDayButtonsListWrapper isFull={isFull}>
            {currentModule !== '2'
                ? Object.keys(WeekDays).map((day, index) => {
                      return (
                          <WeekDayButton
                              key={day}
                              weekDay={WeekDays[day as keyof IWeekDays].short}
                              lessons={schedule[currentModule]?.[day as keyof IWeekDays]?.lessons}
                              isCurrent={currentDay === index + 1}
                              isChosen={currentChosenDay === index + 1}
                              index={index + 1}
                              onClick={handleClick}
                          />
                      )
                  })
                : !!schedule['2'] &&
                  Object.keys(schedule['2']).map((day, index) => {
                      return (
                          <WeekDayButton
                              key={day}
                              weekDay={localizeDate(day, 'short')}
                              lessons={schedule[currentModule]?.[day as keyof IWeekDays]?.lessons}
                              isCurrent={localizeDate(new Date(), 'weird') === day}
                              isChosen={currentChosenDay === index + 1}
                              index={index + 1}
                              onClick={handleClick}
                          />
                      )
                  })}
        </WeekDayButtonsListWrapper>
    )
}

export default memo(WeekDayButtonsList)
