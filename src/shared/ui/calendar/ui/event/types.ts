import { DayCalendarEvent } from '../../types'

export type UIProps = {
    shift: number
    scale: number
    onClick: (event: DayCalendarEvent) => void
    isCurrent: boolean
    otherIsCurrent: boolean
    shortInfo?: boolean
    leftShift: number
    width: number
}

export type StyledProps = Omit<UIProps, 'onClick' | 'shift'> & {
    duration: number
    startDayShift: number
    startTimeShift: number
}
