import { Colors, IColorPalette } from '../../constants/consts'

export type TimeIntervals =
    | '9:00 - 10:30'
    | '10:40 - 12:10'
    | '12:20 - 13:50'
    | '14:30 - 16:00'
    | '16:10 - 17:40'
    | '17:50 - 19:20'

export interface ISubject {
    timeInterval: TimeIntervals
    name: string
    place: string
    link: string | null
    teachers: string[]
    dateInterval: string
    groups?: string
    rooms: string[]
}

export interface ILessons {
    lessons?: ISubject[] | null
}

export interface IWeekSchedule {
    monday: ILessons
    tuesday: ILessons
    wednesday: ILessons
    thursday: ILessons
    friday: ILessons
    saturday: ILessons
}

export interface ISessionSchedule {
    [key: string]: ILessons
}

export interface IModules {
    '0': IWeekSchedule | null
    '1': IWeekSchedule | null
    '2': ISessionSchedule | null
    '3': JSX.Element | null
}

export type ViewType = 'full' | 'big'

export interface ISchedule {
    schedule: IModules | null
    currentModule: '0' | '1' | '2' | '3'
    currentDay: number
    currentDayString: string
    currentChosenDay: number
    view: ViewType
    error: string | null
}

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

export const TimeIntervalColor: ITimeIntervalColor = {
    '9:00 - 10:30': Colors.lightGreen,
    '10:40 - 12:10': Colors.blue,
    '12:20 - 13:50': Colors.purple,
    '14:30 - 16:00': Colors.pink,
    '16:10 - 17:40': Colors.red,
    '17:50 - 19:20': Colors.red,
    '18:20 - 19:40': Colors.orange,
    '19:30 - 21:00': Colors.orange,
    '19:50 - 21:10': Colors.orange,
}
