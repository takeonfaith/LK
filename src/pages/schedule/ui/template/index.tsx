/* eslint-disable @typescript-eslint/no-unused-vars */
import { IWeekEventSchedule } from '@shared/api/model'
import { DayCalendar } from '@shared/ui/calendar'
import WeekCalendar from '@shared/ui/calendar/ui/week'
import Flex from '@shared/ui/flex'
import React, { useState } from 'react'
import Slider from 'widgets/slider'

type Props = {
    events: IWeekEventSchedule
    view: number
    showDates: boolean
}

export const Template = ({ events, view, showDates }: Props) => {
    const views = [
        <DayCalendar events={events} interval={[9, 22]} key="day" showDates={showDates} />,
        <WeekCalendar events={events} interval={[9, 22]} key="week" showDates={showDates} />,
    ]

    return <>{views[view]}</>
}
