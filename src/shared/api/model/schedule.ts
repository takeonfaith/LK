import { type DayCalendarEvent } from '@shared/ui/calendar'
import { Colors, IColorPalette, IWeekDayNames } from '../../constants'
import { View } from '@entities/schedule/consts'

export interface ITimeIntervalColor {
    '9:00 - 10:30': IColorPalette
    '10:40 - 12:10': IColorPalette
    '12:20 - 13:50': IColorPalette
    '14:30 - 16:00': IColorPalette
    '16:10 - 17:40': IColorPalette
    '17:50 - 19:20': IColorPalette
    '18:20 - 19:40': IColorPalette
    '19:30 - 21:00': IColorPalette
    '19:50 - 21:10': IColorPalette
}

export type TimeIntervals = keyof ITimeIntervalColor

export interface ISubject {
    timeInterval: TimeIntervals
    name: string
    place: string
    link: string | null | undefined
    teachers: string[]
    dateInterval: string
    weekday?: string
    groups?: string
    rooms: string[]
}

export interface ILessons {
    lessons?: ISubject[] | null
}

type ErrorResponse = {
    status: string
    error: string
}

export type CapitalLettersWeekNames = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'

export type RawTeacherScheduleResponse = Record<CapitalLettersWeekNames, ISubject[] | null>
export type FullRawTeacherScheduleResponse = RawTeacherScheduleResponse | ErrorResponse

export type RawScheduleResponse = Record<CapitalLettersWeekNames, Record<'lessons', ISubject[] | null>>
export type FullRawScheduleResponse = RawScheduleResponse | ErrorResponse

type ExamDate = string // 2023-12-26, например
export type RawSessionScheduleResponse = Record<ExamDate, ILessons>

export interface IWeekSchedule {
    monday: ILessons
    tuesday: ILessons
    wednesday: ILessons
    thursday: ILessons
    friday: ILessons
    saturday: ILessons
}

export type IWeekEventSchedule = Record<IWeekDayNames, DayCalendarEvent[]>

export interface ISessionSchedule {
    [key: string]: ILessons
}

export interface IFullSchedule {
    today: DayCalendarEvent[]
    week: IWeekEventSchedule
    semestr: { data: IWeekEventSchedule; startDate: Date; endDate: Date }
    session: { data: IWeekEventSchedule; startDate: Date; endDate: Date }
}

export type ViewType = 'full' | 'big'

export interface ISchedule {
    data: {
        schedule: IFullSchedule | null
        externalSchedule: IFullSchedule | null
        view: View
        filter: string
        searchValue: string
    }
    loading: boolean
    error: string | null
}

export const TimeIntervalColor: ITimeIntervalColor = {
    '9:00 - 10:30': Colors.green,
    '10:40 - 12:10': Colors.lightGreen,
    '12:20 - 13:50': Colors.blue,
    '14:30 - 16:00': Colors.purple,
    '16:10 - 17:40': Colors.pink,
    '17:50 - 19:20': Colors.red,
    '18:20 - 19:40': Colors.orange,
    '19:30 - 21:00': Colors.orange,
    '19:50 - 21:10': Colors.orange,
}
