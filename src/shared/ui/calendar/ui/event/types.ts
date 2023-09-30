import { DayCalendarEvent } from '../../types'

export type UIProps = {
    shift: number
    scale: number
    onClick: (event: DayCalendarEvent) => void
    shortInfo?: boolean
    leftShift: number
    quantity: number
    listView?: boolean
    nameInOneRow?: boolean
}

export type StyledProps = Omit<UIProps, 'onClick' | 'shift'> & {
    duration: number
    startDayShift: number
    startTimeShift: number
    textColor: string
}
