import { ISubject } from '@api/model'
import { Months } from '@utility-types/months'
import getDateWithoutTime from '@utils/get-date-without-time'

const currentDate = new Date('April 1, 2023')

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
    const parsedEndDateMonth = Months[endMonth as keyof typeof Months] || parsedStartDateMonth

    const fullStartDate = new Date(
        `${parsedStartDateMonth}/${startDay}/${
            parsedEndDateMonth >= parsedStartDateMonth ? currentDate.getFullYear() : currentDate.getFullYear() - 1
        }`,
    )
    const fullEndDate =
        !!endDay && !!parsedEndDateMonth
            ? new Date(
                  `${parsedEndDateMonth}/${endDay}/${
                      parsedEndDateMonth >= parsedStartDateMonth
                          ? currentDate.getFullYear()
                          : currentDate.getFullYear() + 1
                  }`,
              )
            : null

    if (fullStartDate <= weekEnd) {
        if (!fullEndDate && weekStart <= fullStartDate) {
            return true
        }

        if (!!fullEndDate && fullEndDate >= weekStart) {
            return true
        }
    }
    return false
}

const getCurrentDaySubjects = (daySubjects: ISubject[]): ISubject[] =>
    daySubjects.filter((subject) => isCurrentWeekSubject(subject))

export default getCurrentDaySubjects
