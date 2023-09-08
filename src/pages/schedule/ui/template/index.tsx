/* eslint-disable @typescript-eslint/no-unused-vars */
import { scheduleModel } from '@entities/schedule'
import { View } from '@entities/schedule/consts'
import { IWeekEventSchedule } from '@shared/api/model'
import { DayCalendar } from '@shared/ui/calendar'
import WeekCalendar from '@shared/ui/calendar/calendars/week'
import Flex from '@shared/ui/flex'
import React, { useState } from 'react'
import Slider from 'widgets/slider'

type Props = {
    events: IWeekEventSchedule
    view: number
    showDates: boolean
}

export const Template = ({ events, view, showDates }: Props) => {
    const [currentChosenDay, setCurrentChosenDay] = useState<number | undefined>(undefined)
    const handleDayClick = (dayIndex: number) => {
        // eslint-disable-next-line no-console
        console.log({ dayIndex })

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
    ]

    return <>{views[view]}</>
}
