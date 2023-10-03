import { areDatesEqual } from '@shared/lib/dates/are-dates-equal'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { DayCalendarEvent, WeekEvents } from '@shared/ui/calendar/types'
import { MonthEventItem } from '@shared/ui/calendar/ui/event/month-event-item'
import { SubjectsIndicator } from '@shared/ui/calendar/ui/subjects-indicator'
import { getSunday } from '@shared/ui/calendar/ui/week-days/lib/get-sunday'
import { Error } from '@shared/ui/error'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import { MAX_EVENTS_VISIBLE_PER_DAY } from '../consts'
import { getDayEvents } from '../lib/get-day-events'
import { DateSection, DateWrapper, DayCell, MonthStartName } from '../styles'
import capitalizeFirstLetter from '@shared/lib/capitalize-first-letter'
import get2DigitDumber from '@shared/lib/get-2-digit-number'
import { useModal } from 'widgets'
import { EventsModal } from '@features/schedule/ui/show-next-day-events-button/events-modal'
import localizeDate from '@shared/lib/dates/localize-date'

type Props = {
    daysAmount: number
    startDate: Date
    events: WeekEvents
    disabled?: boolean
    addOneOnWeekends: boolean
    handleEventClick?: (event: DayCalendarEvent) => void
}

const CalendarCells = ({
    daysAmount,
    startDate,
    events,
    addOneOnWeekends,
    handleEventClick,
    disabled = false,
}: Props) => {
    if (daysAmount < 0 || isNaN(daysAmount)) return <Error text={'Неправильная длина календаря'} />
    const localStartDate = new Date(startDate)
    const { isMobile } = useCurrentDevice()
    const { open } = useModal()

    const handleOpenModal = (dayEvents: DayCalendarEvent[] | undefined, day: string) => () => {
        open(<EventsModal dayEvents={dayEvents} day={day} />, day)
    }
    return (
        <>
            {Array(daysAmount)
                .fill(0)
                .map((_, i) => {
                    // Скипаем воскресенье
                    if (i !== 0) {
                        if (localStartDate.getDay() === 6 && addOneOnWeekends) {
                            localStartDate.setDate(localStartDate.getDate() + 2)
                        } else {
                            localStartDate.setDate(localStartDate.getDate() + 1)
                        }
                    } else if (localStartDate.getDay() === 0) return null

                    const dayEvents = getDayEvents(events, localStartDate)

                    const sunday = getSunday(localStartDate)
                    const showNextMonthName =
                        localStartDate.getDay() === 1 && sunday.getMonth() !== localStartDate.getMonth()

                    const showCurrentMonthName =
                        (sunday.getMonth() === localStartDate.getMonth() && i === 0 && localStartDate.getDay() === 1) ||
                        (localStartDate.getDay() === 1 && localStartDate.getDate() === 1)

                    return (
                        <React.Fragment key={localStartDate.toLocaleDateString('ru-RU')}>
                            {(showCurrentMonthName || showNextMonthName) && (
                                <MonthStartName>
                                    {capitalizeFirstLetter(
                                        showNextMonthName
                                            ? getSunday(localStartDate).toLocaleDateString('ru-RU', { month: 'long' })
                                            : localStartDate.toLocaleDateString('ru-RU', { month: 'long' }),
                                    )}
                                </MonthStartName>
                            )}
                            <DayCell
                                disabled={disabled}
                                onClick={handleOpenModal(dayEvents, localizeDate(localStartDate))}
                            >
                                <DateSection>
                                    <DateWrapper
                                        isCurrentChosenDay={areDatesEqual(localStartDate, new Date())}
                                        isCurrent={areDatesEqual(localStartDate, new Date())}
                                    >
                                        {get2DigitDumber(localStartDate.getDate())}{' '}
                                    </DateWrapper>
                                    {!isMobile &&
                                        localStartDate.getDate() === 1 &&
                                        localStartDate.toLocaleDateString('ru-RU', { month: 'short' })}
                                </DateSection>

                                {!isMobile && (
                                    <Flex d="column" ai="flex-start" gap="0px">
                                        {dayEvents?.slice(0, MAX_EVENTS_VISIBLE_PER_DAY)?.map((el) => (
                                            <MonthEventItem
                                                key={el.title + el.startTime + el.dateInterval}
                                                {...el}
                                                onClick={handleEventClick}
                                            />
                                        ))}
                                        {(dayEvents?.length ?? 0) > MAX_EVENTS_VISIBLE_PER_DAY && (
                                            <Subtext>
                                                И еще {(dayEvents?.length ?? 0) - MAX_EVENTS_VISIBLE_PER_DAY}
                                            </Subtext>
                                        )}
                                    </Flex>
                                )}

                                {isMobile && <SubjectsIndicator subjects={dayEvents} />}
                            </DayCell>
                        </React.Fragment>
                    )
                })}
        </>
    )
}

export default React.memo(CalendarCells)
