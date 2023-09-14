import { IColorPalette } from '@shared/consts'

export type DayCalendarEvent = {
    duration: number
    title: string
    startTime: string
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
