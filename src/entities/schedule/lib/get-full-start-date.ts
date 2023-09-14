import { Months } from '@shared/models/months'

export const getFullStartDate = (startDate: string) => {
    const [startDay, startMonth] = startDate.split(' ')

    const parsedStartDateMonth = Months[startMonth as keyof typeof Months]

    return new Date(`${parsedStartDateMonth}/${startDay}/${new Date().getFullYear()}`)
}
