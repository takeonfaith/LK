import { Colors, IColorPalette } from '../../consts'

export interface ISubject {
    timeInterval: string
    name: string
    place: string
    link: string | null
    teachers: string[]
    dateInterval: string
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

export interface IModules {
    '0': IWeekSchedule
    '1': IWeekSchedule
}

export type ViewType = 'full' | 'big'

export interface ISchedule {
    schedule: IModules | null
    currentModule: '0' | '1'
    currentDay: number
    currentChosenDay: number
    view: ViewType
    error: string | null
}

export type TimeIntervals =
    | '9:00 - 10:30'
    | '10:40 - 12:10'
    | '12:20 - 13:50'
    | '14:30 - 16:00'
    | '16:10 - 17:40'
    | '17:50 - 19:20'

export interface ITimeIntervalColor {
    '9:00 - 10:30': IColorPalette
    '10:40 - 12:10': IColorPalette
    '12:20 - 13:50': IColorPalette
    '14:30 - 16:00': IColorPalette
    '16:10 - 17:40': IColorPalette
    '17:50 - 19:20': IColorPalette
}

export const TimeIntervalColor: ITimeIntervalColor = {
    '9:00 - 10:30': Colors.lightGreen,
    '10:40 - 12:10': Colors.blue,
    '12:20 - 13:50': Colors.purple,
    '14:30 - 16:00': Colors.pink,
    '16:10 - 17:40': Colors.red,
    '17:50 - 19:20': Colors.red,
}
