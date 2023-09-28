import { Months } from '@shared/models/months'

export const getFullStartDate = (startDate: string) => {
    const [startDay, startMonth] = startDate.split(' ')

    const parsedStartDateMonth = Months[startMonth as keyof typeof Months]

    const fullYear =
        new Date().getMonth() > parsedStartDateMonth ? new Date().getFullYear() + 1 : new Date().getFullYear()

    return new Date(`${parsedStartDateMonth}/${startDay}/${fullYear}`)
}
