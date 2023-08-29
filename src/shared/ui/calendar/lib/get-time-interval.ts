import { TimeIntervals } from '@shared/api/model'
import { DayCalendarEvent } from '../types'
import { getEndTime } from '../ui/day/lib/get-end-time'

export const getTimeInterval = (startTime: DayCalendarEvent['startTime'], duration: DayCalendarEvent['duration']) => {
    return event ? (`${startTime} - ${getEndTime(startTime, duration)}` as TimeIntervals) : ('9:00' as TimeIntervals)
}
