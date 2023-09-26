import { scheduleModel } from '@entities/schedule'
import { View } from '@entities/schedule/consts'
import { IWeekEventSchedule } from '@shared/api/model'
import { DayCalendar, MonthCalendar, WeekCalendar } from '@shared/ui/calendar'
import React, { useState } from 'react'

type Props = {
    events: IWeekEventSchedule
    view: number
    showDates: boolean
    startDate: Date
    endDate: Date
}

export const Template = ({ events, view, showDates, startDate, endDate }: Props) => {
    const [currentChosenDay, setCurrentChosenDay] = useState<number | undefined>(undefined)
    const handleDayClick = (dayIndex: number) => {
        scheduleModel.events.changeView(View.day)
        setCurrentChosenDay(dayIndex)
    }

    const views = [
        <DayCalendar
            currentChosenDay={currentChosenDay}
            events={events}
            interval={[9, 22]}
            key="day"
            showDates={showDates}
        />,
        <WeekCalendar
            events={events}
            interval={[9, 22]}
            key="week"
            showDates={showDates}
            onDayClick={handleDayClick}
        />,
        <MonthCalendar
            key={'month'}
            events={events}
            startDate={startDate}
            endDate={endDate}
            onDayClick={handleDayClick}
        />,
    ]

    return <>{views[view]}</>
}
