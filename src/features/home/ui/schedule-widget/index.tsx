import { isNextEvent } from '@features/schedule/lib/is-next-event'
import { DayEnded, HolidayPlate, SkeletonLoading } from '@features/schedule/ui'
import EventItem from '@shared/ui/calendar/ui/event/event-item'
import { checkIfEventIsCurrent } from '@shared/ui/calendar/ui/event/lib/check-if-event-is-current'
import { ErrorIconIndicator } from '@shared/ui/error-icon-indicator'
import React from 'react'
import { useScheduleWidget } from './hooks/use-schedule-widget'
import { ScheduleList, ScheduleWidgetStyled } from './styles'

export const ScheduleWidget = () => {
    const {
        listRef,
        noSchedule,
        loading,
        schedule,
        isEnded,
        hasNoSchedule,
        errorInData,
        handleOpenModal,
        handleErrorClick,
    } = useScheduleWidget()

    if (hasNoSchedule) return null

    return (
        <ScheduleWidgetStyled noSchedule={noSchedule || loading}>
            {noSchedule && !loading && <HolidayPlate errorInData={!!errorInData} />}
            {loading && <SkeletonLoading />}
            <ErrorIconIndicator visible={!!errorInData} topRightConrer onClick={handleErrorClick} />
            {!noSchedule && !loading && (
                <ScheduleList ref={listRef}>
                    {schedule?.map((event) => (
                        <EventItem
                            nameInOneRow={false}
                            listView
                            shift={0}
                            scale={1.6}
                            isNextEvent={isNextEvent(schedule, event, true)}
                            onClick={handleOpenModal}
                            isCurrentEvent={checkIfEventIsCurrent(event, true)}
                            leftShift={0}
                            quantity={1}
                            {...event}
                            key={event.title + event.weekday + event.dateInterval}
                        />
                    ))}
                    {isEnded && <DayEnded />}
                </ScheduleList>
            )}
        </ScheduleWidgetStyled>
    )
}
