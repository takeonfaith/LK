import React from 'react'
import { WeekEvents } from '../../types'
import { DateWrapper, DayWrapper, WeekDay, WeekDayTop, WeekDaysWrapper } from './styles'
import { IndicatorItem, SubjectsIndicator } from '../subjects-indicator'
import { getWeekNames } from './lib/get-week-names'
import { Colors } from '@shared/constants'
import Flex from '@shared/ui/flex'

type Props = {
    showDates?: boolean
    showColumns: boolean
    currentChosenDay?: number
    onDayClick?: (day: number) => void
    events: WeekEvents
}

export const WeekDays = ({ showDates, showColumns, currentChosenDay, onDayClick, events }: Props) => {
    const weekNames = getWeekNames()

    return (
        <WeekDaysWrapper jc="space-between">
            {Object.keys(weekNames).map((day, i) => {
                const date = weekNames[day as keyof typeof weekNames]
                const isCurrentChosenDay = i === currentChosenDay

                return (
                    <WeekDay
                        showDates={showDates}
                        key={day}
                        showColumns={showColumns}
                        onClick={onDayClick && (() => onDayClick?.(i))}
                    >
                        <WeekDayTop>
                            <DayWrapper
                                isCurrent={+date === new Date().getDate()}
                                isCurrentChosenDay={!showDates && isCurrentChosenDay}
                                showDates={showDates}
                            >
                                {day}
                            </DayWrapper>
                            {showDates && (
                                <DateWrapper
                                    isCurrentChosenDay={isCurrentChosenDay}
                                    isCurrent={+date === new Date().getDate()}
                                >
                                    {date}
                                </DateWrapper>
                            )}
                        </WeekDayTop>
                        {events && showDates && (
                            <SubjectsIndicator subjects={events[Object.keys(events)[i] as keyof typeof events]} />
                        )}
                        {events && !showDates && events[Object.keys(events)[i] as keyof typeof events].length > 0 && (
                            <Flex jc="center">
                                <IndicatorItem background={Colors.grey.main} />
                            </Flex>
                        )}
                    </WeekDay>
                )
            })}
        </WeekDaysWrapper>
    )
}
