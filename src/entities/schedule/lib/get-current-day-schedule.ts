import { ISubject } from '@api/model'
import { Months } from '@utility-types/months'
import getDateWithoutTime from '@utils/get-date-without-time'

const currentDate = new Date()

const startDay = 1 //0=sunday, 1=monday etc.
const d = currentDate.getDay()
const weekStart = getDateWithoutTime(
    new Date(currentDate.valueOf() - (d <= 0 ? 7 - startDay : d - startDay) * 86400000),
)
const weekEnd = getDateWithoutTime(new Date(weekStart.valueOf() + 6 * 86400000))

const isCurrentWeekSubject = (subject: ISubject): boolean => {
    const [startDate, endDate] = subject.dateInterval.split('-').map((part) => part.trim())

    const [startDay, startMonth] = startDate.split(' ')
    const [endDay, endMonth] = endDate?.split(' ') ?? [null, null]

    const parsedStartDateMonth = Months[startMonth as keyof typeof Months]
    const parsedEndDateMonth = Months[endMonth as keyof typeof Months]

    const fullStartDate = new Date(`${parsedStartDateMonth}/${startDay}/${currentDate.getFullYear()}`)
    const fullEndDate =
        !!endDay && !!parsedEndDateMonth
            ? new Date(`${parsedEndDateMonth}/${endDay}/${currentDate.getFullYear()}`)
            : null

    if (!fullEndDate && weekStart <= fullStartDate && fullStartDate <= weekEnd) {
        return true
    }

    if (!!fullEndDate && fullStartDate <= weekStart && fullEndDate >= weekEnd) {
        return true
    }

    return false
}

const getCurrentDaySubjects = (daySubjects: ISubject[]): ISubject[] =>
    daySubjects.filter((subject) => isCurrentWeekSubject(subject))

export default getCurrentDaySubjects
