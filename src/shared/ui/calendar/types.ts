import { IColorPalette } from '@shared/constants'
import { TimeType } from '@shared/lib/dates/get-minutes-from-string-time'

export type DayCalendarEvent = {
    duration: number
    title: string
    startTime: TimeType
    startDate: Date
    endDate: Date | null
    icon: ChildrenType
    place: string
    people: string[]
    color: IColorPalette
    rooms?: string[]
    dateInterval: string
    link?: string | null
    groups?: string
    weekday: string
}

export type WeekEvents = {
    monday: DayCalendarEvent[]
    tuesday: DayCalendarEvent[]
    wednesday: DayCalendarEvent[]
    thursday: DayCalendarEvent[]
    friday: DayCalendarEvent[]
    saturday: DayCalendarEvent[]
} | null
