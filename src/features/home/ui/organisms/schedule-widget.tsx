import { scheduleModel } from '@entities/schedule'
import { isNextEvent } from '@features/schedule/lib/is-next-event'
import { HolidayPlate, SkeletonLoading } from '@features/schedule/ui'
import { useScheduleSubjectModal } from '@features/use-schedule-subject-modal'
import { MEDIA_QUERIES } from '@shared/consts'
import EventItem from '@shared/ui/calendar/ui/event/event-item'
import React from 'react'
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

export const ScheduleWidget = () => {
    const {
        data: { schedule },
        loading,
    } = scheduleModel.selectors.useSchedule()
    const handleOpenModal = useScheduleSubjectModal()
    const noSchedule = schedule?.today.length === 0

    return (
        <ScheduleWidgetStyled noSchedule={noSchedule || loading}>
            {noSchedule && !loading && <HolidayPlate />}
            {loading && <SkeletonLoading />}
            {!noSchedule && !loading && (
                <ScheduleList>
                    {schedule?.today.map((event) => (
                        <EventItem
                            nameInOneRow={false}
                            listView
                            shift={0}
                            scale={1.6}
                            isNextEvent={isNextEvent(schedule.today, event)}
                            onClick={handleOpenModal}
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
