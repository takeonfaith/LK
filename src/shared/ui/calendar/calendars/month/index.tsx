import React from 'react'
import { WeekEvents } from '../../types'
import { WeekDays } from '../../ui/week-days'
import { getMonday } from '../../ui/week-days/lib/get-monday'
import { getSunday } from '../../ui/week-days/lib/get-sunday'
import { getDaysBetweenDates } from './lib/get-days-between-dates'
import { Cells, MonthCalendarWrapper } from './styles'
import CalendarCells from './ui/calendar-cells'

type Props = {
    events: WeekEvents
    startDate: Date
    endDate: Date
    onDayClick?: (dayIndex: number) => void
}

export const MonthCalendar = ({ events, startDate, endDate, onDayClick }: Props) => {
    const localStartDate = new Date(startDate)
    const localEndDate = new Date(endDate)

    const weekStart = getMonday(localStartDate)

    const lastCellsWeekEnd = localEndDate.getDay() !== 0 ? getSunday(localEndDate) : localEndDate

    const daysAmount = getDaysBetweenDates(localStartDate, localEndDate)

    return (
        <MonthCalendarWrapper>
            <WeekDays showColumns={false} events={null} onDayClick={onDayClick} />
            <Cells>
                <CalendarCells
                    daysAmount={getDaysBetweenDates(weekStart, localStartDate) - 1}
                    startDate={weekStart}
                    events={events}
                    disabled
                    addOneOnWeekends={false}
                />
                <CalendarCells
                    daysAmount={daysAmount}
                    startDate={localStartDate}
                    events={events}
                    addOneOnWeekends={true}
                />
                <CalendarCells
                    daysAmount={getDaysBetweenDates(localEndDate, lastCellsWeekEnd) - 1}
                    startDate={
                        new Date(localEndDate.getFullYear(), localEndDate.getMonth(), localEndDate.getDate() + 1)
                    }
                    events={events}
                    disabled
                    addOneOnWeekends={false}
                />
            </Cells>
        </MonthCalendarWrapper>
    )
}
