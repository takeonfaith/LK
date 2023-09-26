import { scheduleModel } from '@entities/schedule'
import isDayEnded from '@features/schedule/lib/is-day-ended'
import { isNextEvent } from '@features/schedule/lib/is-next-event'
import { useScheduleSubjectModal } from '@features/use-schedule-subject-modal'
import { useScrollTo } from '@shared/lib/hooks/use-scroll-to'
import { checkIfEventIsCurrent } from '@shared/ui/calendar/ui/event/lib/check-if-event-is-current'

export const useScheduleWidget = () => {
    const {
        data: { schedule },
        loading,
    } = scheduleModel.selectors.useSchedule()
    const handleOpenModal = useScheduleSubjectModal()
    const noSchedule = schedule?.today?.length === 0 || !schedule?.today
    const isEnded = isDayEnded(schedule?.today)
    const listRef = useScrollTo({
        deps: [schedule?.today],
        condition: (schedule?.today?.length ?? 0) > 1,
        getScrollTopValue: (element) =>
            element.clientHeight *
            (isEnded
                ? schedule?.today?.length ?? 0
                : schedule?.today?.findIndex(
                      (event) => checkIfEventIsCurrent(event, true) || isNextEvent(schedule.today, event, true),
                  ) ?? 0),
    })

    return { listRef, noSchedule, handleOpenModal, loading, schedule: schedule?.today, isEnded }
}
