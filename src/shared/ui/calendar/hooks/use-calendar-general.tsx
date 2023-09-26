import { useScheduleSubjectModal } from '@features/use-schedule-subject-modal'
import { useCalendarScale } from '@shared/ui/calendar/hooks/use-calendar-scale'
import { CalendarWeekProps } from '../calendars/week/types'

type Props = CalendarWeekProps

export const useCalendarGeneral = ({ interval, showDates, events, onDayClick }: Props) => {
    const shift = interval[0] * 60
    const scale = useCalendarScale()
    const handleOpenModal = useScheduleSubjectModal()

    return { handleOpenModal, onDayClick, shift, showDates, interval, events, scale }
}
