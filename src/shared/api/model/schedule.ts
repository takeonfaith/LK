import { Colors } from '../../consts'

export interface ISubject {
    timeInterval: string
    name: string
    place: string
    teachers: string[]
    dateInterval: string
}

export interface ISubjects {
    subjects: ISubject[]
}

export interface IWeekSchedule {
    monday: ISubjects
    tuesday: ISubjects
    wednesday: ISubjects
    thursday: ISubjects
    friday: ISubjects
    saturday: ISubjects
}

export interface IModules {
    '0': IWeekSchedule
    '1': IWeekSchedule
}

export type ViewType = 'full' | 'big'

export interface ISchedule {
    schedule: IModules
    currentModule: '0' | '1'
    currentDay: number
    currentChosenDay: number
    view: ViewType
}

export type TimeIntervals = '9:00 - 10:30' | '10:40 - 12:10' | '12:20 - 13:50' | '14:30 - 16:00' | '16:10 - 17:40'

export interface ITimeIntervalColor {
    '9:00 - 10:30': any
    '10:40 - 12:10': any
    '12:20 - 13:50': any
    '14:30 - 16:00': any
    '16:10 - 17:40': any
}

export const TimeIntervalColor: ITimeIntervalColor = {
    '9:00 - 10:30': Colors.lightGreen,
    '10:40 - 12:10': Colors.blue,
    '12:20 - 13:50': Colors.purple,
    '14:30 - 16:00': Colors.pink,
    '16:10 - 17:40': Colors.red,
}
