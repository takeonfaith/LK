import { TimeIntervals } from '@shared/api/model'
import { DayCalendarEvent } from '@shared/ui/calendar'
import { useCalendarGeneral } from '@shared/ui/calendar/hooks/use-calendar-general'
import React, { useEffect, useRef, useState } from 'react'
import { getCurrentDay } from '../lib/get-current-day'
import { getEndTime } from '../lib/get-end-time'
import { DayCalendarProps } from '../types'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'

type Props = DayCalendarProps

export const useCalendarDay = ({ interval = [0, 23], events: allEvents, showDates = true }: Props) => {
    const { isSmallDesktop } = useCurrentDevice()
    const { scale, shift, events, handleOpenModal } = useCalendarGeneral({ interval, events: allEvents })
    const [chosenEvent, setChosenEvent] = useState<DayCalendarEvent | null>(null)
    const [currentDay, setCurrentDay] = useState(getCurrentDay())
    const carouselRef = useRef<HTMLDivElement>(null)
    const timeInterval = chosenEvent
        ? (`${chosenEvent.startTime} - ${getEndTime(chosenEvent.startTime, chosenEvent.duration)}` as TimeIntervals)
        : ('9:00' as TimeIntervals)

    const onEventClick = (event: DayCalendarEvent) => {
        if (isSmallDesktop) handleOpenModal(event)
        else setChosenEvent(event)
    }

    const handleCarouselScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
        const pageIndex = Math.floor(e.currentTarget.scrollLeft / e.currentTarget.clientWidth)
        setCurrentDay(pageIndex)
    }

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = carouselRef.current.clientWidth * getCurrentDay()
        }
    }, [carouselRef])

    const handleDayClick = (day: number) => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = carouselRef.current.clientWidth * day
        }
    }

    return {
        handleDayClick,
        currentDay,
        events,
        handleCarouselScroll,
        carouselRef,
        interval,
        scale,
        shift,
        onEventClick,
        showDates,
        chosenEvent,
        timeInterval,
    }
}
