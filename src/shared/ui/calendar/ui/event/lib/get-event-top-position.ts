import { TimeType } from '@shared/lib/dates/get-minutes-from-string-time'
import { getStartTimeShiftInMinutes } from './get-start-time-shift-in-minutes'

export const getEventTopPosition = (startTime: TimeType | undefined, startDayShift: number, scale: number) => {
    if (!startTime) return 0

    const startTimeShift = getStartTimeShiftInMinutes(startTime)

    return (startTimeShift - startDayShift) * scale
}
