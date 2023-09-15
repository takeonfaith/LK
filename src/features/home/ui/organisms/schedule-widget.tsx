import { scheduleModel } from '@entities/schedule'
import { isNextEvent } from '@features/schedule/lib/is-next-event'
import { HolidayPlate, SkeletonLoading } from '@features/schedule/ui'
import { useScheduleSubjectModal } from '@features/use-schedule-subject-modal'
import { MEDIA_QUERIES } from '@shared/constants'
import { TimeType, getMinutesFromStringTime } from '@shared/lib/dates/get-minutes-from-string-time'
import { getMinutesFromDate } from '@shared/lib/dates/get-time-from-date'
import { DayCalendarEvent } from '@shared/ui/calendar'
import EventItem from '@shared/ui/calendar/ui/event/event-item'
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'

const ScheduleWidgetStyled = styled.div<{ noSchedule: boolean }>`
    --time-width: 30px;

    position: relative;
    width: 100%;
    max-width: calc(50% - 5px);
    height: 156px;
    padding: 6px;
    border-radius: 14px;
    background: var(--scheduleBg);

    ${MEDIA_QUERIES.isMobile} {
        --time-width: 35px;
        min-width: 100%;
    }
`

const ScheduleList = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
    border-radius: 10px;
    scroll-snap-type: y mandatory;

    & > *:not(:last-child) {
        margin-bottom: 6px;
    }

    & > * {
        background-color: var(--theme);
        scroll-snap-align: center;
        color: var(--text);
    }

    ${MEDIA_QUERIES.isNotMobile} {
        ::-webkit-scrollbar {
            display: none;
        }
    }
`

const checkIfEventIsCurrent = (event: DayCalendarEvent) => {
    return (
        getMinutesFromStringTime(event.startTime as TimeType) <= getMinutesFromDate(new Date()) &&
        getMinutesFromDate(new Date()) <= getMinutesFromStringTime(event.startTime as TimeType) + event.duration
    )
}

export const ScheduleWidget = () => {
    const {
        data: { schedule },
        loading,
    } = scheduleModel.selectors.useSchedule()
    const handleOpenModal = useScheduleSubjectModal()
    const noSchedule = schedule?.today.length === 0
    const listRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (listRef.current && (schedule?.today?.length ?? 0) > 0) {
            const currentEventIndex =
                schedule?.today.findIndex(
                    (event) => checkIfEventIsCurrent(event) || isNextEvent(schedule.today, event),
                ) ?? 0

            listRef.current.scrollTop = currentEventIndex * listRef.current.clientHeight
        }
    }, [listRef, schedule?.today])

    return (
        <ScheduleWidgetStyled noSchedule={noSchedule || loading}>
            {noSchedule && !loading && <HolidayPlate />}
            {loading && <SkeletonLoading />}
            {!noSchedule && !loading && (
                <ScheduleList ref={listRef}>
                    {schedule?.today.map((event) => (
                        <EventItem
                            nameInOneRow={false}
                            listView
                            shift={0}
                            scale={1.6}
                            isNextEvent={isNextEvent(schedule.today, event)}
                            onClick={handleOpenModal}
                            isCurrentEvent={checkIfEventIsCurrent(event)}
                            isCurrent={false}
                            otherIsCurrent={false}
                            leftShift={0}
                            quantity={1}
                            {...event}
                            key={event.title + event.weekday + event.dateInterval}
                        />
                    ))}
                </ScheduleList>
            )}
        </ScheduleWidgetStyled>
    )
}
